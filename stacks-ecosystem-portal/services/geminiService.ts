
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from '../types';

// Use gemini-3-pro-preview for complex reasoning and deep research tasks
const MODEL_NAME = 'gemini-3-pro-preview';

export const askStacksAssistant = async (history: ChatMessage[], message: string) => {
  const apiKey = process.env.API_KEY;
  
  if (!apiKey) {
    console.error("API_KEY is missing. AI features will not work.");
    return "The Stacks Expert is currently offline (API Key missing). Please ensure your environment is configured.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    
    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: [
        {
          role: 'user',
          parts: [{ text: `
            You are a World-Class Stacks & Bitcoin Layer 2 Researcher. 
            Your knowledge covers:
            1. Clarity Smart Contracts (predictability, security, non-Turing completeness).
            2. Proof of Transfer (PoX) and Stacking mechanisms.
            3. The Nakamoto Upgrade (Fast blocks, Bitcoin finality).
            4. sBTC (Trust-minimized Bitcoin on Stacks).
            5. Ecosystem apps: ALEX (DeFi), Gamma (NFTs), Leather/Xverse (Wallets).
            
            Current Conversation Context:
            ${history.map(h => `${h.role === 'user' ? 'Question' : 'Answer'}: ${h.content}`).join('\n')}
            
            New User Query: ${message}
            
            Instructions:
            - Be highly technical but accessible.
            - Provide "Alpha" (valuable insights).
            - Keep responses professional and premium.
            - If asking about code, mention Clarity specifics.
          ` }]
        }
      ],
      config: {
        temperature: 0.8,
        thinkingConfig: { thinkingBudget: 4000 } // Enable thinking for deeper research
      }
    });

    return response.text;
  } catch (error) {
    console.error("AI Assistant Error:", error);
    return "I encountered a network protocol error while researching that. Let's try again in a moment.";
  }
};
