'use server';

/**
 * @fileOverview AI-powered consultation tool for providing tailored digital solutions.
 *
 * - aiPoweredConsultation - A function that handles the consultation process.
 * - AIPoweredConsultationInput - The input type for the aiPoweredConsultation function.
 * - AIPoweredConsultationOutput - The return type for the aiPoweredConsultation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIPoweredConsultationInputSchema = z.object({
  businessNeeds: z
    .string()
    .describe('A detailed description of the client\'s business needs and goals.'),
  sector: z.string().optional().describe('The industry sector of the client\'s business.'),
});
export type AIPoweredConsultationInput = z.infer<typeof AIPoweredConsultationInputSchema>;

const AIPoweredConsultationOutputSchema = z.object({
  recommendations: z
    .string()
    .describe('Tailored recommendations for digital solutions Nexora Technologies can provide.'),
});
export type AIPoweredConsultationOutput = z.infer<typeof AIPoweredConsultationOutputSchema>;

export async function aiPoweredConsultation(
  input: AIPoweredConsultationInput
): Promise<AIPoweredConsultationOutput> {
  return aiPoweredConsultationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiPoweredConsultationPrompt',
  input: {schema: AIPoweredConsultationInputSchema},
  output: {schema: AIPoweredConsultationOutputSchema},
  prompt: `You are a digital solutions expert at Nexora Technologies.

  Based on the client's business needs, provide tailored recommendations for digital solutions that Nexora Technologies can provide. 

  Consider the client's sector when making recommendations, if the sector is provided.

  Business Needs: {{{businessNeeds}}}

  Sector: {{{sector}}}

  Recommendations:
  `,
});

const aiPoweredConsultationFlow = ai.defineFlow(
  {
    name: 'aiPoweredConsultationFlow',
    inputSchema: AIPoweredConsultationInputSchema,
    outputSchema: AIPoweredConsultationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
