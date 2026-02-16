'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Search } from 'lucide-react';
import { useLang } from '@/context/LangContext';

const servicesContent = {
    en: {
        pageTitle: 'Our Services',
        pageDescription: 'Explore our wide range of travel solutions designed to make your journey unforgettable.',
        backToHome: 'Back to Home',
        services: [
          {
            title: 'Book accommodation',
            description: 'Find the perfect place to stay.',
            category: 'Lodging',
            image: PlaceHolderImages.find(p => p.id === 'service-lodging'),
          },
          {
            title: 'Tour guide vehicle',
            description: 'Explore with a private vehicle.',
            category: 'Transport',
            image: PlaceHolderImages.find(p => p.id === 'service-guides'),
          },
          {
            title: 'Book a flight ticket',
            description: 'Get the best deals on flights.',
            category: 'Transport',
            image: PlaceHolderImages.find(p => p.id === 'hero-1'),
          },
          {
            title: 'Book a train ticket',
            description: 'Travel by rail with ease.',
            category: 'Transport',
            image: PlaceHolderImages.find(p => p.id === 'service-transport'),
          },
          {
            title: 'Activity services',
            description: 'Book exciting tours and activities.',
            category: 'Tours',
            image: PlaceHolderImages.find(p => p.id === 'service-group-tours'),
          },
          {
            title: 'Halal food service',
            description: 'Enjoy delicious Halal meals.',
            category: 'Specialty',
            image: PlaceHolderImages.find(p => p.id === 'service-halal'),
          },
        ]
    },
    th: {
        pageTitle: 'บริการของเรา',
        pageDescription: 'สำรวจโซลูชันการเดินทางที่หลากหลายของเราซึ่งออกแบบมาเพื่อทำให้การเดินทางของคุณน่าจดจำ',
        backToHome: 'กลับหน้าหลัก',
        services: [
          {
            title: 'จองที่พัก',
            description: 'ค้นหาที่พักที่สมบูรณ์แบบ',
            category: 'ที่พัก',
            image: PlaceHolderImages.find(p => p.id === 'service-lodging'),
          },
          {
            title: 'รถนำเที่ยว',
            description: 'ท่องเที่ยวไปกับรถส่วนตัว',
            category: 'การเดินทาง',
            image: PlaceHolderImages.find(p => p.id === 'service-guides'),
          },
          {
            title: 'จองตั๋วเครื่องบิน',
            description: 'รับข้อเสนอที่ดีที่สุดสำหรับเที่ยวบิน',
            category: 'การเดินทาง',
            image: PlaceHolderImages.find(p => p.id === 'hero-1'),
          },
          {
            title: 'จองตั๋วรถไฟ',
            description: 'เดินทางโดยรถไฟอย่างง่ายดาย',
            category: 'การเดินทาง',
            image: PlaceHolderImages.find(p => p.id === 'service-transport'),
          },
          {
            title: 'บริการกิจกรรม',
            description: 'จองทัวร์และกิจกรรมที่น่าตื่นเต้น',
            category: 'ทัวร์',
            image: PlaceHolderImages.find(p => p.id === 'service-group-tours'),
          },
          {
            title: 'บริการอาหารฮาลาล',
            description: 'เพลิดเพลินกับอาหารฮาลาลแสนอร่อย',
            category: 'พิเศษ',
            image: PlaceHolderImages.find(p => p.id === 'service-halal'),
          },
        ]
    },
    ar: {
        pageTitle: 'خدماتنا',
        pageDescription: 'استكشف مجموعتنا الواسعة من حلول السفر المصممة لجعل رحلتك لا تُنسى.',
        backToHome: 'العودة إلى الرئيسية',
        services: [
          {
            title: 'حجز إقامة',
            description: 'ابحث عن المكان المثالي للإقامة.',
            category: 'إقامة',
            image: PlaceHolderImages.find(p => p.id === 'service-lodging'),
          },
          {
            title: 'سيارة مرشد سياحي',
            description: 'استكشف بمركبة خاصة.',
            category: 'وسائل النقل',
            image: PlaceHolderImages.find(p => p.id === 'service-guides'),
          },
          {
            title: 'حجز تذكرة طيران',
            description: 'احصل على أفضل العروض على الرحلات الجوية.',
            category: 'وسائل النقل',
            image: PlaceHolderImages.find(p => p.id === 'hero-1'),
          },
          {
            title: 'حجز تذكرة قطار',
            description: 'سافر بالسكك الحديدية بسهولة.',
            category: 'وسائل النقل',
            image: PlaceHolderImages.find(p => p.id === 'service-transport'),
          },
          {
            title: 'خدمات الأنشطة',
            description: 'احجز جولات وأنشطة مثيرة.',
            category: 'جولات',
            image: PlaceHolderImages.find(p => p.id === 'service-group-tours'),
          },
          {
            title: 'خدمة الطعام الحلال',
            description: 'استمتع بوجبات حلال لذيذة.',
            category: 'تخصص',
            image: PlaceHolderImages.find(p => p.id === 'service-halal'),
          },
        ]
    },
    cn: {
        pageTitle: '我们的服务',
        pageDescription: '探索我们广泛的旅行解决方案，旨在让您的旅程难以忘怀。',
        backToHome: '返回首页',
        services: [
          {
            title: '预订住宿',
            description: '寻找完美的住宿地点。',
            category: '住宿',
            image: PlaceHolderImages.find(p => p.id === 'service-lodging'),
          },
          {
            title: '导游车辆',
            description: '乘坐私人车辆探索。',
            category: '运输',
            image: PlaceHolderImages.find(p => p.id === 'service-guides'),
          },
          {
            title: '预订机票',
            description: '获取最优惠的航班信息。',
            category: '运输',
            image: PlaceHolderImages.find(p => p.id === 'hero-1'),
          },
          {
            title: '预订火车票',
            description: '轻松搭乘铁路旅行。',
            category: '运输',
            image: PlaceHolderImages.find(p => p.id === 'service-transport'),
          },
          {
            title: '活动服务',
            description: '预订精彩的旅游和活动。',
            category: '旅游',
            image: PlaceHolderImages.find(p => p.id === 'service-group-tours'),
          },
          {
            title: '清真食品服务',
            description: '享用美味的清真餐点。',
            category: '特色',
            image: PlaceHolderImages.find(p => p.id === 'service-halal'),
          },
        ]
    }
}


export default function ServicesPage() {
  const { lang } = useLang();
  const content = servicesContent[lang] || servicesContent.en;

  return (
    <div className="container py-12">
      <Button asChild variant="ghost" className="mb-8">
        <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {content.backToHome}
        </Link>
      </Button>
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">{content.pageTitle}</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          {content.pageDescription}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {content.services.map((service) => (
          <Card key={service.title} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
            {service.image && (
              <div className="relative h-48 w-full">
                <Image
                  src={service.image.imageUrl}
                  alt={service.image.description}
                  fill
                  className="object-cover"
                  data-ai-hint={service.image.imageHint}
                />
              </div>
            )}
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                <Badge variant="secondary">{service.category}</Badge>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
