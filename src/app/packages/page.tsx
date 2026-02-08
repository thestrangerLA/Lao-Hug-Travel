
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useLang } from '@/context/LangContext';
import { allPackagesData, packagesContentData as contentData } from '@/lib/packages-data';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function PackagesPage() {
  const { lang } = useLang();
  const content = contentData[lang] || contentData.en;
  const backButtonContent = {
    en: 'Back to Home',
    th: 'กลับหน้าหลัก',
    ar: 'العودة إلى الرئيسية'
  };
  
  const allPackages = allPackagesData.map(pkg => {
      const image = pkg.images ? (pkg.images[lang] ?? (lang === 'ar' ? pkg.images.en : undefined) ?? pkg.images.th ?? pkg.images.default) : undefined;
      return {
        ...pkg,
        ...(pkg.translations[lang] || pkg.translations.en),
        displayImage: image,
      }
  });
  
  const laosPackages = allPackages.filter(pkg => pkg.category.includes('laos'));
  const chinaPackages = allPackages.filter(pkg => pkg.category === 'china');

  return (
    <div className="bg-primary min-h-screen">
      <div className="container py-12">
        <Button asChild variant="secondary" className="mb-4">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {backButtonContent[lang] || backButtonContent.en}
          </Link>
        </Button>
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary-foreground">
            {content.pageTitle}
          </h1>
        </div>

        <div className="mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary-foreground mb-8 text-center">
            {content.laosHeader}
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {laosPackages.length > 0 ? (
              laosPackages.map((pkg) => {
                const price = lang === 'en' ? pkg.priceUsd : pkg.priceThb;
                const currencySymbol = lang === 'en' ? '$' : '฿';
                return (
                  <Link key={pkg.id} href={`/packages/${pkg.id}`} className="block group">
                    <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                      {pkg.displayImage && (
                        <div className="relative w-full aspect-square">
                          <Image
                            src={pkg.displayImage.imageUrl}
                            alt={pkg.displayImage.description}
                            fill
                            className="object-contain"
                            data-ai-hint={pkg.displayImage.imageHint}
                          />
                        </div>
                      )}
                      <CardContent className="p-4 flex flex-col flex-grow">
                        <div className="grid grid-cols-2 gap-4 text-center text-xs text-gray-500 border-b pb-3 mb-3">
                          <div>
                            <p>{content.tourCode}</p>
                            <p className="font-bold text-black">{pkg.tourCode}</p>
                          </div>
                          <div>
                            <p>{content.days}</p>
                            <p className="font-bold text-black">{pkg.days}</p>
                          </div>
                        </div>

                        <div className="mt-auto text-center">
                          <h3 className="font-bold text-xl mb-4 flex items-center justify-center min-h-[3rem]">{pkg.title}</h3>
                          <div className="flex items-baseline justify-center gap-1">
                            <p className="text-xl font-bold text-primary">
                              {currencySymbol}{price}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {content.perPerson}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })
            ) : (
              <p className="col-span-full text-center text-muted-foreground">
                {content.noLaosPackages}
              </p>
            )}
          </div>
        </div>

        <div>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary-foreground mb-8 text-center">
            {content.chinaHeader}
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {chinaPackages.length > 0 ? (
              chinaPackages.map((pkg) => {
                const price = lang === 'en' ? pkg.priceUsd : pkg.priceThb;
                const currencySymbol = lang === 'en' ? '$' : '฿';
                return (
                  <Link key={pkg.id} href={`/packages/${pkg.id}`} className="block group">
                    <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                      {pkg.displayImage && (
                        <div className="relative w-full aspect-square">
                          <Image
                            src={pkg.displayImage.imageUrl}
                            alt={pkg.displayImage.description}
                            fill
                            className="object-contain"
                            data-ai-hint={pkg.displayImage.imageHint}
                          />
                        </div>
                      )}
                      <CardContent className="p-4 flex flex-col flex-grow">
                        <div className="grid grid-cols-2 gap-4 text-center text-xs text-gray-500 border-b pb-3 mb-3">
                          <div>
                            <p>{content.tourCode}</p>
                            <p className="font-bold text-black">{pkg.tourCode}</p>
                          </div>
                          <div>
                            <p>{content.days}</p>
                            <p className="font-bold text-black">{pkg.days}</p>
                          </div>
                        </div>

                        <div className="mt-auto text-center">
                           <h3 className="font-bold text-xl mb-4 flex items-center justify-center min-h-[3rem]">{pkg.title}</h3>
                          <div className="flex items-baseline justify-center gap-1">
                            <p className="text-xl font-bold text-primary">
                              {currencySymbol}{price}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {content.perPerson}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                )
                })
            ) : (
              <p className="col-span-full text-center text-muted-foreground">
                {content.noChinaPackages}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
