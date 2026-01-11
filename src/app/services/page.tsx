import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Search } from 'lucide-react';

const allServices: any[] = [];

export default function ServicesPage() {
  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Our Services</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore our wide range of travel solutions designed to make your journey unforgettable.
        </p>
      </div>

      <div className="mb-8 p-4 bg-card rounded-lg shadow-sm border">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input placeholder="Search services..." className="pl-10" />
            </div>
            <div>
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Filter by category" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="tours">Tours</SelectItem>
                        <SelectItem value="transport">Transport</SelectItem>
                        <SelectItem value="guides">Guides</SelectItem>
                        <SelectItem value="lodging">Lodging</SelectItem>
                         <SelectItem value="specialty">Specialty</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div>
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="popularity">Popularity</SelectItem>
                        <SelectItem value="newest">Newest</SelectItem>
                        <SelectItem value="alphabetical">Alphabetical</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allServices.map((service) => (
          <Card key={service.title} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
            {service.image && (
              <div className="relative h-48 w-full">
                <Image
                  src={service.image.imageUrl}
                  alt={service.image.description}
                  fill
                  className="object-cover"
                  data-ai-hint={service.image.imageHint}
                />
              </div>
            )}
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                <Badge variant="secondary">{service.category}</Badge>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
