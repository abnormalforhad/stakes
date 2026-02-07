// @ts-nocheck
/* eslint-disable */

export async function sendMessageToAI(message) {
  // Direct access to bypass strict checks
  const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;

  if (!API_KEY) {
    console.error("API Key missing in Vercel.");
    return "Error: VITE_OPENROUTER_API_KEY is missing in Vercel Settings.";
  }

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": window.location.origin, // Required by OpenRouter
      },
      body: JSON.stringify({
        model: "google/gemini-2.0-flash-001", // Free and fast
        messages: [{ role: "user", content: message }]
      })
    });

    if (!response.ok) {
      return `Error: ${response.status} - Check Vercel Logs`;
    }

    const data = await response.json();
    return data.choices?.[0]?.message?.content || "No response.";

  } catch (error) {
    console.error(error);
    return "Connection Error.";
  }
}
