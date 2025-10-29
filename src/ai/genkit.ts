import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/google-genai';

export const ai = genkit({
  plugins: [
    googleAI({
      // Specify the model for generation.
      model: 'gemini-1.5-flash-preview',
    }),
  ],
});
