// services/api.ts (or whatever your file is named)

const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;
const BASE_URL = "https://openrouter.ai/api/v1/chat/completions";

export async function sendMessageToAI(message: string) {
  if (!API_KEY) {
    console.error("API Key is missing. Check .env.local");
    throw new Error("API Key is missing");
  }

  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
        // These headers help OpenRouter track your app
        "HTTP-Referer": window.location.origin, 
        "X-Title": "Stacks Expert"
      },
      body: JSON.stringify({
        // 1. USE THIS MODEL ID (It is free and fast for testing)
        model: "google/gemini-2.0-flash-001",
        
        // 2. CRITICAL FIX: Use 'messages' (OpenAI style), NOT 'contents' (Google style)
        messages: [
          {
            role: "user",
            content: message
          }
        ]
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || `Error: ${response.status}`);
    }

    const data = await response.json();
    
    // 3. CRITICAL FIX: OpenRouter returns data in 'choices', not 'candidates'
    return data.choices[0].message.content;

  } catch (error) {
    console.error("AI Request Failed:", error);
    throw error;
  }
}
