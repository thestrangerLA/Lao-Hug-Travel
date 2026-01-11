import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ArrowDown,
  Map,
  Users,
  Plane,
  UserCheck,
  ShieldCheck,
  HeartHandshake,
  Shield,
  Eye,
  Globe,
  Star,
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const services = [
  {
    icon: <Map className="w-7 h-7 text-white" />,
    title: 'Custom Tour Packages',
    description: 'Personalized itineraries crafted to match your interests and budget.',
    color: 'from-teal-500 to-teal-600 shadow-teal-500/20',
  },
  {
    icon: <Users className="w-7 h-7 text-white" />,
    title: 'Group Adventures',
    description: 'Join like-minded travelers on exciting group expeditions.',
    color: 'from-amber-500 to-orange-500 shadow-amber-500/20',
  },
  {
    icon: <Plane className="w-7 h-7 text-white" />,
    title: 'Transport & Transfers',
    description: 'Reliable airport pickups, car rentals, and comfortable transfers.',
    color: 'from-blue-500 to-blue-600 shadow-blue-500/20',
  },
  {
    icon: <UserCheck className="w-7 h-7 text-white" />,
    title: 'Expert Local Guides',
    description: 'Knowledgeable guides sharing authentic cultural experiences.',
    color: 'from-purple-500 to-purple-600 shadow-purple-500/20',
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-white" />,
    title: 'Halal-Friendly Options',
    description: 'Muslim-friendly accommodations, dining, and prayer facilities.',
    color: 'from-emerald-500 to-green-600 shadow-emerald-500/20',
  },
];

const values = [
  { icon: <HeartHandshake className="w-6 h-6 text-primary" />, title: 'Trust', description: 'Honest & reliable service' },
  { icon: <Shield className="w-6 h-6 text-accent" />, title: 'Safety', description: 'Your wellbeing first' },
  { icon: <Eye className="w-6 h-6 text-blue-600" />, title: 'Transparency', description: 'Clear pricing always' },
  { icon: <Globe className="w-6 h-6 text-purple-600" />, title: 'Respect', description: 'Honoring cultures' },
];

const strengths = [
    { number: '01', title: '10+ Years of Excellence', description: 'A decade of creating unforgettable travel experiences with thousands of happy customers.', color: 'border-primary' },
    { number: '02', title: '24/7 Customer Support', description: 'Round-the-clock assistance whenever you need us, wherever you are.', color: 'border-accent' },
    { number: '03', title: 'Best Price Guarantee', description: 'Competitive pricing with no hidden fees - transparency in every booking.', color: 'border-blue-500' },
    { number: '04', title: 'Local Expertise', description: 'Deep connections with local partners for authentic, off-the-beaten-path experiences.', color: 'border-purple-500' },
    { number: '05', title: 'Flexible Bookings', description: 'Easy modifications and cancellations with our traveler-friendly policies.', color: 'border-emerald-500' },
];


export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === "hero-1");

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center text-center overflow-hidden px-4">
        {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              data-ai-hint={heroImage.imageHint}
              priority
            />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          <h1 className="font-headline text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">Voyager</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 font-light mb-8 leading-relaxed">
            Discover the World, Create Memories Forever
          </p>
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-accent"></div>
            <Star className="w-5 h-5 text-accent" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-accent"></div>
          </div>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full text-lg px-8 py-6">
            <Link href="/itinerary">Plan Your Next Adventure</Link>
          </Button>
          <div className="mt-16 animate-bounce">
            <ArrowDown className="w-8 h-8 mx-auto text-white" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-card">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Our Services
            </span>
            <h2 className="font-headline text-4xl font-bold text-foreground mb-3">What We Do</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">Comprehensive travel solutions tailored to your dreams</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 3).map((service) => (
              <Card key={service.title} className="bg-background/70 border hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
                <CardHeader className="flex flex-row items-center gap-4 pb-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    {service.icon}
                  </div>
                  <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
           <div className="text-center mt-12">
                <Button asChild variant="outline">
                    <Link href="/services">See All Services</Link>
                </Button>
            </div>
        </div>
      </section>
      
      {/* Vision & Values Section */}
      <section id="vision" className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent-foreground text-sm font-medium rounded-full mb-4">
              Our Purpose
            </span>
            <h2 id="vision-title" className="font-headline text-4xl font-bold text-foreground mb-6">Our Vision</h2>
            <div className="relative bg-card rounded-2xl p-8 shadow-lg shadow-black/5 border border-border/50 max-w-2xl mx-auto">
               <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-card p-2 rounded-full border">
                <Star className="w-6 h-6 text-accent" />
              </div>
              <p id="vision-text" className="text-muted-foreground text-lg leading-relaxed italic">"To inspire and empower travelers to explore the world responsibly, creating meaningful connections between cultures while delivering exceptional, personalized experiences."</p>
            </div>
          </div>
          <div className="mt-16">
            <h3 className="font-headline text-3xl font-bold text-foreground text-center mb-8">Core Values</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={value.title} className="value-item bg-card rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-shadow border">
                  <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                    {value.icon}
                  </div>
                  <h4 className="font-semibold text-foreground mb-1 font-headline">{value.title}</h4>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-20 px-4 bg-card">
         <div className="max-w-2xl mx-auto">
             <div className="text-center mb-12">
                <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">Our Promise</span>
                <h2 className="font-headline text-4xl font-bold text-foreground mb-3">Why Choose Us</h2>
                <p className="text-muted-foreground">Experience the difference with our commitment to excellence</p>
             </div>
             <div className="space-y-6">
                {strengths.map((strength) => (
                    <div key={strength.number} className={`flex items-start gap-4 p-4 rounded-xl bg-background/50 border-l-4 ${strength.color}`}>
                        <span className="strength-number font-headline text-4xl font-bold">{strength.number}</span>
                        <div>
                            <h3 className="font-headline font-semibold text-foreground mb-1 text-lg">{strength.title}</h3>
                            <p className="text-muted-foreground text-sm">{strength.description}</p>
                        </div>
                    </div>
                ))}
             </div>
         </div>
      </section>

    </div>
  );
}
