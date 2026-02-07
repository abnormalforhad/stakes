const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY; // Access the key from .env.local

export async function sendMessageToAI(message: string) {
  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
        // Optional headers for OpenRouter rankings
        "HTTP-Referer": "https://your-site.com", 
        "X-Title": "Stacks Expert"
      },
      body: JSON.stringify({
        // Use a model supported by OpenRouter
        model: "google/gemini-2.0-pro-exp-02-05:free", 
        messages: [
          {
            role: "user",
            content: message
          }
        ]
      })
    });

    const data = await response.json();
    
    // OpenRouter returns OpenAI-style responses. 
    // You likely need to return: data.choices[0].message.content
    return data.choices[0].message.content;

  } catch (error) {
    console.error("AI Error:", error);
    throw error;
  }
}
