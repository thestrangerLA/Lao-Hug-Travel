
'use client';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Star } from 'lucide-react';
import { useLang } from '@/context/LangContext';

const allPackagesData = [
  {
    id: '1',
    tourCode: 'VTE01',
    rating: 3.5,
    price: '6,500',
    image: PlaceHolderImages.find((p) => p.id === 'vientiane-tour'),
    href: '/tours/1',
    category: 'laos',
    translations: {
      en: { title: 'Vientiane-VangVieng', days: '3 Days' },
      th: { title: 'เวียงจันทน์-วังเวียง', days: '3 วัน' },
      ar: { title: 'فيينتيان-فANG VIENG', days: '3 أيام' },
    },
  },
  {
    id: '2',
    tourCode: 'LPQ01',
    rating: 4.5,
    price: '11,000',
    image: PlaceHolderImages.find((p) => p.id === 'luang-prabang-tour'),
    href: '/tours/2',
    category: 'laos',
    translations: {
      en: { title: 'Vientiane-Luang Prabang', days: '4 Days' },
      th: { title: 'เวียงจันทน์-หลวงพระบาง', days: '4 วัน' },
      ar: { title: 'فيينتيان-لوانغ برابانغ', days: '4 أيام' },
    },
  },
  {
    id: '3',
    tourCode: 'VVO01',
    rating: 4.0,
    price: '9,500',
    image: PlaceHolderImages.find((p) => p.id === 'vang-vieng-tour'),
    href: '/tours/3',
    category: 'laos',
    translations: {
      en: { title: 'Vientiane-MuangFueang-VangVieng', days: '4 Days' },
      th: { title: 'เวียงจันทน์-เมืองเฟือง-วังเวียง', days: '4 วัน' },
      ar: { title: 'فيينتيان-موانغ فونغ-فANG VIENG', days: '4 أيام' },
    },
  },
  {
    id: '4',
    tourCode: 'PKZ01',
    rating: 4.0,
    price: '12,500',
    image: PlaceHolderImages.find((p) => p.id === 'pakse-tour'),
    href: '/tours/4',
    category: 'laos',
    translations: {
      en: {
        title: 'Vientiane-MuangFueang-VangVieng-Luang Prabang',
        days: '5 Days',
      },
      th: {
        title: 'เวียงจันทน์-เมืองเฟือง-วังเวียง-หลวงพระบาง',
        days: '5 วัน',
      },
      ar: {
        title: 'فيينتيان-موانغ فونغ-فANG VIENG-لوانغ برابانغ',
        days: '5 أيام',
      },
    },
  },
  {
    id: '5',
    tourCode: '4KI01',
    rating: 4.5,
    price: '30,000',
    image: PlaceHolderImages.find((p) => p.id === '4000-islands-tour'),
    href: '/tours/5',
    category: 'laos-china',
    translations: {
      en: {
        title:
          'Vientiane-MuangFueang-VangVieng-Luang Prabang-Xishuangbanna (China)',
        days: '7 Days',
      },
      th: {
        title:
          'เวียงจันทน์-เมืองเฟือง-วังเวียง-หลวงพระบาง-12ปันนา (ประเทศจีน)',
        days: '7 วัน',
      },
      ar: {
        title:
          'فيينتيان-موانغ فونغ-فانغ فينغ-لوانغ برابانغ-سيشوانغبانا (الصين)',
        days: '7 أيام',
      },
    },
  },
  {
    id: '6',
    tourCode: 'XKH01',
    rating: 4.2,
    price: '38,000',
    image: PlaceHolderImages.find((p) => p.id === 'plain-of-jars-tour'),
    href: '/tours/6',
    category: 'china',
    translations: {
      en: { title: 'Kunming-Dali-Lijiang-Shangrila (China)', days: '6 Days' },
      th: {
        title: 'คุณหมิง-ต้าหลี-หลีเจียง-แชงกรีลา (ประเทศจีน)',
        days: '6 วัน',
      },
      ar: {
        title: 'كونمينغ-دالي-ليجيانغ-شانغريلا (الصين)',
        days: '6 أيام',
      },
    },
  },
  {
    id: '7',
    tourCode: 'NLA01',
    rating: 4.8,
    price: '40,000',
    image: PlaceHolderImages.find((p) => p.id === 'northern-laos-tour'),
    href: '/tours/7',
    category: 'china',
    translations: {
      en: { title: 'Kunming-Chongqing (China)', days: '5 Days' },
      th: { title: 'คุณหมิง-ฉงชิ่ง (ประเทศจีน)', days: '5 วัน' },
      ar: { title: 'كونمينغ-تشونغتشينغ (الصين)', days: '5 أيام' },
    },
  },
  {
    id: '8',
    tourCode: 'SLA01',
    rating: 4.6,
    price: '49,000',
    image: PlaceHolderImages.find((p) => p.id === 'southern-laos-tour'),
    href: '/tours/8',
    category: 'china',
    translations: {
      en: { title: 'Kunming-Beijing-Tianjin (China)', days: '8 Days' },
      th: { title: 'คุณหมิง-ปักกิ่ง-เทียนจิน (ประเทศจีน)', days: '8 วัน' },
      ar: { title: 'كونمينغ-بكين-تيانجين (الصين)', days: '8 أيام' },
    },
  },
];

const contentData = {
    en: {
        pageTitle: 'All Packages',
        laosHeader: 'Laos Tours',
        chinaHeader: 'China Tours',
        tourCode: 'Tour Code',
        days: 'Days',
        hotel: 'Hotel',
        perPerson: '/ person',
        noLaosPackages: 'There are no Laos packages available at this time.',
        noChinaPackages: 'There are no China packages available at this time.',
    },
    th: {
        pageTitle: 'แพ็คเกจทั้งหมด',
        laosHeader: 'ทัวร์ประเทศลาว',
        chinaHeader: 'ทัวร์ประเทศจีน',
        tourCode: 'รหัสทัวร์',
        days: 'วัน',
        hotel: 'โรงแรม',
        perPerson: '/ ท่าน',
        noLaosPackages: 'ไม่มีแพ็คเกจทัวร์ประเทศลาวในขณะนี้',
        noChinaPackages: 'ไม่มีแพ็คเกจทัวร์ประเทศจีนในขณะนี้',
    },
    ar: {
        pageTitle: 'كل الباقات',
        laosHeader: 'جولات لاوس',
        chinaHeader: 'جولات الصين',
        tourCode: 'رمز الجولة',
        days: 'أيام',
        hotel: 'الفندق',
        perPerson: '/ شخص',
        noLaosPackages: 'لا توجد باقات لاوس متاحة في هذا الوقت.',
        noChinaPackages: 'لا توجد باقات صينية متاحة في هذا الوقت.',
    }
};

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
      <Star key="half" className="w-4 h-4 text-yellow-400 fill-yellow-400" />
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
              laosPackages.map((pkg) => (
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
                        <h3 className="font-bold text-xl mb-4">{pkg.title}</h3>
                        <div className="flex items-baseline justify-center gap-1">
                          <p className="text-xl font-bold text-primary">
                            ฿{pkg.price}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {content.perPerson}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))
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
              chinaPackages.map((pkg) => (
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
                        <h3 className="font-bold text-xl mb-4">{pkg.title}</h3>
                        <div className="flex items-baseline justify-center gap-1">
                          <p className="text-xl font-bold text-primary">
                            ฿{pkg.price}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {content.perPerson}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))
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
