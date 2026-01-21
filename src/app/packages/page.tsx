'use client';
import Image from 'next/image';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import Link from 'next/link';

const allPackages = [
    {
        id: '1',
        title: 'เวียงจันทน์-วังเวียง',
        description: 'ทัวร์ประเทศลาว',
        tourCode: 'VTE01',
        days: '3 วัน',
        rating: 3.5,
        price: '6,500',
        image: PlaceHolderImages.find(p => p.id === 'vientiane-tour'),
        href: '/tours/1'
    },
    {
        id: '2',
        title: 'เวียงจันทน์-หลวงพระบาง',
        description: 'ทัวร์ประเทศลาว',
        tourCode: 'LPQ01',
        days: '4 วัน',
        rating: 4.5,
        price: '11,000',
        image: PlaceHolderImages.find(p => p.id === 'luang-prabang-tour'),
        href: '/tours/2'
    },
    {
        id: '3',
        title: 'เวียงจันทน์-เมืองเฟือง-วังเวียง',
        description: 'ทัวร์ประเทศลาว',
        tourCode: 'VVO01',
        days: '4 วัน',
        rating: 4.0,
        price: '9,500',
        image: PlaceHolderImages.find(p => p.id === 'vang-vieng-tour'),
        href: '/tours/3'
    },
    {
        id: '4',
        title: 'เวียงจันทน์-เมืองเฟือง-วังเวียง-หลวงพระบาง',
        description: 'ทัวร์ประเทศลาว',
        tourCode: 'PKZ01',
        days: '5 วัน',
        rating: 4.0,
        price: '12,500',
        image: PlaceHolderImages.find(p => p.id === 'pakse-tour'),
        href: '/tours/4'
    },
    {
        id: '5',
        title: 'เวียงจันทน์-เมืองเฟือง-วังเวียง-หลวงพระบาง-12ปันนา (ประเทศจีน)',
        description: 'ทัวร์ลาว-จีน',
        tourCode: '4KI01',
        days: '7 วัน',
        rating: 4.5,
        price: '30,000',
        image: PlaceHolderImages.find(p => p.id === '4000-islands-tour'),
        href: '/tours/5'
    },
    {
        id: '6',
        title: 'คุณหมิง-ต้าหลี-หลีเจียง-แชงกรีลา (ประเทศจีน)',
        description: 'ทัวร์ประเทศจีน',
        tourCode: 'XKH01',
        days: '6 วัน',
        rating: 4.2,
        price: '38,000',
        image: PlaceHolderImages.find(p => p.id === 'plain-of-jars-tour'),
        href: '/tours/6'
    },
    {
        id: '7',
        title: 'คุณหมิง-ฉงชิ่ง (ประเทศจีน)',
        description: 'ทัวร์ประเทศจีน',
        tourCode: 'NLA01',
        days: '5 วัน',
        rating: 4.8,
        price: '40,000',
        image: PlaceHolderImages.find(p => p.id === 'northern-laos-tour'),
        href: '/tours/7'
    },
    {
        id: '8',
        title: 'คุณหมิง-ปักกิ่ง-เทียนจิน (ประเทศจีน)',
        description: 'ทัวร์ประเทศจีน',
        tourCode: 'SLA01',
        days: '8 วัน',
        rating: 4.6,
        price: '49,000',
        image: PlaceHolderImages.find(p => p.id === 'southern-laos-tour'),
        href: '/tours/8'
    }
];

const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="w-4 h-4 text-yellow-400 fill-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<Star key="half" className="w-4 h-4 text-yellow-400 fill-yellow-400" />);
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
    }
    return stars;
  };


export default function PackagesPage() {
  const laosPackages = allPackages.filter(pkg => pkg.description.includes('ลาว'));
  const chinaPackages = allPackages.filter(pkg => pkg.description === 'ทัวร์ประเทศจีน');

  return (
    <div className="bg-primary min-h-screen">
      <div className="container py-12">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary-foreground">All Packages</h1>
        </div>

        <div className="mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary-foreground mb-8 text-center">
            ทัวร์ประเทศลาว
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {laosPackages.length > 0 ? (
              laosPackages.map((pkg) => (
              <Link href={pkg.href} key={pkg.title} className="block group">
                <Card
                  className="overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
                >
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
                              <p>รหัสทัวร์</p>
                              <p className="font-bold text-black">{pkg.tourCode}</p>
                          </div>
                          <div>
                              <p>วัน</p>
                              <p className="font-bold text-black">{pkg.days}</p>
                          </div>
                          <div>
                              <p>โรงแรม</p>
                              <div className="flex justify-center mt-1">
                                  {renderStars(pkg.rating)}
                              </div>
                          </div>
                      </div>

                      <div className="mt-auto text-center">
                          <h3 className="font-bold text-xl">{pkg.title}</h3>
                          <p className="text-sm text-gray-600 mb-4">{pkg.description}</p>
                          <p className="text-sm text-gray-500">ราคาเริ่มต้น</p>
                          <div className="flex items-baseline justify-center gap-1">
                              <p className="text-xl font-bold text-primary">฿{pkg.price}</p>
                              <p className="text-sm text-muted-foreground">/ ท่าน</p>
                          </div>
                      </div>
                  </CardContent>
                </Card>
                </Link>
              ))
            ) : (
              <p className="col-span-full text-center text-muted-foreground">
                There are no Laos packages available at this time.
              </p>
            )}
          </div>
        </div>

        <div>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary-foreground mb-8 text-center">
            ทัวร์ประเทศจีน
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {chinaPackages.length > 0 ? (
              chinaPackages.map((pkg) => (
              <Link href={pkg.href} key={pkg.title} className="block group">
                <Card
                  className="overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
                >
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
                              <p>รหัสทัวร์</p>
                              <p className="font-bold text-black">{pkg.tourCode}</p>
                          </div>
                          <div>
                              <p>วัน</p>
                              <p className="font-bold text-black">{pkg.days}</p>
                          </div>
                          <div>
                              <p>โรงแรม</p>
                              <div className="flex justify-center mt-1">
                                  {renderStars(pkg.rating)}
                              </div>
                          </div>
                      </div>
                      
                      <div className="mt-auto text-center">
                          <h3 className="font-bold text-xl">{pkg.title}</h3>
                          <p className="text-sm text-gray-600 mb-4">{pkg.description}</p>
                          <p className="text-sm text-gray-500">ราคาเริ่มต้น</p>
                          <div className="flex items-baseline justify-center gap-1">
                              <p className="text-xl font-bold text-primary">฿{pkg.price}</p>
                              <p className="text-sm text-muted-foreground">/ ท่าน</p>
                          </div>
                      </div>
                  </CardContent>
                </Card>
                </Link>
              ))
            ) : (
              <p className="col-span-full text-center text-muted-foreground">
                There are no China packages available at this time.
              </p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
