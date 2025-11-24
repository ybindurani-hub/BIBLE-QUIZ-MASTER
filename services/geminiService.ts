import { GoogleGenAI, Type } from "@google/genai";
import { Question, Difficulty } from "../types";
import { saveQuestions } from "./db";

// Note: In a real PWA, you might not want to expose the key selection every time, 
// but for this demo, we assume the user provides it via the Settings UI.

export const generateBookQuestions = async (apiKey: string, bookName: string, count: number = 10): Promise<boolean> => {
  try {
    const ai = new GoogleGenAI({ apiKey });
    
    const prompt = `Generate ${count} hard/expert level multiple choice questions for the Bible book of ${bookName}. 
    Ensure they are accurate according to Scripture. 
    Mix difficulties: Moderate, Hard, Extreme.
    Output pure JSON.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            questions: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  question: { type: Type.STRING },
                  options: { type: Type.ARRAY, items: { type: Type.STRING } },
                  correct: { type: Type.STRING },
                  reference: { type: Type.STRING },
                  difficulty: { type: Type.STRING, enum: ['Moderate', 'Hard', 'Extreme'] }
                },
                required: ['question', 'options', 'correct', 'reference', 'difficulty']
              }
            }
          }
        }
      }
    });

    const text = response.text;
    if (!text) return false;

    const data = JSON.parse(text);
    const questions: Question[] = data.questions.map((q: any, index: number) => ({
      id: `${bookName.toLowerCase()}-${Date.now()}-${index}`,
      book: bookName,
      question: q.question,
      options: q.options,
      correct: q.correct,
      reference: q.reference,
      difficulty: q.difficulty as Difficulty
    }));

    await saveQuestions(questions);
    return true;

  } catch (error) {
    console.error("Gemini Generation Error:", error);
    return false;
  }
};