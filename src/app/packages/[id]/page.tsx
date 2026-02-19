
'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Tag, Flag, MessageCircle } from 'lucide-react';
import { allPackagesData } from '@/lib/packages-data';
import { useLang } from '@/context/LangContext';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

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
        bookNow: 'Contact to Book',
        back: 'Back to all packages',
        notFound: 'Package not found',
        category: 'Category',
    },
    th: {
        tourCode: 'รหัสทัวร์',
        days: 'ระยะเวลา',
        price: 'ราคา',
        perPerson: '/ ท่าน',
        bookNow: 'ติดต่อจองทัวร์',
        back: 'กลับไปหน้าแพ็คเกจทั้งหมด',
        notFound: 'ไม่พบแพ็คเกจ',
        category: 'หมวดหมู่',
    },
    ar: {
      tourCode: 'رمز الجولة',
      days: 'المدة',
      price: 'السعر',
      perPerson: '/ شخص',
      bookNow: 'اتصل للحجز',
      back: 'العودة إلى كافة الباقات',
      notFound: 'لم يتم العثور على الحزمة',
      category: 'فئة',
    },
    cn: {
        tourCode: '旅游代码',
        days: '持续时间',
        price: '价格',
        perPerson: '/人',
        bookNow: '联系预订',
        back: '返回所有套餐',
        notFound: '未找到套餐',
        category: '类别',
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

  const { title, days } = pkg.translations[lang] || pkg.translations.en;
  const price = lang === 'en' ? pkg.priceUsd : pkg.priceThb;
  const currencySymbol = lang === 'en' ? '$' : '฿';
  const image = pkg.images ? (pkg.images[lang] ?? (['ar', 'cn'].includes(lang) ? pkg.images.en : undefined) ?? pkg.images.th ?? pkg.images.default) : undefined;

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
                    {image && (
                        <div className="relative w-full aspect-square md:aspect-[4/3] bg-muted">
                        <Image
                            src={image.imageUrl}
                            alt={image.description}
                            fill
                            className="object-contain"
                            data-ai-hint={image.imageHint}
                        />
                        </div>
                    )}
                    <CardHeader>
                        <CardTitle className="font-headline text-4xl text-primary">{title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
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
                            <div className="flex flex-col items-center justify-center bg-primary/10 rounded-lg p-6 border border-primary/20">
                                <p className="text-sm text-muted-foreground">{content.price}</p>
                                <div className="flex items-baseline justify-center gap-2 my-2">
                                    <p className="text-5xl font-bold text-primary">
                                    {currencySymbol}{price}
                                    </p>
                                    <p className="text-base text-muted-foreground">
                                    {content.perPerson}
                                    </p>
                                </div>
                                <Button size="lg" className="mt-4 pulse-btn w-full sm:w-auto" asChild>
                                    <a href="https://wa.me/66622244315" target="_blank" rel="noopener noreferrer">
                                        <MessageCircle className="mr-2 h-5 w-5" />
                                        {content.bookNow}
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    </div>
  );
}
