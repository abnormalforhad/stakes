/* eslint-disable */
// @ts-nocheck

export async function sendMessageToAI(message: string) {
  // @ts-ignore
  const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;

  if (!API_KEY) {
    console.error("API Key is missing");
    return "Error: API Key is missing in Vercel Settings.";
  }

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
        // @ts-ignore
        "HTTP-Referer": window.location.origin,
        "X-Title": "Stacks Expert"
      },
      body: JSON.stringify({
        model: "google/gemini-2.0-flash-001",
        messages: [
          {
            role: "user",
            content: message
          }
        ]
      })
    });

    if (!response.ok) {
      return `Error: ${response.status}`;
    }

    const data = await response.json();
    
    // @ts-ignore
    return data.choices?.[0]?.message?.content || "No response.";

  } catch (error) {
    console.error("AI Error", error);
    return "System Error: Check console.";
  }
}
