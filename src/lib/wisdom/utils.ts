
import { Language } from '@/types';
import { fallbackWisdomResponses } from './fallbackResponses';

// Helper function to get fallback response
export function getFallbackResponse(category: string, language: Language) {
  console.log('Using fallback response for category:', category, 'language:', language);
  const responses = fallbackWisdomResponses[language] || fallbackWisdomResponses.english;
  return responses[category] || responses.default;
}

// Helper function to construct the prompt for the AI
export function constructPrompt(question: string, category: string, language: Language) {
  let prompt = `You are both a wise spiritual guide knowledgeable in the Bhagavad Gita AND a modern psychologist or life coach. Respond to this problem in a way that today's generation would relate to while providing authentic wisdom.

    The user's problem is: "${question}" (category: ${category})
    
    Your response should:
    1. Acknowledge their struggle with empathy in 1-2 sentences
    2. Provide one or two relevant principles from the Bhagavad Gita, explaining the concept in modern language
    3. Outline 2-3 practical steps they can take, rooted in this wisdom but presented in contemporary terms
    4. End with a brief encouraging statement
    
    Use accessible language while preserving the depth of the wisdom. Avoid religious jargon that might alienate someone unfamiliar with Hindu concepts - instead, focus on the psychological insights.
    
    Keep your response concise (200-400 words).`;
  
  // Add specific instructions for Hindi to maintain formal, respectful language
  if (language === 'hindi') {
    prompt += `
    
    पूरे उत्तर को सम्मानजनक, औपचारिक हिंदी में लिखें। "यार", "अरे", जैसे अनौपचारिक शब्दों का प्रयोग न करें। आध्यात्मिक मार्गदर्शन के लिए उपयुक्त सम्मानजनक भाषा का प्रयोग करें। हिंदी भाषा सहज और समझने योग्य होनी चाहिए, लेकिन अनौपचारिक या बेहद आम बोलचाल वाली नहीं।`;
  } else {
    prompt += "\nPlease respond in conversational English that's easy to understand while maintaining a respectful tone.";
  }
  
  return prompt;
}

// Helper function to check if the error is API key related
export function isApiKeyError(errorMsg: string): boolean {
  return errorMsg.includes('API key') || 
         errorMsg.includes('unauthorized') || 
         errorMsg.includes('API authentication') ||
         errorMsg.includes('403') ||
         errorMsg.includes('INVALID_ARGUMENT');
}

// Helper function to check if the error is network related
export function isNetworkError(errorMsg: string): boolean {
  return errorMsg.includes('Failed to fetch') || 
         errorMsg.includes('NetworkError') ||
         errorMsg.includes('Failed to send a request') ||
         errorMsg.includes('Failed to connect to wisdom service') ||
         errorMsg.includes('timed out') ||
         errorMsg.includes('ECONNREFUSED') ||
         errorMsg.includes('Network request failed') ||
         errorMsg.includes('AbortError');
}
