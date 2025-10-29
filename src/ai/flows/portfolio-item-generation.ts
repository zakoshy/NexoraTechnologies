'use server';

/**
 * @fileOverview Generates draft portfolio items using AI based on a prompt.
 *
 * - generatePortfolioItem - A function that generates a draft portfolio item.
 * - PortfolioItemInput - The input type for the generatePortfolioItem function.
 * - PortfolioItemOutput - The return type for the generatePortfolioItem function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PortfolioItemInputSchema = z.object({
  prompt: z.string().describe('A prompt describing the portfolio item to generate.'),
});
export type PortfolioItemInput = z.infer<typeof PortfolioItemInputSchema>;

const PortfolioItemOutputSchema = z.object({
  title: z.string().describe('The title of the portfolio item.'),
  description: z.string().describe('A detailed description of the portfolio item.'),
  imageUrl: z.string().describe('URL to a representative image for the portfolio item.'),
});
export type PortfolioItemOutput = z.infer<typeof PortfolioItemOutputSchema>;

export async function generatePortfolioItem(input: PortfolioItemInput): Promise<PortfolioItemOutput> {
  return portfolioItemFlow(input);
}

const portfolioItemPrompt = ai.definePrompt({
  name: 'portfolioItemPrompt',
  input: {schema: PortfolioItemInputSchema},
  output: {schema: PortfolioItemOutputSchema},
  prompt: `You are an AI assistant helping a creative professional generate content for their portfolio.

  Based on the following prompt, generate a compelling title, a detailed description, and a placeholder image URL for a new portfolio item.

  Prompt: {{{prompt}}}
  `,
});

const portfolioItemFlow = ai.defineFlow(
  {
    name: 'portfolioItemFlow',
    inputSchema: PortfolioItemInputSchema,
    outputSchema: PortfolioItemOutputSchema,
  },
  async input => {
    const {output} = await portfolioItemPrompt(input);
    return output!;
  }
);
