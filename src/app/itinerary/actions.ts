'use server';

import { personalizedItineraryFromPreferences } from '@/ai/flows/personalized-itinerary-from-preferences';
import { z } from 'zod';

const ItinerarySchema = z.object({
  budget: z.string().min(1, 'Budget is required.'),
  interests: z.string().min(1, 'Please list at least one interest.'),
  travelStyle: z.string().min(1, 'Travel style is required.'),
});

export type ItineraryState = {
  message: string | null;
  itinerary: string | null;
  success: boolean;
};

export async function generateItinerary(
  prevState: ItineraryState,
  formData: FormData
): Promise<ItineraryState> {
  const validatedFields = ItinerarySchema.safeParse({
    budget: formData.get('budget'),
    interests: formData.get('interests'),
    travelStyle: formData.get('travelStyle'),
  });

  if (!validatedFields.success) {
    const fieldErrors = validatedFields.error.flatten().fieldErrors;
    const errorKeys = Object.keys(fieldErrors) as (keyof typeof fieldErrors)[];
    
    let errorMessage = "Invalid input. Please check the fields.";
    if (errorKeys.length > 0) {
      const firstErrorKey = errorKeys[0];
      const firstErrorMessages = fieldErrors[firstErrorKey];
      if (firstErrorMessages && firstErrorMessages.length > 0) {
        errorMessage = firstErrorMessages[0];
      }
    }

    return {
      message: errorMessage,
      itinerary: null,
      success: false,
    };
  }

  try {
    const result = await personalizedItineraryFromPreferences(validatedFields.data);
    if (result.itinerary) {
      return {
        message: 'Your personalized itinerary is ready!',
        itinerary: result.itinerary,
        success: true,
      };
    } else {
      return {
        message: 'Could not generate an itinerary. Please try again.',
        itinerary: null,
        success: false,
      };
    }
  } catch (error) {
    console.error(error);
    return {
      message: 'An unexpected error occurred. Please try again later.',
      itinerary: null,
      success: false,
    };
  }
}
