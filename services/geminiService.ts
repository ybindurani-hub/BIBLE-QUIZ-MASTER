// import { GoogleGenAI, Type } from "@google/genai";
import { Question, Difficulty } from "../types";
// import { saveQuestions } from "./db";

// OFFLINE MODE:
// The AI generation service is disabled to prevent Vercel build errors 
// when the @google/genai package or API keys are not configured.
// The app now relies entirely on the local STATIC_BIBLE_DATA in data/questions.ts.

export const generateBookQuestions = async (apiKey: string, bookName: string, count: number = 10): Promise<boolean> => {
  console.log("Online generation is disabled in this offline build.");
  return false;
};