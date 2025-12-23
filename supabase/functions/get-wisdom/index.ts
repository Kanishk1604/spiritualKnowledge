// Follow this setup guide to integrate the Deno runtime into your application:
// https://deno.land/manual/examples/deployment

import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Content-Type': 'application/json'
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: CORS_HEADERS });
  }
  
  try {
    // Get the API key from environment variables and log status
    // Using a valid API key for Gemini as fallback
    const GEMINI_API_KEY = Deno.env.get('GEMINI_API_KEY') || 'AIzaSyAZHdvgLoLDF4-nezD61BbDZyUBpm_QPOY';
    
    // Log the beginning of the function execution with timestamp
    console.log(`[${new Date().toISOString()}] Edge function started`);
    
    // Validate request
    const { question, category, language } = await req.json();
    
    if (!question || !category || !language) {
      throw new Error('Missing required fields');
    }
    
    console.log(`Processing request for question: "${question}", category: "${category}", language: "${language}"`);
    
    // Check API key explicitly with improved error messages
    if (!GEMINI_API_KEY) {
      console.error('[ERROR] GEMINI_API_KEY is not available in environment variables');
      return new Response(
        JSON.stringify({ 
          status: 'error',
          message: 'API key not configured in Supabase Edge Function secrets',
          useFallback: true,
          error: 'GEMINI_API_KEY not found in Supabase Edge Function environment variables. Please add it to your secrets.'
        }),
        { headers: CORS_HEADERS, status: 400 }
      );
    }
    
    // Verify that the API key is not empty or malformed
    if (GEMINI_API_KEY.trim() === '' || GEMINI_API_KEY === 'undefined') {
      console.error('[ERROR] GEMINI_API_KEY is empty or malformed');
      return new Response(
        JSON.stringify({ 
          status: 'error',
          message: 'Invalid API key format',
          useFallback: true,
          error: 'GEMINI_API_KEY is empty or malformed. Please check your Supabase secret.'
        }),
        { headers: CORS_HEADERS, status: 400 }
      );
    }
    
    console.log(`API key found. First 4 chars: ${GEMINI_API_KEY.substring(0, 4)}...`);
    
    // Construct different prompt types based on the category
    let prompt = '';
    
    if (category === 'mantra' || category === 'mood_mantra') {
      // Enhanced prompt specifically for mantras based on mood
      prompt = `You are a wise spiritual guide deeply knowledgeable in ancient mantras from Hindu, Buddhist, and Vedic traditions. 
      
      Generate a spiritually resonant and authentic mantra for someone feeling "${question}".

      Your response should include:
      1. A short, memorable Sanskrit or traditional mantra text (3-10 words) that genuinely addresses this emotional state
      2. A meaningful explanation that connects this mantra to:
         - The emotional/mental state of "${question}"
         - A relevant teaching from the Bhagavad Gita or Vedic wisdom
         - How this mantra can help transform or work with this specific feeling

      The mantra should feel authentic and not manufactured - if there's a traditional mantra that addresses this feeling, use that rather than creating something new.
      
      Include proper pronunciation guidance if the mantra contains Sanskrit words.
      
      Keep your response concise (150-250 words).`;
    } else {
      // Original prompt for other wisdom categories
      prompt = `You are both a wise spiritual guide knowledgeable in the Bhagavad Gita AND a modern psychologist or life coach. Respond to this problem in a way that today's generation would relate to while providing authentic wisdom.

      The user's problem is: "${question}" (category: ${category})
      
      Your response should:
      1. Acknowledge their struggle with empathy in 1-2 sentences
      2. Provide one or two relevant principles from the Bhagavad Gita, explaining the concept in modern language
      3. Outline 2-3 practical steps they can take, rooted in this wisdom but presented in contemporary terms
      4. End with a brief encouraging statement
      
      Use accessible language while preserving the depth of the wisdom. Avoid religious jargon that might alienate someone unfamiliar with Hindu concepts - instead, focus on the psychological insights.
      
      Keep your response concise (200-400 words).`;
    }
    
    // Add language-specific instructions for formality
    if (language === 'hindi') {
      prompt += `
      
      पूरे उत्तर को सम्मानजनक, औपचारिक हिंदी में लिखें। "यार", "अरे", जैसे अनौपचारिक शब्दों का प्रयोग न करें। आध्यात्मिक मार्गदर्शन के लिए उपयुक्त सम्मानजनक भाषा का प्रयोग करें। हिंदी भाषा सहज और समझने योग्य होनी चाहिए, लेकिन अनौपचारिक या बेहद आम बोलचाल वाली नहीं।`;
    }
    
    try {
      // Call Gemini API with improved timeout handling - REDUCED from 15s to 10s for faster fallback
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout (reduced from 15s)
      
      // Use the correct API URL for Gemini model
      const apiUrl = 'https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateContent';
      console.log(`Using API URL: ${apiUrl}`);

      // Log exact request details for debugging
      const requestBody = {
        contents: [
          {
            role: 'user',
            parts: [{ text: prompt }]
          }
        ],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 800,
        }
      };
      
      console.log('Sending request to Gemini API...');
      console.log('Request body:', JSON.stringify(requestBody));

      // Gemini API endpoint
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': GEMINI_API_KEY,
        },
        body: JSON.stringify(requestBody),
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);
      
      // Log the response status
      console.log(`Gemini API response status: ${response.status}`);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error(`[ERROR] Gemini API error response: ${errorText}`);
        
        if (response.status === 403) {
          return new Response(
            JSON.stringify({ 
              status: 'error',
              message: 'Invalid or unauthorized Gemini API key',
              retryable: false,
              useFallback: true,
              error: `API authentication error: The Gemini API key appears to be invalid or unauthorized.`
            }),
            { headers: CORS_HEADERS, status: 403 }
          );
        } else if (response.status === 429) {
          return new Response(
            JSON.stringify({ 
              status: 'error',
              message: 'Gemini API rate limit exceeded',
              retryable: true,
              useFallback: true,
              error: `API rate limit exceeded`
            }),
            { headers: CORS_HEADERS, status: 429 }
          );
        } else if (response.status === 404) {
          // Added specific handling for 404 model not found errors
          return new Response(
            JSON.stringify({ 
              status: 'error',
              message: 'Gemini API model not found',
              retryable: false,
              useFallback: true,
              error: `API model error: ${errorText}`
            }),
            { headers: CORS_HEADERS, status: 404 }
          );
        }
        
        throw new Error(`API error: ${response.status} - ${errorText}`);
      }

      const data = await response.json();
      console.log('Received response from Gemini API');
      console.log('Response data structure:', Object.keys(data));
      
      // Validate Gemini API response structure
      if (!data.candidates?.[0]?.content?.parts?.[0]?.text) {
        console.error('[ERROR] Invalid Gemini API response structure');
        console.error('Response data:', JSON.stringify(data));
        throw new Error('Invalid API response format');
      }

      // Return successful response
      const answer = data.candidates[0].content.parts[0].text;
      console.log(`Returning answer (truncated): ${answer.substring(0, 50)}...`);
      
      return new Response(
        JSON.stringify({ 
          answer: answer,
          status: 'success',
          useFallback: false
        }), 
        {
          headers: CORS_HEADERS,
          status: 200
        }
      );
    } catch (apiError) {
      console.error('[ERROR] Gemini API error:', apiError.message);
      
      // Check if it's an abort error (timeout)
      if (apiError.name === 'AbortError') {
        return new Response(
          JSON.stringify({ 
            status: 'error',
            message: 'Gemini API request timed out after 10 seconds',
            retryable: true,
            error: apiError.message,
            useFallback: true
          }),
          { headers: CORS_HEADERS, status: 504 }
        );
      }
      
      // Return a specific error message to help with debugging
      return new Response(
        JSON.stringify({ 
          status: 'error',
          message: `Gemini API error: ${apiError.message}`,
          retryable: true,
          useFallback: true,
          error: apiError.message
        }),
        { headers: CORS_HEADERS, status: 500 }
      );
    }
  } catch (error) {
    console.error('[ERROR] Edge function error:', error);
    
    // Return error status with more details
    return new Response(
      JSON.stringify({ 
        status: 'error',
        message: error.message || 'Request processing failed',
        retryable: true,
        useFallback: true,
        error: error.stack
      }),
      { 
        status: 500,
        headers: CORS_HEADERS
      }
    );
  }
});
