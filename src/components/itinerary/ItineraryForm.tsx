'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useEffect } from 'react';

import { generateItinerary, type ItineraryState } from '@/app/itinerary/actions';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';
import ItineraryDisplay from './ItineraryDisplay';

const ItinerarySchema = z.object({
  budget: z.string().min(1, 'Budget is required.'),
  interests: z.string().min(1, 'Please list at least one interest.'),
  travelStyle: z.string().min(1, 'Travel style is required.'),
});

type ItineraryFormValues = z.infer<typeof ItinerarySchema>;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} size="lg" className="w-full">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        'Generate Itinerary'
      )}
    </Button>
  );
}

export default function ItineraryForm() {
  const { toast } = useToast();
  const initialState: ItineraryState = { message: null, itinerary: null, success: false };
  const [state, formAction] = useFormState(generateItinerary, initialState);

  const form = useForm<ItineraryFormValues>({
    resolver: zodResolver(ItinerarySchema),
    defaultValues: {
      budget: '',
      interests: '',
      travelStyle: '',
    },
  });

  useEffect(() => {
    if (state.message && !state.success) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: state.message,
      });
    }
  }, [state, toast]);

  return (
    <div>
      <Card className="max-w-2xl mx-auto shadow-lg">
        <CardContent className="pt-6">
          <form action={formAction} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="budget">What's your budget?</Label>
              <Input id="budget" name="budget" placeholder="e.g., $1000, $5000 - $10000" />
              {form.formState.errors.budget && (
                <p className="text-sm text-destructive">{form.formState.errors.budget.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="interests">What are your interests?</Label>
              <Textarea id="interests" name="interests" placeholder="e.g., history, museums, food, adventure, hiking, nature" />
              {form.formState.errors.interests && (
                <p className="text-sm text-destructive">{form.formState.errors.interests.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="travelStyle">What's your travel style?</Label>
              <Input id="travelStyle" name="travelStyle" placeholder="e.g., solo, group, family" />
              {form.formState.errors.travelStyle && (
                <p className="text-sm text-destructive">{form.formState.errors.travelStyle.message}</p>
              )}
            </div>
            <SubmitButton />
          </form>
        </CardContent>
      </Card>
      
      {state.success && state.itinerary && (
        <div className="mt-12">
            <h2 className="text-3xl font-headline text-center mb-6">Your Personalized Itinerary</h2>
            <ItineraryDisplay itinerary={state.itinerary} />
        </div>
      )}
    </div>
  );
}
