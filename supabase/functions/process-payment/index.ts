
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.38.4";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Get environment variables
const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? '';
const supabaseAnonKey = Deno.env.get('SUPABASE_ANON_KEY') ?? '';
const paypalClientId = Deno.env.get('PAYPAL_CLIENT_ID') ?? '';
const paypalSecretKey = Deno.env.get('PAYPAL_SECRET_KEY') ?? '';
const razorpayKeyId = Deno.env.get('RAZORPAY_KEY_ID') ?? '';
const razorpayKeySecret = Deno.env.get('RAZORPAY_KEY_SECRET') ?? '';

// Initialize Supabase client
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// PayPal API URLs
const PAYPAL_API_URL = 'https://api-m.sandbox.paypal.com'; // Use https://api-m.paypal.com for production

// Function to get PayPal access token
async function getPayPalAccessToken() {
  const auth = btoa(`${paypalClientId}:${paypalSecretKey}`);
  
  const response = await fetch(`${PAYPAL_API_URL}/v1/oauth2/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${auth}`,
    },
    body: 'grant_type=client_credentials',
  });

  const data = await response.json();
  return data.access_token;
}

// Function to create a PayPal order
async function createPayPalOrder(planId: string) {
  try {
    // Fetch plan details from database
    const { data: planData, error: planError } = await supabase
      .from('subscription_plans')
      .select('*')
      .eq('id', planId)
      .single();

    if (planError || !planData) {
      throw new Error(`Error fetching plan: ${planError?.message || 'Plan not found'}`);
    }

    const accessToken = await getPayPalAccessToken();
    
    const response = await fetch(`${PAYPAL_API_URL}/v2/checkout/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: planData.currency,
              value: planData.price.toString(),
            },
            description: `${planData.name} Plan - Monthly Subscription`,
          },
        ],
        application_context: {
          brand_name: 'Bhagwat Wisdom',
          shipping_preference: 'NO_SHIPPING',
          user_action: 'PAY_NOW',
          return_url: `${supabaseUrl}/functions/v1/payment-callback?provider=paypal&plan=${planId}`,
          cancel_url: `${supabaseUrl}/functions/v1/payment-callback?provider=paypal&status=cancelled`,
        },
      }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating PayPal order:', error);
    throw error;
  }
}

// Function to create a Razorpay order
async function createRazorpayOrder(planId: string) {
  try {
    // Fetch plan details from database
    const { data: planData, error: planError } = await supabase
      .from('subscription_plans')
      .select('*')
      .eq('id', planId)
      .single();

    if (planError || !planData) {
      throw new Error(`Error fetching plan: ${planError?.message || 'Plan not found'}`);
    }

    const auth = btoa(`${razorpayKeyId}:${razorpayKeySecret}`);
    
    const response = await fetch('https://api.razorpay.com/v1/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${auth}`,
      },
      body: JSON.stringify({
        amount: Math.round(planData.price * 100), // Amount in smallest currency unit (paise for INR)
        currency: planData.currency,
        receipt: `plan_${planId}_${Date.now()}`,
        notes: {
          plan_id: planId,
          plan_name: planData.name,
        },
      }),
    });

    const data = await response.json();
    return {
      ...data,
      key_id: razorpayKeyId,
      plan_details: {
        name: planData.name,
        price: planData.price,
        currency: planData.currency,
      },
    };
  } catch (error) {
    console.error('Error creating Razorpay order:', error);
    throw error;
  }
}

// Function to capture a PayPal payment
async function capturePayPalPayment(orderId: string) {
  try {
    const accessToken = await getPayPalAccessToken();
    
    const response = await fetch(`${PAYPAL_API_URL}/v2/checkout/orders/${orderId}/capture`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error capturing PayPal payment:', error);
    throw error;
  }
}

// Function to verify a Razorpay payment
async function verifyRazorpayPayment(paymentId: string, orderId: string, signature: string) {
  try {
    const crypto = await import('https://deno.land/std@0.168.0/node/crypto.ts');
    
    // Create the signature verification string
    const body = orderId + "|" + paymentId;
    
    // Verify the signature
    const expectedSignature = crypto.createHmac('sha256', razorpayKeySecret)
      .update(body)
      .digest('hex');
    
    // Compare the signatures
    if (expectedSignature === signature) {
      return { verified: true };
    } else {
      return { verified: false, message: "Invalid signature" };
    }
  } catch (error) {
    console.error('Error verifying Razorpay payment:', error);
    throw error;
  }
}

// Function to save subscription and payment info
async function saveSubscription(userId: string, planId: string, provider: string, paymentDetails: any) {
  try {
    // Fetch plan details
    const { data: planData, error: planError } = await supabase
      .from('subscription_plans')
      .select('*')
      .eq('id', planId)
      .single();

    if (planError || !planData) {
      throw new Error(`Error fetching plan: ${planError?.message || 'Plan not found'}`);
    }

    // Calculate subscription period (1 month from now)
    const startDate = new Date();
    const endDate = new Date();
    endDate.setMonth(endDate.getMonth() + 1);

    // Save subscription
    const { data: subscriptionData, error: subscriptionError } = await supabase
      .from('user_subscriptions')
      .insert({
        user_id: userId,
        plan_id: planId,
        payment_provider: provider,
        payment_id: provider === 'paypal' ? paymentDetails.id : paymentDetails.razorpay_payment_id,
        status: 'active',
        current_period_start: startDate.toISOString(),
        current_period_end: endDate.toISOString(),
      })
      .select()
      .single();

    if (subscriptionError) {
      throw new Error(`Error saving subscription: ${subscriptionError.message}`);
    }

    // Save payment history
    const { error: paymentError } = await supabase
      .from('payment_history')
      .insert({
        user_id: userId,
        subscription_id: subscriptionData.id,
        payment_provider: provider,
        payment_id: provider === 'paypal' ? paymentDetails.id : paymentDetails.razorpay_payment_id,
        amount: planData.price,
        currency: planData.currency,
        status: 'completed',
      });

    if (paymentError) {
      throw new Error(`Error saving payment history: ${paymentError.message}`);
    }

    // Update user profile to premium
    const { error: profileError } = await supabase
      .from('profiles')
      .update({ is_premium: true })
      .eq('id', userId);

    if (profileError) {
      console.error(`Error updating user profile: ${profileError.message}`);
      // Continue despite error to maintain subscription data
    }

    return { success: true, subscription: subscriptionData };
  } catch (error) {
    console.error('Error saving subscription:', error);
    throw error;
  }
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders, status: 204 });
  }

  try {
    // Get the authorization header
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      return new Response(
        JSON.stringify({ error: 'Missing authorization header' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Get the JWT token from the authorization header
    const token = authHeader.replace('Bearer ', '');
    
    // Verify the JWT token and get the user
    const { data: { user }, error: authError } = await supabase.auth.getUser(token);
    
    if (authError || !user) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized', details: authError?.message }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const { pathname, searchParams } = new URL(req.url);
    
    // Process the request based on the path
    if (req.method === 'POST') {
      const body = await req.json();
      
      if (pathname.endsWith('/create-order')) {
        const { planId, provider } = body;
        
        if (!planId || !provider) {
          return new Response(
            JSON.stringify({ error: 'Missing required parameters' }),
            { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }
        
        let orderResponse;
        
        if (provider === 'paypal') {
          orderResponse = await createPayPalOrder(planId);
        } else if (provider === 'razorpay') {
          orderResponse = await createRazorpayOrder(planId);
        } else {
          return new Response(
            JSON.stringify({ error: 'Invalid payment provider' }),
            { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }
        
        return new Response(
          JSON.stringify(orderResponse),
          { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      } else if (pathname.endsWith('/verify-payment')) {
        const { provider, planId, ...paymentDetails } = body;
        
        if (!provider || !planId) {
          return new Response(
            JSON.stringify({ error: 'Missing required parameters' }),
            { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }
        
        let verificationResult;
        
        if (provider === 'paypal') {
          const { orderId } = paymentDetails;
          if (!orderId) {
            return new Response(
              JSON.stringify({ error: 'Missing PayPal order ID' }),
              { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            );
          }
          
          verificationResult = await capturePayPalPayment(orderId);
        } else if (provider === 'razorpay') {
          const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = paymentDetails;
          if (!razorpay_payment_id || !razorpay_order_id || !razorpay_signature) {
            return new Response(
              JSON.stringify({ error: 'Missing Razorpay payment details' }),
              { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            );
          }
          
          verificationResult = await verifyRazorpayPayment(
            razorpay_payment_id,
            razorpay_order_id,
            razorpay_signature
          );
          
          if (!verificationResult.verified) {
            return new Response(
              JSON.stringify({ error: 'Payment verification failed', details: verificationResult.message }),
              { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            );
          }
        } else {
          return new Response(
            JSON.stringify({ error: 'Invalid payment provider' }),
            { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }
        
        // Save subscription and payment info
        const subscriptionResult = await saveSubscription(
          user.id,
          planId,
          provider,
          provider === 'paypal' ? verificationResult : paymentDetails
        );
        
        return new Response(
          JSON.stringify({
            success: true,
            message: 'Payment verified and subscription activated',
            ...subscriptionResult
          }),
          { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
    }
    
    // If no matching endpoint is found
    return new Response(
      JSON.stringify({ error: 'Not found' }),
      { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error processing request:', error);
    
    return new Response(
      JSON.stringify({ error: 'Internal server error', details: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
