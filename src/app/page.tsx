'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ArrowDown,
  Map,
  Users,
  Plane,
  ShieldCheck,
  HeartHandshake,
  Shield,
  Eye,
  Globe,
  Star,
  Mail,
  Phone,
  MapPin,
  BedDouble,
  Car,
  Ticket,
  Train,
  Activity,
  UtensilsCrossed,
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useLang } from '@/context/LangContext';

const servicesData = {
  en: [
    {
      icon: <BedDouble className="w-7 h-7 text-white" />,
      title: 'Book accommodation',
      description: 'Find the perfect place to stay.',
      color: 'from-teal-500 to-teal-600 shadow-teal-500/20',
    },
    {
      icon: <Car className="w-7 h-7 text-white" />,
      title: 'Tour guide vehicle',
      description: 'Explore with a private vehicle.',
      color: 'from-amber-500 to-orange-500 shadow-amber-500/20',
    },
    {
      icon: <Plane className="w-7 h-7 text-white" />,
      title: 'Book a flight ticket',
      description: 'Get the best deals on flights.',
      color: 'from-blue-500 to-blue-600 shadow-blue-500/20',
    },
    {
      icon: <Train className="w-7 h-7 text-white" />,
      title: 'Book a train ticket',
      description: 'Travel by rail with ease.',
      color: 'from-purple-500 to-purple-600 shadow-purple-500/20',
    },
    {
      icon: <Activity className="w-7 h-7 text-white" />,
      title: 'Activity services',
      description: 'Book exciting tours and activities.',
      color: 'from-pink-500 to-pink-600 shadow-pink-500/20',
    },
    {
      icon: <UtensilsCrossed className="w-7 h-7 text-white" />,
      title: 'Halal food service',
      description: 'Enjoy delicious Halal meals.',
      color: 'from-green-500 to-green-600 shadow-green-500/20',
    },
  ],
  th: [
    {
      icon: <BedDouble className="w-7 h-7 text-white" />,
      title: 'จองที่พัก',
      description: 'ค้นหาที่พักที่สมบูรณ์แบบ',
      color: 'from-teal-500 to-teal-600 shadow-teal-500/20',
    },
    {
      icon: <Car className="w-7 h-7 text-white" />,
      title: 'รถนำเที่ยว',
      description: 'ท่องเที่ยวไปกับรถส่วนตัว',
      color: 'from-amber-500 to-orange-500 shadow-amber-500/20',
    },
    {
      icon: <Plane className="w-7 h-7 text-white" />,
      title: 'จองตั๋วเครื่องบิน',
      description: 'รับข้อเสนอที่ดีที่สุดสำหรับเที่ยวบิน',
      color: 'from-blue-500 to-blue-600 shadow-blue-500/20',
    },
    {
      icon: <Train className="w-7 h-7 text-white" />,
      title: 'จองตั๋วรถไฟ',
      description: 'เดินทางโดยรถไฟอย่างง่ายดาย',
      color: 'from-purple-500 to-purple-600 shadow-purple-500/20',
    },
    {
      icon: <Activity className="w-7 h-7 text-white" />,
      title: 'บริการกิจกรรม',
      description: 'จองทัวร์และกิจกรรมที่น่าตื่นเต้น',
      color: 'from-pink-500 to-pink-600 shadow-pink-500/20',
    },
    {
      icon: <UtensilsCrossed className="w-7 h-7 text-white" />,
      title: 'บริการอาหารฮาลาล',
      description: 'เพลิดเพลินกับอาหารฮาลาลแสนอร่อย',
      color: 'from-green-500 to-green-600 shadow-green-500/20',
    },
  ],
  lao: [
      {
        icon: <BedDouble className="w-7 h-7 text-white" />,
        title: 'ຈອງທີ່ພັກ',
        description: 'Book accommodation',
        color: 'from-teal-500 to-teal-600 shadow-teal-500/20',
      },
      {
        icon: <Car className="w-7 h-7 text-white" />,
        title: 'ລົດນຳທ່ຽວ',
        description: 'Tour guide vehicle',
        color: 'from-amber-500 to-orange-500 shadow-amber-500/20',
      },
      {
        icon: <Plane className="w-7 h-7 text-white" />,
        title: 'ຈອງປີ້ຍົນ',
        description: 'Book a flight ticket',
        color: 'from-blue-500 to-blue-600 shadow-blue-500/20',
      },
      {
        icon: <Train className="w-7 h-7 text-white" />,
        title: 'ຈອງປີ້ລົດໄຟ',
        description: 'Book a train ticket',
        color: 'from-purple-500 to-purple-600 shadow-purple-500/20',
      },
      {
        icon: <Activity className="w-7 h-7 text-white" />,
        title: 'ບໍລິການກິດຈະກຳ',
        description: 'Activity services',
        color: 'from-pink-500 to-pink-600 shadow-pink-500/20',
      },
      {
        icon: <UtensilsCrossed className="w-7 h-7 text-white" />,
        title: 'ບໍລິການອາຫານຮາລາລ',
        description: 'Halal food service',
        color: 'from-green-500 to-green-600 shadow-green-500/20',
      },
  ]
};

const strengths = [
    { number: '01', title: '10+ Years of Excellence', description: 'A decade of creating unforgettable travel experiences with thousands of happy customers.', color: 'border-primary' },
    { number: '02', title: '24/7 Customer Support', description: 'Round-the-clock assistance whenever you need us, wherever you are.', color: 'border-accent' },
    { number: '03', title: 'Best Price Guarantee', description: 'Competitive pricing with no hidden fees - transparency in every booking.', color: 'border-blue-500' },
    { number: '04', title: 'Local Expertise', description: 'Deep connections with local partners for authentic, off-the-beaten-path experiences.', color: 'border-purple-500' },
    { number: '05', title: 'Flexible Bookings', description: 'Easy modifications and cancellations with our traveler-friendly policies.', color: 'border-emerald-500' },
];


export default function Home() {
  const { lang } = useLang();
  const heroImage = PlaceHolderImages.find(p => p.id === "hero-1");
  const halalTourImage = PlaceHolderImages.find(p => p.id === "service-halal");

  const services = servicesData[lang] || servicesData.en;


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
          <h1 className="font-headline text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">Lao Hug Travel</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 font-light mb-8 leading-relaxed">
            BEST CHOICE HALAL SERVICE
          </p>
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-accent"></div>
            <Star className="w-5 h-5 text-accent" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-accent"></div>
          </div>
          <div className="mt-16 animate-bounce">
            <a href="#about" aria-label="Scroll down">
                <ArrowDown className="w-8 h-8 mx-auto text-white" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-card">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl font-bold text-foreground mb-3">About Lao Hug Travel</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              Lao Hug Travel is your trusted partner for unforgettable journeys in Laos. We specialize in crafting personalized travel experiences, with a special focus on Halal-friendly services. Our local expertise and commitment to quality ensure you a seamless and authentic adventure.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
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
        </div>
      </section>

      {/* Services Section */}
      <section id="what-we-do" className="py-20 px-4 bg-card">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              What We Do
            </span>
            <h2 className="font-headline text-4xl font-bold text-foreground mb-3">Our Services</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">Comprehensive travel solutions tailored to your dreams</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
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
      
      {/* Halal Tour Package Section */}
      <section id="halal-package" className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
                <span className="inline-block px-4 py-1.5 bg-emerald-500/10 text-emerald-600 text-sm font-medium rounded-full mb-4">
                    Specialty Tours
                </span>
                <h2 className="font-headline text-4xl font-bold text-foreground mb-4">Our Halal Tour Packages</h2>
                <p className="text-muted-foreground text-lg mb-6">
                    Travel with peace of mind. Our Halal tour packages are designed to cater to your needs, including Halal-certified meals, prayer facilities, and Muslim-friendly accommodations.
                </p>
                <ul className="space-y-3 text-left mb-8">
                    <li className="flex items-center gap-3">
                        <ShieldCheck className="w-5 h-5 text-primary" />
                        <span>Certified Halal restaurants and caterers.</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <ShieldCheck className="w-5 h-5 text-primary" />
                        <span>Prayer times and facilities provided.</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <ShieldCheck className="w-5 h-5 text-primary" />
                        <span>Female-only guides available upon request.</span>
                    </li>
                </ul>
                 <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <Button asChild size="lg">
                        <Link href="/services">Explore Halal Tours</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                        <Link href="/services">See All Packages</Link>
                    </Button>
                </div>
            </div>
            <div>
                {halalTourImage && (
                    <Image
                        src={halalTourImage.imageUrl}
                        alt={halalTourImage.description}
                        width={600}
                        height={600}
                        className="rounded-2xl shadow-xl object-cover aspect-square"
                        data-ai-hint={halalTourImage.imageHint}
                    />
                )}
            </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-20 px-4 bg-card">
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
      
      {/* Contact Us Section */}
      <section id="contact-us" className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl font-bold text-foreground mb-3">Contact Us</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">Have questions? We'd love to hear from you.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-headline text-xl font-semibold mb-2">Phone</h3>
              <p className="text-muted-foreground">+856 20 55 123 456</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-headline text-xl font-semibold mb-2">Email</h3>
              <a href="mailto:info@laohugtravel.com" className="text-muted-foreground hover:text-primary">info@laohugtravel.com</a>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-headline text-xl font-semibold mb-2">Address</h3>
              <p className="text-muted-foreground">123 Main Street, Vientiane, Laos</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
