
'use server';

import { aiPoweredConsultation, AIPoweredConsultationInput, AIPoweredConsultationOutput } from "@/ai/flows/ai-powered-consultation";

export async function handleConsultation(input: AIPoweredConsultationInput): Promise<{data: AIPoweredConsultationOutput | null, error: string | null}> {
  try {
    const result = await aiPoweredConsultation(input);
    return { data: result, error: null };
  } catch (error: any) {
    console.error("Error in AI consultation:", error);
    // Return the specific error message instead of a generic one
    return { data: null, error: error.message || "An unexpected error occurred. Please try again later." };
  }
}
