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
        title: 'ทัวร์เวียงจันทน์',
        description: '3 วัน 2 คืน',
        tourCode: 'VTE01',
        days: '3 วัน',
        rating: 3.5,
        price: '6,600',
        image: PlaceHolderImages.find(p => p.id === 'vientiane-tour'),
        href: '/tours/1'
    },
    {
        id: '2',
        title: 'ทัวร์หลวงพระบาง',
        description: '4 วัน 3 คืน',
        tourCode: 'LPQ01',
        days: '4 วัน',
        rating: 4.5,
        price: '8,500',
        image: PlaceHolderImages.find(p => p.id === 'luang-prabang-tour'),
        href: '/tours/2'
    },
    {
        id: '3',
        title: 'ทัวร์วังเวียง',
        description: '3 วัน 2 คืน',
        tourCode: 'VVO01',
        days: '3 วัน',
        rating: 4.0,
        price: '7,200',
        image: PlaceHolderImages.find(p => p.id === 'vang-vieng-tour'),
        href: '/tours/3'
    },
    {
        id: '4',
        title: 'ทัวร์ปากเซ',
        description: '3 วัน 2 คืน',
        tourCode: 'PKZ01',
        days: '3 วัน',
        rating: 4,
        price: '7,800',
        image: PlaceHolderImages.find(p => p.id === 'pakse-tour'),
        href: '/tours/4'
    },
    {
        id: '5',
        title: 'ทัวร์สี่พันดอน',
        description: '4 วัน 3 คืน',
        tourCode: '4KI01',
        days: '4 วัน',
        rating: 4.5,
        price: '9,200',
        image: PlaceHolderImages.find(p => p.id === '4000-islands-tour'),
        href: '/tours/5'
    },
    {
        id: '6',
        title: 'ทุ่งไหหิน',
        description: '3 วัน 2 คืน',
        tourCode: 'XKH01',
        days: '3 วัน',
        rating: 4.2,
        price: '8,100',
        image: PlaceHolderImages.find(p => p.id === 'plain-of-jars-tour'),
        href: '/tours/6'
    },
    {
        id: '7',
        title: 'ผจญภัยลาวเหนือ',
        description: '5 วัน 4 คืน',
        tourCode: 'NLA01',
        days: '5 วัน',
        rating: 4.8,
        price: '12,500',
        image: PlaceHolderImages.find(p => p.id === 'northern-laos-tour'),
        href: '/tours/7'
    },
    {
        id: '8',
        title: 'สำรวจลาวใต้',
        description: '5 วัน 4 คืน',
        tourCode: 'SLA01',
        days: '5 วัน',
        rating: 4.6,
        price: '11,800',
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
      // For a half star, we can use a star icon that is partially filled or styled differently.
      // For simplicity here, we'll show it as filled, but you could use a half-star icon.
      stars.push(<Star key="half" className="w-4 h-4 text-yellow-400 fill-yellow-400" />);
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
    }
    return stars;
  };


export default function PackagesPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container py-12">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">All Packages</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our wide range of travel packages designed to make your journey unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allPackages.length > 0 ? (
            allPackages.map((pkg) => (
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

                    <div className="text-center flex-grow">
                        <h3 className="font-bold text-xl">{pkg.title}</h3>
                        <p className="text-sm text-gray-600 mb-4">{pkg.description}</p>
                    </div>
                    
                    <div className="mt-auto">
                        <div className="text-center">
                            <p className="text-sm text-gray-500">ราคาเริ่มต้น</p>
                            <p className="text-xl font-bold text-primary">฿{pkg.price}</p>
                        </div>
                    </div>
                </CardContent>
              </Card>
              </Link>
            ))
          ) : (
            <p className="col-span-full text-center text-muted-foreground">
              There are no packages available at this time.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
