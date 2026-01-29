
'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Tag, Flag, CalendarDays, MapPin } from 'lucide-react';
import { allPackagesData } from '@/lib/packages-data';
import { useLang } from '@/context/LangContext';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';

export default function PackageDetailPage() {
  const { id } = useParams();
  const { lang } = useLang();

  const pkg = allPackagesData.find((p) => p.id === id);

  const contentData = {
    en: {
        tourCode: 'Tour Code',
        days: 'Duration',
        price: 'Price',
        perPerson: '/ person',
        bookNow: 'Book Now',
        back: 'Back to all packages',
        notFound: 'Package not found',
        category: 'Category',
        itineraryTitle: 'Daily Program (Premium)',
    },
    th: {
        tourCode: 'รหัสทัวร์',
        days: 'ระยะเวลา',
        price: 'ราคา',
        perPerson: '/ ท่าน',
        bookNow: 'จองเลย',
        back: 'กลับไปหน้าแพ็คเกจทั้งหมด',
        notFound: 'ไม่พบแพ็คเกจ',
        category: 'หมวดหมู่',
        itineraryTitle: 'โปรแกรมประจำวัน (Premium)',
    },
    ar: {
      tourCode: 'رمز الجولة',
      days: 'المدة',
      price: 'السعر',
      perPerson: '/ شخص',
      bookNow: 'احجز الآن',
      back: 'العودة إلى كافة الباقات',
      notFound: 'لم يتم العثور على الحزمة',
      category: 'فئة',
      itineraryTitle: 'البرنامج اليومي (พรีเมียม)',
    }
  };

  const content = contentData[lang] || contentData.en;

  if (!pkg) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-2xl font-bold">{content.notFound}</h1>
        <Button asChild className="mt-4">
          <Link href="/packages">
            <ArrowLeft className="mr-2 h-4 w-4" /> {content.back}
          </Link>
        </Button>
      </div>
    );
  }

  const { title, days, description, itinerary } = pkg.translations[lang] || pkg.translations.en;
  const price = lang === 'en' ? pkg.priceUsd : pkg.priceThb;
  const currencySymbol = lang === 'en' ? '$' : '฿';

  return (
    <div className="bg-secondary min-h-screen">
        <div className="container py-12">
            <div className="max-w-4xl mx-auto">
                <Button asChild variant="ghost" className="mb-4">
                  <Link href="/packages">
                    <ArrowLeft className="mr-2 h-4 w-4" /> {content.back}
                  </Link>
                </Button>
                <Card className="overflow-hidden shadow-lg bg-card">
                    {pkg.image && (
                        <div className="relative h-64 md:h-96 w-full">
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
                        <CardTitle className="font-headline text-4xl text-primary">{title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                        {description && (
                            <>
                                <p className="text-lg text-muted-foreground">{description}</p>
                                <Separator className="my-6" />
                            </>
                        )}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-4 text-lg">
                                <div className="flex items-center gap-3">
                                    <Tag className="w-6 h-6 text-accent"/>
                                    <div>
                                        <p className="text-sm text-muted-foreground">{content.tourCode}</p>
                                        <p className="font-bold text-foreground">{pkg.tourCode}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Calendar className="w-6 h-6 text-accent"/>
                                    <div>
                                        <p className="text-sm text-muted-foreground">{content.days}</p>
                                        <p className="font-bold text-foreground">{days}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Flag className="w-6 h-6 text-accent"/>
                                    <div>
                                        <p className="text-sm text-muted-foreground">{content.category}</p>
                                        <p className="font-bold capitalize text-foreground">{pkg.category.replace('-', ' & ')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center bg-primary/10 rounded-lg p-6">
                                <p className="text-sm text-muted-foreground">{content.price}</p>
                                <div className="flex items-baseline justify-center gap-2 my-2">
                                    <p className="text-5xl font-bold text-primary">
                                    {currencySymbol}{price}
                                    </p>
                                    <p className="text-base text-muted-foreground">
                                    {content.perPerson}
                                    </p>
                                </div>
                                <Button size="lg" className="mt-4 pulse-btn">
                                    {content.bookNow}
                                </Button>
                            </div>
                        </div>

                        {itinerary && itinerary.length > 0 && (
                          <>
                            <Separator className="my-8" />
                            <div className="space-y-6">
                              <h3 className="font-headline text-3xl text-primary flex items-center gap-3">
                                <CalendarDays className="w-7 h-7" />
                                {content.itineraryTitle}
                              </h3>
                              <Accordion type="single" collapsible className="w-full space-y-2" defaultValue="day-0">
                                {itinerary.map((item, index) => (
                                  <AccordionItem key={index} value={`day-${index}`} className="border-b-0">
                                    <AccordionTrigger className="bg-secondary hover:no-underline text-left p-4 rounded-lg">
                                      <div className="flex items-center gap-4">
                                        <Badge>{item.day}</Badge>
                                        <p className="font-bold text-lg text-primary">{item.title}</p>
                                      </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="pt-4 pb-2 px-4">
                                      <ul className="space-y-4">
                                        {item.activities.map((activity, actIndex) => (
                                          <li key={actIndex} className="flex items-start gap-3">
                                            <MapPin className="w-5 h-5 text-accent mt-1 shrink-0" />
                                            <p className="text-muted-foreground">{activity}</p>
                                          </li>
                                        ))}
                                      </ul>
                                    </AccordionContent>
                                  </AccordionItem>
                                ))}
                              </Accordion>
                            </div>
                          </>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    </div>
  );
}
