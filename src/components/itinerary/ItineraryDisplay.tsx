'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Twitter, Facebook, Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

type ItineraryDisplayProps = {
  itinerary: string;
};

export default function ItineraryDisplay({ itinerary }: ItineraryDisplayProps) {
  const { toast } = useToast();
  
  const shareOnTwitter = () => {
    const text = "Check out my amazing trip plan from Lao Hug Travel!";
    const url = window.location.href;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, '_blank');
  };

  const shareOnFacebook = () => {
    const url = window.location.href;
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(facebookUrl, '_blank');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(itinerary).then(() => {
      toast({
        title: "Copied to clipboard!",
        description: "Your itinerary has been copied.",
      });
    });
  };

  return (
    <Card className="shadow-xl">
      <CardContent className="p-6 md:p-8">
        <div className="prose prose-sm sm:prose-base max-w-none text-foreground whitespace-pre-wrap">
          {itinerary}
        </div>
        <div className="mt-6 pt-6 border-t flex flex-wrap items-center justify-center gap-4">
            <span className="text-sm font-medium text-muted-foreground">Share your plan:</span>
            <Button variant="outline" size="sm" onClick={shareOnTwitter}>
                <Twitter className="mr-2 h-4 w-4" />
                Twitter
            </Button>
            <Button variant="outline" size="sm" onClick={shareOnFacebook}>
                <Facebook className="mr-2 h-4 w-4" />
                Facebook
            </Button>
            <Button variant="outline" size="sm" onClick={copyToClipboard}>
                <Copy className="mr-2 h-4 w-4" />
                Copy
            </Button>
        </div>
      </CardContent>
    </Card>
  );
}
