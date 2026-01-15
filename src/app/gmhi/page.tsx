'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Globe, MapPin, Building, Utensils, Award } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const GmhiPage = () => {
  const chefImage = PlaceHolderImages.find((p) => p.id === 'gmhi-chef');
  const hotelImage = PlaceHolderImages.find((p) => p.id === 'gmhi-hotel');
  const buildingImage = PlaceHolderImages.find((p) => p.id === 'gmhi-building');
  const corridorImage = PlaceHolderImages.find((p) => p.id === 'gmhi-corridor');

  return (
    <div className="bg-background font-body">
      <main>
        <div className="relative bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="flex flex-col text-center md:text-left">
                <div className="flex items-center gap-4 mb-4 justify-center md:justify-start">
                    <Award className="w-12 h-12 text-accent" />
                    <div>
                        <p className="text-sm uppercase tracking-widest text-accent">TMTA</p>
                        <h1 className="text-6xl md:text-8xl font-bold font-headline tracking-tighter text-white">
                            GMHI
                        </h1>
                    </div>
                </div>
                <p className="text-lg md:text-xl font-light text-primary-foreground/90">
                  Global Muslim-Friendly Hospitality Index
                </p>
                <div className="w-24 h-1 bg-accent my-6 mx-auto md:mx-0"></div>
                <h2 className="text-2xl md:text-3xl font-semibold font-headline text-white">
                  GLOBAL MUSLIM-FRIENDLY HOSPITALITY INDEX BY TMTA
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
        </div>

        <div className="bg-secondary">
            <div className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
                <div className="bg-background/80 p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold font-headline text-primary mb-6 text-center">Get In Touch</h3>
                    <ul className="space-y-4 text-lg">
                        <li className="flex items-center gap-4">
                            <Phone className="w-6 h-6 text-accent" />
                            <a href="tel:+66911644919" className="text-muted-foreground hover:text-primary transition-colors">+66 91 164 4919</a>
                        </li>
                        <li className="flex items-center gap-4">
                            <Globe className="w-6 h-6 text-accent" />
                            <a href="http://gmhi.co" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">gmhi.co</a>
                        </li>
                        <li className="flex items-center gap-4">
                            <MapPin className="w-6 h-6 text-accent" />
                            <p className="text-muted-foreground">8 Phutthamonthon Sai 1 Rd, Soi 37, Chimphli, Taling Chan, Bangkok 10170.</p>
                        </li>
                    </ul>
                </div>
                 <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold font-headline text-primary mb-4">Powered by</h3>
                    <p className="text-lg mb-2 text-foreground/80">Thai Muslim Trade Association (TMTA)</p>
                    <p className="text-lg text-foreground/80">Shariah Excellence</p>
                    <div className="flex justify-center md:justify-start gap-6 mt-4">
                        <div className="font-bold text-primary">TMTA</div>
                        <div className="flex items-center gap-2 font-semibold text-primary">
                            <Award className="w-5 h-5" />
                            <span>Shariah Excellent</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
};

export default GmhiPage;
