'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

const tourDetails = {
  '1': {
    title: 'ทัวร์เวียงจันทน์',
    duration: '3 วัน 2 คืน',
    country: 'Laos [ลาว]',
    city: 'เวียงจันทน์',
    programCode: 'VTE01',
    tourType: 'ทัวร์ในประเทศ',
    priceThb: 6600,
    priceUsd: 180, // Example USD price
    image: PlaceHolderImages.find((p) => p.id === 'vientiane-tour'),
  },
};

export default function TourDetailPage({ params }: { params: { tourId: string } }) {
  const [currency, setCurrency] = useState('thb');

  const tour = tourDetails[params.tourId as keyof typeof tourDetails];

  if (!tour) {
    return <div>Tour not found</div>;
  }

  const price = currency === 'thb' ? tour.priceThb : tour.priceUsd;
  const currencySymbol = currency === 'thb' ? '฿' : '$';

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
        <div className="aspect-w-16 aspect-h-10">
          {tour.image && (
            <Image
              src={tour.image.imageUrl}
              alt={tour.image.description}
              width={800}
              height={600}
              className="object-cover rounded-lg shadow-lg w-full h-full"
              data-ai-hint={tour.image.imageHint}
            />
          )}
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold font-headline text-gray-800">{tour.title}</h1>
          <p className="text-lg text-gray-500 mt-1 mb-4">{tour.duration}</p>

          <div className="space-y-2 text-sm text-gray-700 mb-6">
            <div className="flex justify-between">
              <span className="font-semibold">ทัวร์:</span>
              <span>{tour.country}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">เที่ยวเมือง:</span>
              <span>{tour.city}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">รหัสโปรแกรม:</span>
              <span>{tour.programCode}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">ประเภททัวร์:</span>
              <span>{tour.tourType}</span>
            </div>
             <div className="flex justify-between">
              <span className="font-semibold">ระยะเวลา:</span>
              <span>{tour.duration}</span>
            </div>
          </div>
          
          <div className="border-t pt-4">
             <div className="flex justify-between items-center mb-4">
                <p className="text-3xl font-bold text-primary">
                    {currencySymbol}{price.toLocaleString()}
                </p>
                <div className="flex items-center rounded-lg border p-1 bg-gray-100">
                    <Button onClick={() => setCurrency('thb')} variant={currency === 'thb' ? 'default' : 'ghost'} className={cn("px-3 py-1 h-auto text-xs", currency === 'thb' ? 'bg-primary text-primary-foreground' : 'text-gray-600')}>฿ THB</Button>
                    <Button onClick={() => setCurrency('usd')} variant={currency === 'usd' ? 'default' : 'ghost'} className={cn("px-3 py-1 h-auto text-xs", currency === 'usd' ? 'bg-primary text-primary-foreground' : 'text-gray-600')}>$ USD</Button>
                </div>
            </div>
            <Button size="lg" className="w-full bg-slate-900 text-white hover:bg-slate-800">
              จองเลย
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
