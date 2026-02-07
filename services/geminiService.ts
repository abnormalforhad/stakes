// services/geminiService.ts

// 1. Get the Key safely
const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;

export async function sendMessageToAI(message: string) {
  // 2. Check if the key is actually there
  if (!API_KEY) {
    console.error("CRITICAL: VITE_OPENROUTER_API_KEY is missing in Vercel Settings.");
    return "System Error: API Key is missing. Please add it to Vercel Environment Variables.";
  }

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": window.location.origin,
        "X-Title": "Stacks Expert"
      },
      body: JSON.stringify({
        // Use the free flash model for testing
        model: "google/gemini-2.0-flash-001",
        messages: [
          {
            role: "user",
            content: message
          }
        ]
      })
    });

    // 3. Handle HTTP Errors
    if (!response.ok) {
      const errorText = await response.text();
      console.error("OpenRouter API Error:", errorText);
      return `Error: ${response.status} - ${response.statusText}`;
    }

    // 4. Parse JSON safely (using 'any' to prevent Build Errors)
    const data: any = await response.json();
    
    // 5. Return the answer
    if (data.choices && data.choices.length > 0) {
      return data.choices[0].message.content;
    } else {
      return "Error: No response from AI.";
    }

  } catch (error) {
    console.error("Network Error:", error);
    return "System Error: Failed to connect to OpenRouter.";
  }
}
