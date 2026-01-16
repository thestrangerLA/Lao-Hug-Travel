
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
  MapPin,
  BedDouble,
  Car,
  Ticket,
  Train,
  Activity,
  UtensilsCrossed,
  Award,
  Menu,
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

const navLinks = [
  { href: '/#about', label: 'About' },
  { href: '/#what-we-do', label: 'Services' },
  { href: '/#halal-package', label: 'Halal Tours' },
  { href: '/#why-choose-us', label: 'Why Us' },
  { href: '/#contact-us', label: 'Contact' },
];


export default function Home() {
  const { lang, setLang } = useLang();
  const halalTourImage = PlaceHolderImages.find(p => p.id === "service-halal");
  const chefImage = PlaceHolderImages.find((p) => p.id === 'gmhi-chef');
  const hotelImage = PlaceHolderImages.find((p) => p.id === 'gmhi-hotel');
  const buildingImage = PlaceHolderImages.find((p) => p.id === 'gmhi-building');
  const corridorImage = PlaceHolderImages.find((p) => p.id === 'gmhi-corridor');
  const qrMushroomTour = PlaceHolderImages.find(p => p.id === "qr-mushroomtour");
  const qrMushroomTravel = PlaceHolderImages.find(p => p.id === "qr-mushroomtravel");


  const services = servicesData[lang] || servicesData.en;
  
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState('');
  
  useEffect(() => {
    if (pathname === '/') {
      const handleScroll = () => {
        let currentHash = '';
        const sections = navLinks
          .map((link) => {
            const parts = link.href.split('#');
            return parts.length > 1 ? parts[1] : null;
          })
          .filter((id): id is string => id !== null);

        for (const id of sections) {
          const element = document.getElementById(id);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              currentHash = `#${id}`;
              break;
            }
          }
        }
        setActiveHash(currentHash);
      };
      
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    } else {
        setActiveHash('');
    }
  }, [pathname]);

  const isLinkActive = (href: string) => {
    const [path, hash] = href.split('#');
    // For the homepage, check the active hash
    if (pathname === '/' && hash) {
      return activeHash === `#${hash}`;
    }
    // For other pages, just check the pathname
    if (path !== '/' && pathname.startsWith(path)) {
        return true;
    }
    return false;
  };


  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground">
         <div className="absolute top-4 right-4 z-10">
             <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:text-white hover:bg-white/10">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col gap-6 pt-10">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        'text-lg font-medium transition-colors hover:text-primary',
                        isLinkActive(link.href)
                          ? 'text-primary'
                          : 'text-foreground'
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                   <div className="border-t pt-6">
                     <h3 className="text-sm font-medium text-muted-foreground mb-2 px-4">Language</h3>
                      <Button variant={lang === 'en' ? 'secondary' : 'ghost'} className="w-full justify-start" onClick={() => setLang('en')}>
                        English (EN)
                      </Button>
                      <Button variant={lang === 'th' ? 'secondary' : 'ghost'} className="w-full justify-start" onClick={() => setLang('th')}>
                        Thai (TH)
                      </Button>
                      <Button variant={lang === 'lao' ? 'secondary' : 'ghost'} className="w-full justify-start" onClick={() => setLang('lao')}>
                        Lao (LAO)
                      </Button>
                   </div>
                </div>
              </SheetContent>
            </Sheet>
         </div>
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
              <p id="vision-text" className="text-muted-foreground text-lg leading-relaxed italic">&quot;To inspire and empower travelers to explore the world responsibly, creating meaningful connections between cultures while delivering exceptional, personalized experiences.&quot;</p>
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
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.title} className="bg-background/70 border hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
                <CardContent className="flex flex-col items-center justify-center text-center p-6 gap-4">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    {service.icon}
                  </div>
                  <h3 className="font-headline text-xl font-semibold h-12 flex items-center">{service.title}</h3>
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
      
      {/* LINE QR Code Section */}
      <section id="follow-us" className="py-20 px-4 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-headline text-4xl font-bold text-foreground mb-12">
            ติดตามเพื่อรับโปรโมชั่น
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-4">
              {qrMushroomTour && (
                <Image
                  src={qrMushroomTour.imageUrl}
                  alt={qrMushroomTour.description}
                  width={150}
                  height={150}
                  data-ai-hint={qrMushroomTour.imageHint}
                />
              )}
              <div>
                <p className="text-muted-foreground">ติดตามเราผ่านไลน์</p>
                <p className="font-bold text-lg text-foreground">@mushroomtour</p>
              </div>
            </div>
            <div className="flex items-center justify-center w-full md:w-auto md:h-full">
              <div className="w-full h-px md:w-px md:h-24 bg-border relative">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-2">
                    <span className="text-muted-foreground font-medium">หรือ</span>
                  </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {qrMushroomTravel && (
                <Image
                  src={qrMushroomTravel.imageUrl}
                  alt={qrMushroomTravel.description}
                  width={150}
                  height={150}
                  data-ai-hint={qrMushroomTravel.imageHint}
                />
              )}
              <div>
                <p className="text-muted-foreground">ติดตามเราผ่านไลน์</p>
                <p className="font-bold text-lg text-foreground">@mushroomtravel</p>
              </div>
            </div>
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
          <div className="grid grid-cols-3 gap-2 md:gap-8">
            <Card className="text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <CardHeader className="p-4 pb-2 md:p-6 md:pb-2">
                 <div className="flex justify-center mb-2">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                        <Phone className="w-7 h-7 text-primary" />
                    </div>
                </div>
                <CardTitle className="font-headline text-lg md:text-xl">Phone</CardTitle>
              </CardHeader>
              <CardContent className="px-4 pb-4 pt-0 md:px-6 md:pb-6">
                <p className="text-muted-foreground text-sm">+856 20 55 123 456</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CardHeader className="p-4 pb-2 md:p-6 md:pb-2">
                    <div className="flex justify-center mb-2">
                        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                            <Mail className="w-7 h-7 text-primary" />
                        </div>
                    </div>
                  <CardTitle className="font-headline text-lg md:text-xl">Email</CardTitle>
                </CardHeader>
                <CardContent className="px-4 pb-4 pt-0 md:px-6 md:pb-6">
                  <a href="mailto:info@laohugtravel.com" className="text-muted-foreground hover:text-primary text-sm">info@laohugtravel.com</a>
                </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CardHeader className="p-4 pb-2 md:p-6 md:pb-2">
                    <div className="flex justify-center mb-2">
                        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                            <MapPin className="w-7 h-7 text-primary" />
                        </div>
                    </div>
                  <CardTitle className="font-headline text-lg md:text-xl">Address</CardTitle>
                </CardHeader>
                <CardContent className="px-4 pb-4 pt-0 md:px-6 md:pb-6">
                  <p className="text-muted-foreground text-sm">123 Main Street, Vientiane, Laos</p>
                </CardContent>
            </Card>
          </div>
        </div>
      </section>

    </div>
  );
}

    