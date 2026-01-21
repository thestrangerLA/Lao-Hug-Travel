
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
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
  BedDouble,
  Car,
  Ticket,
  Train,
  Activity,
  UtensilsCrossed,
  Award,
  Menu,
  MessageSquare,
  MessageCircle,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useLang } from '@/context/LangContext';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';


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

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </svg>
);

const socialLinks = [
    { name: 'Facebook', icon: <Facebook className="w-6 h-6" />, href: 'https://facebook.com/LaoHugTravel' },
    { name: 'TikTok', icon: <TikTokIcon className="w-6 h-6" />, href: 'https://tiktok.com/@laohugtravel' },
    { name: 'Instagram', icon: <Instagram className="w-6 h-6" />, href: 'https://instagram.com/laohugtravel' },
    { name: 'Youtube', icon: <Youtube className="w-6 h-6" />, href: 'https://youtube.com/@LaoHugTravel' },
    { name: 'X', icon: <Twitter className="w-6 h-6" />, href: 'https://x.com/laohugtravel' },
];


export default function Home() {
  const { lang, setLang } = useLang();
  const halalTourImage = PlaceHolderImages.find(p => p.id === "service-halal");
  const chefImage = PlaceHolderImages.find((p) => p.id === 'gmhi-chef');
  const hotelImage = PlaceHolderImages.find((p) => p.id === 'gmhi-hotel');
  const buildingImage = PlaceHolderImages.find((p) => p.id === 'gmhi-building');
  const corridorImage = PlaceHolderImages.find((p) => p.id === 'gmhi-corridor');


  const services = servicesData[lang] || servicesData.en;
  
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="flex flex-col text-left">
                    <h1 className="text-5xl md:text-8xl font-bold font-headline tracking-tighter text-white mb-4">
                        LHT
                    </h1>
                    <p className="text-lg md:text-xl font-light text-primary-foreground/90">
                      Lao Hug Travel
                    </p>
                    <div className="w-24 h-1 bg-accent my-6"></div>
                    <h2 className="text-xl md:text-3xl font-semibold font-headline text-white">
                      BEST CHOICE HALAL SERVICE
                    </h2>
                    <p className="mt-4 text-lg font-light italic text-primary-foreground/80">
                      &quot;The Mark of Muslim-Friendly Excellence&quot;
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    {chefImage && <div className="col-span-2 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                    <Image
                        src={chefImage.imageUrl}
                        alt={chefImage.description}
                        width={500}
                        height={250}
                        className="object-cover w-full h-full"
                        data-ai-hint={chefImage.imageHint}
                    />
                    </div>}
                    {hotelImage && <div className="rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                        <Image
                        src={hotelImage.imageUrl}
                        alt={hotelImage.description}
                        width={250}
                        height={250}
                        className="object-cover w-full h-full aspect-square"
                        data-ai-hint={hotelImage.imageHint}
                    />
                    </div>}
                    {buildingImage && <div className="rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                    <Image
                        src={buildingImage.imageUrl}
                        alt={buildingImage.description}
                        width={250}
                        height={250}
                        className="object-cover w-full h-full aspect-square"
                        data-ai-hint={buildingImage.imageHint}
                    />
                    </div>}
                </div>
            </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl font-bold mb-3">About Lao Hug Travel</h2>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto text-lg leading-relaxed">
              Lao Hug Travel is your trusted partner for unforgettable journeys in Laos. We specialize in crafting personalized travel experiences, with a special focus on Halal-friendly services. Our local expertise and commitment to quality ensure you a seamless and authentic adventure.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent-foreground text-sm font-medium rounded-full mb-4">
              Our Purpose
            </span>
            <h2 id="vision-title" className="font-headline text-4xl font-bold mb-6">Our Vision</h2>
            <div className="relative bg-card rounded-2xl p-8 shadow-lg shadow-black/5 border border-border/50 max-w-2xl mx-auto text-card-foreground">
               <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-card p-2 rounded-full border">
                <Star className="w-6 h-6 text-accent" />
              </div>
              <p id="vision-text" className="text-muted-foreground text-lg leading-relaxed italic">&quot;Exploring Laos is not just about seeing beautiful sights; it's about creating unforgettable memories that last a lifetime, connecting with locals, and immersing yourself in rich cultural experiences in the Halal Way.&quot;</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="what-we-do" className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary-foreground/10 text-primary-foreground text-sm font-medium rounded-full mb-4">
              What We Do
            </span>
            <h2 className="font-headline text-4xl font-bold mb-3">Our Services</h2>
            <p className="text-primary-foreground/90 max-w-lg mx-auto">Comprehensive travel solutions tailored to your dreams</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.title} className="bg-card text-card-foreground border hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
                <CardContent className="flex flex-col items-center justify-center text-center p-6 gap-4">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    {service.icon}
                  </div>
                  <h3 className="font-headline text-xl font-semibold h-12 flex items-center">{service.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Halal Tour Package Section */}
      <section id="halal-package" className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
                <span className="inline-block px-4 py-1.5 bg-emerald-500/10 text-emerald-300 text-sm font-medium rounded-full mb-4">
                    Specialty Tours
                </span>
                <h2 className="font-headline text-4xl font-bold mb-4">Our Halal Tour Packages</h2>
                <p className="text-primary-foreground/90 text-lg mb-6">
                    Travel with peace of mind. Our Halal tour packages are designed to cater to your needs, including Halal-certified meals, prayer facilities, and Muslim-friendly accommodations.
                </p>
                <ul className="space-y-3 text-left mb-8">
                    <li className="flex items-center gap-3">
                        <ShieldCheck className="w-5 h-5 text-accent" />
                        <span>Certified Halal restaurants and caterers.</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <ShieldCheck className="w-5 h-5 text-accent" />
                        <span>Prayer times and facilities provided.</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <ShieldCheck className="w-5 h-5 text-accent" />
                        <span>Female-only guides available upon request.</span>
                    </li>
                </ul>
                 <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <Button asChild size="lg" variant="secondary">
                        <Link href="/services">Explore Halal Tours</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                        <Link href="/packages">See All Packages</Link>
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
      <section id="why-choose-us" className="py-20 px-4 bg-primary text-primary-foreground">
         <div className="max-w-2xl mx-auto">
             <div className="text-center mb-12">
                <span className="inline-block px-4 py-1.5 bg-primary-foreground/10 text-primary-foreground text-sm font-medium rounded-full mb-4">Our Promise</span>
                <h2 className="font-headline text-4xl font-bold mb-3">Why Choose Us</h2>
                <p className="text-primary-foreground/90">Experience the difference with our commitment to excellence</p>
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
      <section id="contact-us" className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl font-bold mb-3">Contact Us</h2>
            <p className="text-primary-foreground/90 max-w-lg mx-auto">Have questions? We'd love to hear from you.</p>
          </div>
          <div className="grid grid-cols-4 gap-4 md:gap-8">
            <a href="tel:+66622244315">
                <Card className="text-center h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <CardHeader className="p-4 pb-2 md:p-6 md:pb-2">
                        <div className="flex justify-center mb-2">
                            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                                <Phone className="w-7 h-7 text-primary" />
                            </div>
                        </div>
                        <CardTitle className="font-headline text-lg md:text-xl">Phone</CardTitle>
                    </CardHeader>
                    <CardContent className="px-4 pb-4 pt-0 md:px-6 md:pb-6">
                        <p className="text-muted-foreground text-sm break-all">+66 62 224 4315</p>
                    </CardContent>
                </Card>
            </a>

            <a href="https://wa.me/8562096142645" target="_blank" rel="noopener noreferrer">
                <Card className="text-center h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <CardHeader className="p-4 pb-2 md:p-6 md:pb-2">
                        <div className="flex justify-center mb-2">
                            <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center">
                                <MessageCircle className="w-7 h-7 text-green-600" />
                            </div>
                        </div>
                      <CardTitle className="font-headline text-lg md:text-xl">WhatsApp</CardTitle>
                    </CardHeader>
                    <CardContent className="px-4 pb-4 pt-0 md:px-6 md:pb-6">
                      <p className="text-muted-foreground text-sm break-all">+85620 96142645</p>
                    </CardContent>
                </Card>
            </a>

            <a href="mailto:Laohugtravel@gmail.com">
                <Card className="text-center h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <CardHeader className="p-4 pb-2 md:p-6 md:pb-2">
                        <div className="flex justify-center mb-2">
                            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                                <Mail className="w-7 h-7 text-primary" />
                            </div>
                        </div>
                      <CardTitle className="font-headline text-lg md:text-xl">Email</CardTitle>
                    </CardHeader>
                    <CardContent className="px-4 pb-4 pt-0 md:px-6 md:pb-6">
                      <p className="text-muted-foreground text-sm break-all">Laohugtravel@gmail.com</p>
                    </CardContent>
                </Card>
            </a>

            <a href="http://line.me/ti/p/~Laohugtravel" target="_blank" rel="noopener noreferrer">
                <Card className="text-center h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <CardHeader className="p-4 pb-2 md:p-6 md:pb-2">
                        <div className="flex justify-center mb-2">
                            <div className="w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center">
                                <MessageSquare className="w-7 h-7 text-emerald-600" />
                            </div>
                        </div>
                      <CardTitle className="font-headline text-lg md:text-xl">Line</CardTitle>
                    </CardHeader>
                    <CardContent className="px-4 pb-4 pt-0 md:px-6 md:pb-6">
                      <p className="text-muted-foreground text-sm break-all">Laohugtravel</p>
                    </CardContent>
                </Card>
            </a>
          </div>
        </div>
      </section>

      {/* Follow Us Section */}
      <section id="follow-us" className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-headline text-4xl font-bold mb-12">
            Follow Us
          </h2>
          <div className="grid grid-cols-5 gap-4 place-items-center">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors"
              >
                {social.icon}
                <span className="font-medium text-xs">Lao Hug Travel</span>
              </a>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

    

    
