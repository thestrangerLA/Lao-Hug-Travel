import ItineraryForm from '@/components/itinerary/ItineraryForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function ItineraryPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <Card className="border-none shadow-none bg-transparent">
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-4xl md:text-5xl">Create Your Dream Trip</CardTitle>
            <CardDescription className="text-lg text-muted-foreground mt-2">
              Let our AI craft a personalized itinerary just for you.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ItineraryForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
