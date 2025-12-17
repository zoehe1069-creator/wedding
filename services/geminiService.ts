import { GoogleGenAI, Type } from "@google/genai";
import { AIPackageSuggestion } from "../types";

// Note: In a real app, API_KEY should be handled securely.
// For this demo, we assume process.env.API_KEY is available.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateWeddingPackage = async (
  budget: string,
  location: string,
  style: string
): Promise<AIPackageSuggestion | null> => {
  try {
    const prompt = `Create a detailed wedding/engagement package plan for a couple with a budget of ${budget} RMB (Chinese Yuan) in ${location}, China. The style they want is ${style}.
    
    IMPORTANT: The response MUST be in Simplified Chinese (zh-CN).
    
    Provide a title for the package, a short description, and a list of itemized suggestions for categories like "婚宴酒店" (Venue), "婚礼布置" (Decor), "婚纱摄影" (Photography), "婚纱礼服" (Dress), and "人员" (Staff).
    Estimate the price in RMB (¥) for each item so the total is close to the budget.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            description: { type: Type.STRING },
            totalEstimatedPrice: { type: Type.NUMBER },
            items: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  category: { type: Type.STRING },
                  suggestion: { type: Type.STRING },
                  estimatedPrice: { type: Type.NUMBER },
                  reason: { type: Type.STRING }
                }
              }
            }
          }
        }
      }
    });

    const text = response.text;
    if (!text) return null;
    return JSON.parse(text) as AIPackageSuggestion;

  } catch (error) {
    console.error("Error generating package:", error);
    return null;
  }
};
