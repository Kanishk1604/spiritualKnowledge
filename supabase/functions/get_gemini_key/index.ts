
// Follow this setup guide to integrate the Deno runtime into your application:
// https://deno.land/manual/examples/deployment

import { serve } from "https://deno.land/std@0.177.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS, GET',
  'Content-Type': 'application/json'
};

serve(async (req) => {
  // This is needed if you're planning to invoke your function from a browser.
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    // Get the API key from environment variable (set in edge function secrets)
    // Using the verified working key that's being used successfully in requests
    const apiKey = Deno.env.get("GEMINI_API_KEY") || 'AIzaSyAZHdvgLoLDF4-nezD61BbDZyUBpm_QPOY';
    
    console.log(`[${new Date().toISOString()}] get_gemini_key function called`);
    console.log(`API key exists: ${Boolean(apiKey)}`);
    
    // Validate the API key with improved logging
    if (!apiKey || apiKey.trim() === '' || apiKey === 'undefined') {
      console.error("CRITICAL ERROR: GEMINI_API_KEY is not set, empty, or invalid");
      return new Response(
        JSON.stringify({ 
          error: "GEMINI_API_KEY is not properly configured",
          status: "error" 
        }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 500,
        },
      );
    }
    
    // Log that we found a valid API key (mask most of it for security)
    const maskedKey = apiKey.substring(0, 4) + "..." + apiKey.substring(apiKey.length - 4);
    console.log(`API key found and valid. Masked key: ${maskedKey}`);
    
    // Test the API key with a simple call to Gemini to verify it works
    try {
      const testCall = await fetch('https://generativelanguage.googleapis.com/v1/models', {
        headers: {
          'x-goog-api-key': apiKey
        }
      });
      
      console.log(`Test API call status: ${testCall.status}`);
      
      if (!testCall.ok) {
        const errorText = await testCall.text();
        console.error(`API key validation failed with status ${testCall.status}: ${errorText}`);
        return new Response(
          JSON.stringify({ 
            error: `Invalid API key: ${testCall.status}`,
            message: errorText,
            status: "error" 
          }),
          {
            headers: { ...corsHeaders, "Content-Type": "application/json" },
            status: testCall.status,
          },
        );
      }
      
      console.log('API key validation successful');
    } catch (validationError) {
      console.error(`API key validation error: ${validationError.message}`);
      // Continue anyway, as this might be a network error rather than an invalid key
    }

    // Return the API key with success status
    return new Response(
      JSON.stringify({ 
        data: { apiKey },
        status: "success" 
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      },
    );
  } catch (error) {
    console.error(`Error in get_gemini_key function: ${error.message}`);
    console.error(`Error stack: ${error.stack}`);
    
    return new Response(
      JSON.stringify({ 
        error: error.message,
        stack: error.stack,
        status: "error"
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      },
    );
  }
});
