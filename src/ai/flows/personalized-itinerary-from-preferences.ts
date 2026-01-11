'use server';
/**
 * @fileOverview A personalized itinerary generation AI agent.
 *
 * - personalizedItineraryFromPreferences - A function that handles the itinerary generation process.
 * - PersonalizedItineraryFromPreferencesInput - The input type for the personalizedItineraryFromPreferences function.
 * - PersonalizedItineraryFromPreferencesOutput - The return type for the personalizedItineraryFromPreferences function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedItineraryFromPreferencesInputSchema = z.object({
  budget: z
    .string()
    .describe('The budget for the trip (e.g., \'\$1000\', \'\$5000 - \$10000\').'),
  interests: z
    .string()
    .describe(
      'The interests of the traveler (e.g., \'history, museums, food\', \'adventure, hiking, nature\').'
    ),
  travelStyle: z
    .string()
    .describe(
      'The travel style of the traveler (e.g., \'solo\', \'group\', \'family\').'
    ),
});
export type PersonalizedItineraryFromPreferencesInput = z.infer<
  typeof PersonalizedItineraryFromPreferencesInputSchema
>;

const PersonalizedItineraryFromPreferencesOutputSchema = z.object({
  itinerary: z.string().describe('The generated travel itinerary.'),
});
export type PersonalizedItineraryFromPreferencesOutput = z.infer<
  typeof PersonalizedItineraryFromPreferencesOutputSchema
>;

export async function personalizedItineraryFromPreferences(
  input: PersonalizedItineraryFromPreferencesInput
): Promise<PersonalizedItineraryFromPreferencesOutput> {
  return personalizedItineraryFromPreferencesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedItineraryFromPreferencesPrompt',
  input: {schema: PersonalizedItineraryFromPreferencesInputSchema},
  output: {schema: PersonalizedItineraryFromPreferencesOutputSchema},
  prompt: `You are a travel expert specializing in creating personalized travel itineraries.

You will use the provided travel preferences (budget, interests, travel style) to generate a detailed and engaging travel itinerary.

Budget: {{{budget}}}
Interests: {{{interests}}}
Travel Style: {{{travelStyle}}}

Ensure the itinerary is well-structured and provides a unique and memorable travel experience.
`,
});

const personalizedItineraryFromPreferencesFlow = ai.defineFlow(
  {
    name: 'personalizedItineraryFromPreferencesFlow',
    inputSchema: PersonalizedItineraryFromPreferencesInputSchema,
    outputSchema: PersonalizedItineraryFromPreferencesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
