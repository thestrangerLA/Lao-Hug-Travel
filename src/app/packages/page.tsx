
'use client';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Star, StarHalf } from 'lucide-react';
import { useLang } from '@/context/LangContext';
import { allPackagesData, packagesContentData as contentData } from '@/lib/packages-data';

const renderStars = (rating: number) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <Star key={`full-${i}`} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
    );
  }

  if (hasHalfStar) {
    stars.push(
      <StarHalf key="half" className="w-4 h-4 text-yellow-400 fill-yellow-400" />
    );
  }

  const emptyStars = 5 - Math.ceil(rating);
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
  }
  return stars;
};

export default function PackagesPage() {
  const { lang } = useLang();
  const content = contentData[lang] || contentData.en;
  
  const allPackages = allPackagesData.map(pkg => ({
      ...pkg,
      ...(pkg.translations[lang] || pkg.translations.en)
  }));
  
  const laosPackages = allPackages.filter(pkg => pkg.category.includes('laos'));
  const chinaPackages = allPackages.filter(pkg => pkg.category === 'china');

  return (
    <div className="bg-primary min-h-screen">
      <div className="container py-12">
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
                  <div key={pkg.id} className="block group">
                    <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
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
                      <CardContent className="p-4 flex flex-col flex-grow">
                        <div className="grid grid-cols-3 gap-4 text-center text-xs text-gray-500 border-b pb-3 mb-3">
                          <div>
                            <p>{content.tourCode}</p>
                            <p className="font-bold text-black">{pkg.tourCode}</p>
                          </div>
                          <div>
                            <p>{content.days}</p>
                            <p className="font-bold text-black">{pkg.days}</p>
                          </div>
                          <div>
                            <p>{content.hotel}</p>
                            <div className="flex justify-center mt-1">
                              {renderStars(pkg.rating)}
                            </div>
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
                  </div>
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
                  <div key={pkg.id} className="block group">
                    <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
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
                      <CardContent className="p-4 flex flex-col flex-grow">
                        <div className="grid grid-cols-3 gap-4 text-center text-xs text-gray-500 border-b pb-3 mb-3">
                          <div>
                            <p>{content.tourCode}</p>
                            <p className="font-bold text-black">{pkg.tourCode}</p>
                          </div>
                          <div>
                            <p>{content.days}</p>
                            <p className="font-bold text-black">{pkg.days}</p>
                          </div>
                          <div>
                            <p>{content.hotel}</p>
                            <div className="flex justify-center mt-1">
                              {renderStars(pkg.rating)}
                            </div>
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
                  </div>
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
