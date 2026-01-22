'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ClipboardList, MapPin, Utensils, UtensilsCrossed, XCircle, Info, CheckCircle, Check } from 'lucide-react';


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
    ],
    inclusions: [
        'รถรับส่ง VIP ตามโปรแกรม',
        'โรงแรมที่พักพร้อมอาหารเช้า',
        'อาหารฮาลาลตามที่ระบุในโปรแกรม',
        'ค่าเข้าชมสถานที่ต่างๆ',
        'ไกด์ท้องถิ่น (พูดไทย)'
    ],
    exclusions: [
        'ค่าใช้จ่ายส่วนตัวนอกเหนือจากรายการ',
        'ค่าทิปสำหรับไกด์และคนขับรถ',
        'ค่าตั๋วเครื่องบินไป-กลับ',
        'ภาษีมูลค่าเพิ่ม 7% และหัก ณ ที่จ่าย 3%'
    ]
  },
};

const mealData = [
    { day: 1, schedule: "จะแจ้งให้ทราบเร็วๆนี้", breakfast: false, lunch: false, dinner: false },
    { day: 2, schedule: "จะแจ้งให้ทราบเร็วๆนี้", breakfast: true, lunch: true, dinner: true },
    { day: 3, schedule: "จะแจ้งให้ทราบเร็วๆนี้", breakfast: true, lunch: true, dinner: true },
];

export default function TourDetailClient({ tourId }: { tourId: string }) {
  const [currency, setCurrency] = useState('thb');

  const tour = tourDetails[tourId as keyof typeof tourDetails];

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

      <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-6 flex items-center"><Utensils className="mr-3 text-primary" />แผนอาหาร</h3>
        <div className="overflow-x-auto rounded-lg border">
            <table className="w-full text-left">
            <thead className="bg-primary/10">
                <tr>
                <th className="p-4 font-bold text-primary">วัน</th>
                <th className="p-4 font-bold text-primary">กำหนดการ</th>
                <th className="p-4 font-bold text-primary text-center">เช้า</th>
                <th className="p-4 font-bold text-primary text-center">กลางวัน</th>
                <th className="p-4 font-bold text-primary text-center">เย็น</th>
                </tr>
            </thead>
            <tbody>
                {mealData.map((meal) => (
                <tr key={meal.day} className="border-t">
                    <td className="p-4 font-semibold">{meal.day}</td>
                    <td className="p-4 text-gray-600">{meal.schedule}</td>
                    <td className="p-4 text-center">
                    {meal.breakfast ? <UtensilsCrossed className="w-5 h-5 text-primary mx-auto" /> : <XCircle className="w-5 h-5 text-gray-300 mx-auto" />}
                    </td>
                    <td className="p-4 text-center">
                    {meal.lunch ? <UtensilsCrossed className="w-5 h-5 text-primary mx-auto" /> : <XCircle className="w-5 h-5 text-gray-300 mx-auto" />}
                    </td>
                    <td className="p-4 text-center">
                    {meal.dinner ? <UtensilsCrossed className="w-5 h-5 text-primary mx-auto" /> : <XCircle className="w-5 h-5 text-gray-300 mx-auto" />}
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
      </div>

       <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-6 flex items-center"><Info className="mr-3 text-primary" />รายละเอียดและเงื่อนไข</h3>
          <Tabs defaultValue="conditions" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-gray-100">
              <TabsTrigger value="conditions">
                <Info className="mr-2 h-4 w-4" />เงื่อนไข
              </TabsTrigger>
              <TabsTrigger value="included">
                <CheckCircle className="mr-2 h-4 w-4" />รวม
              </TabsTrigger>
              <TabsTrigger value="excluded">
                <XCircle className="mr-2 h-4 w-4" />ไม่รวม
              </TabsTrigger>
            </TabsList>
            <TabsContent value="conditions" className="pt-6">
                <ul className="list-decimal list-inside space-y-2 text-gray-600">
                    <li>บริษัทขอสงวนสิทธิ์ในการเปลี่ยนแปลงโปรแกรม แต่จะคำนึงถึงผลประโยชน์ของลูกค้าเป็นหลัก</li>
                    <li>บริษัทจะไม่รับผิดชอบต่อการถูกปฏิเสธเข้าเมืองหากท่านอยู่นอกเหนือข้อตกลง</li>
                    <li>ราคาโปรแกรมทัวร์นี้
                        <ul className="list-[lower-alpha] list-inside pl-6 mt-1">
                            <li>ไม่รวมค่าทิปไกด์และคนขับรถ</li>
                        </ul>
                    </li>
                </ul>
            </TabsContent>
            <TabsContent value="included" className="pt-6">
                <ul className="space-y-2">
                    {tour.inclusions.map((item, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                            <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </TabsContent>
            <TabsContent value="excluded" className="pt-6">
                <ul className="space-y-2">
                    {tour.exclusions.map((item, index) => (
                         <li key={index} className="flex items-center text-gray-600">
                            <XCircle className="w-4 h-4 text-red-500 mr-3 flex-shrink-0" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </TabsContent>
          </Tabs>
        </div>

    </div>
  );
}
