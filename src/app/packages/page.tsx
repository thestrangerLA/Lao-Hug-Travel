'use client';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';

const allPackages: {
  title: string;
  description: string;
  category: string;
  image:
    | {
        id: string;
        description: string;
        imageUrl: string;
        imageHint: string;
      }
    | undefined;
}[] = [];

export default function PackagesPage() {
  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">All Packages</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore our wide range of travel packages designed to make your journey unforgettable.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allPackages.length > 0 ? (
          allPackages.map((pkg) => (
            <Card
              key={pkg.title}
              className="overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              {pkg.image && (
                <div className="relative h-48 w-full">
                  <Image
                    src={pkg.image.imageUrl}
                    alt={pkg.image.description}
                    fill
                    className="object-cover"
                    data-ai-hint={pkg.image.imageHint}
                  />
                </div>
              )}
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="font-headline text-2xl">{pkg.title}</CardTitle>
                  <Badge variant="secondary">{pkg.category}</Badge>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{pkg.description}</p>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="col-span-full text-center text-muted-foreground">
            There are no packages available at this time.
          </p>
        )}
      </div>
    </div>
  );
}
