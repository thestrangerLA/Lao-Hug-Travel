'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ClipboardList, MapPin } from 'lucide-react';


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
    itinerary: [
        {
            day: 'วันที่ 1',
            title: 'เดินทางถึงเวียงจันทน์',
            details: [
                'รับที่ด่าน, สนามบิน หรือสถานีรถไฟ - ทีมงานจะรอรับคุณเมื่อเดินทางมาถึง เพื่อความสะดวกและรวดเร็วในการเริ่มต้นทริป',
                'ทำเนียบประธานาธิบดี - ชมสถาปัตยกรรมสไตล์ฝรั่งเศสอันสง่างาม และถ่ายภาพแลนด์มาร์กสำคัญของเมือง',
                'มัสยิดจามิอะ - สัมผัสหนึ่งในมัสยิดที่เก่าแก่ที่สุด และเรียนรู้ประวัติชุมชนมุสลิมในเวียงจันทน์',
                'พระธาตุหลวง - พระธาตุทองคู่บ้านคู่เมืองลาว',
                'ตลาดกลางคืนริมแม่น้ำโขง - ตลาดที่เต็มไปด้วยสีสัน วัฒนธรรมท้องถิ่น อาหารและสินค้าหัตถกรรม เหมาะสำหรับเดินเล่นและช้อปปิ้งตอนเย็น'
            ]
        },
        {
            day: 'วันที่ 2',
            title: 'Nampien Yorla Pa',
            details: [
                'เดินทางไป Nampien Yorla Pa',
                'เยี่ยมชมสถานที่และเล่นกิจกรรม',
                'รับประทานอาหารเย็นที่ Nampien Yorla Pa'
            ]
        },
        {
            day: 'วันที่ 3',
            title: 'เดินทางกลับ',
            details: [
                'ซื้อของฝากและเดินทางสู่สนามบิน'
            ]
        }
    ]
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

      {tour.itinerary && (
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-6 flex items-center">
                <ClipboardList className="mr-3 text-primary" />
                โปรแกรมประจำวัน (Premium)
            </h3>
            <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
                {tour.itinerary.map((item, index) => (
                    <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger>
                        <div className="flex items-center text-left">
                        <div className="bg-primary text-primary-foreground font-bold py-1 px-3 rounded-md mr-4">
                            {item.day}
                        </div>
                        <h4 className="font-bold text-gray-800">{item.title}</h4>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="pl-12 pr-4 pt-2 pb-4">
                        <ul className="space-y-2">
                            {item.details.map((detail, i) => (
                            <li key={i} className="flex items-start">
                                <MapPin className="w-4 h-4 text-gray-400 mr-3 mt-1 shrink-0" />
                                <span className="text-gray-600">{detail}</span>
                            </li>
                            ))}
                        </ul>
                        </div>
                    </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
      )}
    </div>
  );
}
