
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Map,
  Users,
  Plane,
  ShieldCheck,
  HeartHandshake,
  Shield,
  Eye,
  Globe,
  Star,
  Mail,
  Phone,
  BedDouble,
  Car,
  Ticket,
  Train,
  Activity,
  UtensilsCrossed,
  Award,
  Menu,
  MessageSquare,
  MessageCircle,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useLang } from '@/context/LangContext';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';


const servicesData = {
  en: [
    {
      icon: <BedDouble className="w-7 h-7 text-white" />,
      title: 'Book accommodation',
      description: 'Find the perfect place to stay.',
      color: 'from-teal-500 to-teal-600 shadow-teal-500/20',
    },
    {
      icon: <Car className="w-7 h-7 text-white" />,
      title: 'Tour guide vehicle',
      description: 'Explore with a private vehicle.',
      color: 'from-amber-500 to-orange-500 shadow-amber-500/20',
    },
    {
      icon: <Plane className="w-7 h-7 text-white" />,
      title: 'Book a flight ticket',
      description: 'Get the best deals on flights.',
      color: 'from-blue-500 to-blue-600 shadow-blue-500/20',
    },
    {
      icon: <Train className="w-7 h-7 text-white" />,
      title: 'Book a train ticket',
      description: 'Travel by rail with ease.',
      color: 'from-purple-500 to-purple-600 shadow-purple-500/20',
    },
    {
      icon: <Activity className="w-7 h-7 text-white" />,
      title: 'Activity services',
      description: 'Book exciting tours and activities.',
      color: 'from-pink-500 to-pink-600 shadow-pink-500/20',
    },
    {
      icon: <UtensilsCrossed className="w-7 h-7 text-white" />,
      title: 'Halal food service',
      description: 'Enjoy delicious Halal meals.',
      color: 'from-green-500 to-green-600 shadow-green-500/20',
    },
  ],
  th: [
    {
      icon: <BedDouble className="w-7 h-7 text-white" />,
      title: 'จองที่พัก',
      description: 'ค้นหาที่พักที่สมบูรณ์แบบ',
      color: 'from-teal-500 to-teal-600 shadow-teal-500/20',
    },
    {
      icon: <Car className="w-7 h-7 text-white" />,
      title: 'รถนำเที่ยว',
      description: 'ท่องเที่ยวไปกับรถส่วนตัว',
      color: 'from-amber-500 to-orange-500 shadow-amber-500/20',
    },
    {
      icon: <Plane className="w-7 h-7 text-white" />,
      title: 'จองตั๋วเครื่องบิน',
      description: 'รับข้อเสนอที่ดีที่สุดสำหรับเที่ยวบิน',
      color: 'from-blue-500 to-blue-600 shadow-blue-500/20',
    },
    {
      icon: <Train className="w-7 h-7 text-white" />,
      title: 'จองตั๋วรถไฟ',
      description: 'เดินทางโดยรถไฟอย่างง่ายดาย',
      color: 'from-purple-500 to-purple-600 shadow-purple-500/20',
    },
    {
      icon: <Activity className="w-7 h-7 text-white" />,
      title: 'บริการกิจกรรม',
      description: 'จองทัวร์และกิจกรรมที่น่าตื่นเต้น',
      color: 'from-pink-500 to-pink-600 shadow-pink-500/20',
    },
    {
      icon: <UtensilsCrossed className="w-7 h-7 text-white" />,
      title: 'บริการอาหารฮาลาล',
      description: 'เพลิดเพลินกับอาหารฮาลาลแสนอร่อย',
      color: 'from-green-500 to-green-600 shadow-green-500/20',
    },
  ],
  ar: [
      {
        icon: <BedDouble className="w-7 h-7 text-white" />,
        title: 'حجز إقامة',
        description: 'ابحث عن المكان المثالي للإقامة.',
        color: 'from-teal-500 to-teal-600 shadow-teal-500/20',
      },
      {
        icon: <Car className="w-7 h-7 text-white" />,
        title: 'سيارة مرشد سياحي',
        description: 'استكشف بمركبة خاصة.',
        color: 'from-amber-500 to-orange-500 shadow-amber-500/20',
      },
      {
        icon: <Plane className="w-7 h-7 text-white" />,
        title: 'حجز تذكرة طيران',
        description: 'احصل على أفضل العروض على الرحلات الجوية.',
        color: 'from-blue-500 to-blue-600 shadow-blue-500/20',
      },
      {
        icon: <Train className="w-7 h-7 text-white" />,
        title: 'حجز تذكرة قطار',
        description: 'سافر بالسكك الحديدية بسهولة.',
        color: 'from-purple-500 to-purple-600 shadow-purple-500/20',
      },
      {
        icon: <Activity className="w-7 h-7 text-white" />,
        title: 'خدمات الأنشطة',
        description: 'احجز جولات وأنشطة مثيرة.',
        color: 'from-pink-500 to-pink-600 shadow-pink-500/20',
      },
      {
        icon: <UtensilsCrossed className="w-7 h-7 text-white" />,
        title: 'خدمة الطعام الحلال',
        description: 'استمتع بوجبات حلال لذيذة.',
        color: 'from-green-500 to-green-600 shadow-green-500/20',
      },
  ]
};

const strengthsData = {
    en: [
        { number: '01', title: '10+ Years of Excellence', description: 'A decade of creating unforgettable travel experiences with thousands of happy customers.' },
        { number: '02', title: '24/7 Customer Support', description: 'Round-the-clock assistance whenever you need us, wherever you are.' },
        { number: '03', title: 'Best Price Guarantee', description: 'Competitive pricing with no hidden fees - transparency in every booking.' },
        { number: '04', title: 'Local Expertise', description: 'Deep connections with local partners for authentic, off-the-beaten-path experiences.' },
        { number: '05', title: 'Flexible Bookings', description: 'Easy modifications and cancellations with our traveler-friendly policies.' },
    ],
    th: [
        { number: '01', title: '10+ ปีแห่งความเป็นเลิศ', description: 'ทศวรรษแห่งการสร้างสรรค์ประสบการณ์การเดินทางที่น่าจดจำกับลูกค้าที่มีความสุขนับพัน' },
        { number: '02', title: 'บริการลูกค้า 24/7', description: 'ความช่วยเหลือตลอดเวลาเมื่อคุณต้องการเรา ไม่ว่าคุณจะอยู่ที่ไหน' },
        { number: '03', title: 'รับประกันราคาดีที่สุด', description: 'ราคาที่แข่งขันได้โดยไม่มีค่าธรรมเนียมแอบแฝง - ความโปร่งใสในทุกการจอง' },
        { number: '04', title: 'ความเชี่ยวชาญในท้องถิ่น', description: 'ความสัมพันธ์ที่ลึกซึ้งกับพันธมิตรในท้องถิ่นเพื่อประสบการณ์ที่แท้จริงและไม่เหมือนใคร' },
        { number: '05', title: 'การจองที่ยืดหยุ่น', description: 'การแก้ไขและยกเลิกที่ง่ายดายด้วยนโยบายที่เป็นมิตรกับนักเดินทางของเรา' },
    ],
    ar: [
        { number: '01', title: '10+ سنوات من التميز', description: 'عقد من خلق تجارب سفر لا تنسى مع آلاف العملاء السعداء.' },
        { number: '02', title: 'دعم العملاء 24/7', description: 'مساعدة على مدار الساعة كلما احتجت إلينا ، أينما كنت.' },
        { number: '03', title: 'ضمان أفضل سعر', description: 'أسعار تنافسية بدون رسوم خفية - الشفافية في كل حجز.' },
        { number: '04', title: 'الخبرة المحلية', description: 'علاقات عميقة مع الشركاء المحليين لتجارب أصيلة بعيدة عن المسار المطروق.' },
        { number: '05', title: 'حجوزات مرنة', description: 'تعديلات وإلغاءات سهلة مع سياساتنا الصديقة للمسافرين.' },
    ],
};

const pageContentData = {
    en: {
        navAbout: 'About Us',
        navVision: 'Vision',
        navTourPackages: 'Tour Packages',
        navOurServices: 'Our Services',
        navWhyChooseUs: 'Why Choose Us',
        navContactUs: 'Contact Us',
        navFollowUs: 'Follow Us',
        heroSubTitle: 'Lao Hug Travel',
        heroTitle: 'BEST CHOICE HALAL SERVICE',
        heroTagline: '"The Mark of Muslim-Friendly Excellence"',
        aboutTitle: 'About Lao Hug Travel',
        aboutText: 'Lao Hug Travel is your trusted partner for unforgettable journeys in Laos. We specialize in crafting personalized travel experiences, with a special focus on Halal-friendly services. Our local expertise and commitment to quality ensure you a seamless and authentic adventure.',
        visionPurpose: 'Our Purpose',
        visionTitle: 'Our Vision',
        visionText: '"Exploring Laos is not just about seeing beautiful sights; it\'s about creating unforgettable memories that last a lifetime, connecting with locals, and immersing yourself in rich cultural experiences in the Halal Way."',
        servicesSubtitle: 'What We Do',
        servicesTitle: 'Our Services',
        servicesText: 'Comprehensive travel solutions tailored to your dreams',
        halalSubtitle: 'Specialty Tours',
        halalTitle: 'Our Halal Tour Packages',
        halalText: 'Travel with peace of mind. Our Halal tour packages are designed to cater to your needs, including Halal-certified meals, prayer facilities, and Muslim-friendly accommodations.',
        halalPoint1: 'Certified Halal restaurants and caterers.',
        halalPoint2: 'Prayer times and facilities provided.',
        halalPoint3: 'Female-only guides available upon request.',
        seeAllPackages: 'See All Packages',
        whyChooseUsSubtitle: 'Our Promise',
        whyChooseUsTitle: 'Why Choose Us',
        whyChooseUsText: 'Experience the difference with our commitment to excellence',
        contactTitle: 'Contact Us',
        contactText: 'Have questions? We\'d love to hear from you.',
        contactPhoneTitle: 'Phone',
        contactWhatsAppTitle: 'WhatsApp',
        contactEmailTitle: 'Email',
        contactLineTitle: 'Line',
        followTitle: 'Follow Us',
        followText: 'Lao Hug Travel',
    },
    th: {
        navAbout: 'เกี่ยวกับเรา',
        navVision: 'วิสัยทัศน์',
        navTourPackages: 'แพ็คเกจทัวร์',
        navOurServices: 'บริการของเรา',
        navWhyChooseUs: 'ทำไมถึงเลือกเรา',
        navContactUs: 'ติดต่อเรา',
        navFollowUs: 'ติดตามเรา',
        heroSubTitle: 'ลาวฮัก ทราเวล',
        heroTitle: 'บริการฮาลาล ทางเลือกที่ดีที่สุด',
        heroTagline: '"เครื่องหมายแห่งความเป็นเลิศที่เป็นมิตรต่อชาวมุสลิม"',
        aboutTitle: 'เกี่ยวกับ ลาวฮัก ทราเวล',
        aboutText: 'ลาวฮัก ทราเวล คือคู่หูที่เชื่อถือได้ของคุณสำหรับการเดินทางที่น่าจดจำในลาว เราเชี่ยวชาญในการสร้างสรรค์ประสบการณ์การเดินทางส่วนบุคคล โดยให้ความสำคัญเป็นพิเศษกับบริการที่เป็นมิตรกับฮาลาล ความเชี่ยวชาญในท้องถิ่นและความมุ่งมั่นในคุณภาพของเรารับประกันว่าคุณจะได้รับการผจญภัยที่ราบรื่นและเป็นของแท้',
        visionPurpose: 'วัตถุประสงค์ของเรา',
        visionTitle: 'วิสัยทัศน์ของเรา',
        visionText: '"การสำรวจลาวไม่ใช่แค่การได้เห็นสถานที่สวยงามเท่านั้น แต่ยังเกี่ยวกับการสร้างความทรงจำอันน่าจดจำไปตลอดชีวิต การเชื่อมต่อกับคนในท้องถิ่น และการดื่มด่ำกับประสบการณ์ทางวัฒนธรรมอันยาวนานในแนวทางฮาลาล"',
        servicesSubtitle: 'สิ่งที่เราทำ',
        servicesTitle: 'บริการของเรา',
        servicesText: 'โซลูชั่นการเดินทางที่ครอบคลุมซึ่งปรับให้เหมาะกับความฝันของคุณ',
        halalSubtitle: 'ทัวร์พิเศษ',
        halalTitle: 'แพ็คเกจทัวร์ฮาลาลของเรา',
        halalText: 'เดินทางอย่างสบายใจ แพ็คเกจทัวร์ฮาลาลของเราออกแบบมาเพื่อตอบสนองความต้องการของคุณ รวมถึงอาหารที่ได้รับการรับรองฮาลาล สถานที่ละหมาด และที่พักที่เป็นมิตรต่อชาวมุสลิม',
        halalPoint1: 'ร้านอาหารและผู้จัดเลี้ยงที่ได้รับการรับรองฮาลาล',
        halalPoint2: 'มีเวลาและสถานที่ละหมาดให้',
        halalPoint3: 'มีไกด์หญิงให้บริการตามคำขอ',
        seeAllPackages: 'ดูแพ็คเกจทั้งหมด',
        whyChooseUsSubtitle: 'คำสัญญาของเรา',
        whyChooseUsTitle: 'ทำไมถึงเลือกเรา',
        whyChooseUsText: 'สัมผัสความแตกต่างด้วยความมุ่งมั่นสู่ความเป็นเลิศของเรา',
        contactTitle: 'ติดต่อเรา',
        contactText: 'มีคำถาม? เรายินดีรับฟังจากคุณ',
        contactPhoneTitle: 'โทรศัพท์',
        contactWhatsAppTitle: 'WhatsApp',
        contactEmailTitle: 'อีเมล',
        contactLineTitle: 'ไลน์',
        followTitle: 'ติดตามเรา',
        followText: 'ลาวฮัก ทราเวล',
    },
    ar: {
        navAbout: 'من نحن',
        navVision: 'رؤيتنا',
        navTourPackages: 'باقات الجولات',
        navOurServices: 'خدماتنا',
        navWhyChooseUs: 'لماذا تختارنا',
        navContactUs: 'اتصل بنا',
        navFollowUs: 'تابعنا',
        heroSubTitle: 'لاو هاغ ترافيل',
        heroTitle: 'أفضل خيار للخدمات الحلال',
        heroTagline: '"علامة التميز الصديقة للمسلمين"',
        aboutTitle: 'حول لاو هاغ ترافيل',
        aboutText: 'لاو هاغ ترافيل هي شريكك الموثوق به لرحلات لا تنسى في لاوس. نحن متخصصون في صياغة تجارب سفر شخصية ، مع التركيز بشكل خاص على الخدمات الصديقة للحلال. تضمن خبرتنا المحلية والتزامنا بالجودة مغامرة سلسة وأصيلة.',
        visionPurpose: 'هدفنا',
        visionTitle: 'رؤيتنا',
        visionText: '"استكشاف لاوس لا يقتصر فقط على رؤية المعالم الجميلة ؛ إنه يتعلق بخلق ذكريات لا تُنسى تدوم مدى الحياة ، والتواصل مع السكان المحليين ، والانغماس في التجارب الثقافية الغنية بالطريقة الحلال."',
        servicesSubtitle: 'ماذا نفعل',
        servicesTitle: 'خدماتنا',
        servicesText: 'حلول سفر شاملة مصممة خصيصًا لأحلامك',
        halalSubtitle: 'جولات متخصصة',
        halalTitle: 'باقاتنا السياحية الحلال',
        halalText: 'سافر براحة بال. تم تصميم باقاتنا السياحية الحلال لتلبية احتياجاتك ، بما في ذلك وجبات الطعام الحلال المعتمدة ، ومرافق الصلاة ، وأماكن الإقامة الصديقة للمسلمين.',
        halalPoint1: 'مطاعم ومقدمو خدمات معتمدون من الحلال.',
        halalPoint2: 'توفير أوقات ومرافق الصلاة.',
        halalPoint3: 'مرشدات إناث متاحات عند الطلب.',
        seeAllPackages: 'عرض كل الباقات',
        whyChooseUsSubtitle: 'وعدنا',
        whyChooseUsTitle: 'لماذا تختارنا',
        whyChooseUsText: 'جرب الفرق مع التزامنا بالتميز',
        contactTitle: 'اتصل بنا',
        contactText: 'هل لديك أسئلة؟ نود أن نسمع منك.',
        contactPhoneTitle: 'هاتف',
        contactWhatsAppTitle: 'واتساب',
        contactEmailTitle: 'بريد إلكتروني',
        contactLineTitle: 'لاين',
        followTitle: 'تابعنا',
        followText: 'لاو هاغ ترافيل',
    },
};


const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </svg>
);

const socialLinks = [
    { name: 'Facebook', icon: <Facebook className="w-6 h-6" />, href: 'https://facebook.com/LaoHugTravel' },
    { name: 'TikTok', icon: <TikTokIcon className="w-6 h-6" />, href: 'https://tiktok.com/@laohugtravel' },
    { name: 'Instagram', icon: <Instagram className="w-6 h-6" />, href: 'https://instagram.com/laohugtravel' },
    { name: 'Youtube', icon: <Youtube className="w-6 h-6" />, href: 'https://youtube.com/@LaoHugTravel' },
    { name: 'X', icon: <Twitter className="w-6 h-6" />, href: 'https://x.com/laohugtravel' },
];


export default function Home() {
  const { lang, setLang } = useLang();
  const halalTourImage = PlaceHolderImages.find(p => p.id === "service-halal");
  const chefImage = PlaceHolderImages.find((p) => p.id === 'gmhi-chef');
  const hotelImage = PlaceHolderImages.find((p) => p.id === 'gmhi-hotel');
  const buildingImage = PlaceHolderImages.find((p) => p.id === 'gmhi-building');
  const corridorImage = PlaceHolderImages.find((p) => p.id === 'gmhi-corridor');
  const [open, setOpen] = useState(false);


  const services = servicesData[lang] || servicesData.en;
  const strengths = strengthsData[lang] || strengthsData.en;
  const pageContent = pageContentData[lang] || pageContentData.en;
  
  const navLinks = [
    { href: '#about', label: pageContent.navAbout },
    { href: '#vision', label: pageContent.navVision },
    { href: '#halal-package', label: pageContent.navTourPackages },
    { href: '#what-we-do', label: pageContent.navOurServices },
    { href: '#why-choose-us', label: pageContent.navWhyChooseUs },
    { href: '#contact-us', label: pageContent.navContactUs },
    { href: '#follow-us', label: pageContent.navFollowUs },
  ];

  return (
    <div className="bg-background text-foreground">
       <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="fixed top-4 right-4 z-50 bg-background/80 backdrop-blur-sm rounded-full shadow-lg md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
            </Button>
        </SheetTrigger>
        <SheetContent side="right">
            <nav className="flex flex-col gap-6 pt-10">
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className="text-lg font-medium transition-colors hover:text-primary"
                        onClick={() => setOpen(false)}
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>
        </SheetContent>
      </Sheet>
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="flex flex-col text-left">
                    <h1 className="text-5xl md:text-8xl font-bold font-headline tracking-tighter text-white mb-4">
                        LHT
                    </h1>
                    <p className="text-lg md:text-xl font-light text-primary-foreground/90">
                      {pageContent.heroSubTitle}
                    </p>
                    <div className="w-24 h-1 bg-accent my-6"></div>
                    <h2 className="text-xl md:text-3xl font-semibold font-headline text-white">
                      {pageContent.heroTitle}
                    </h2>
                    <p className="mt-4 text-lg font-light italic text-primary-foreground/80">
                      {pageContent.heroTagline}
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    {chefImage && <div className="col-span-2 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                    <Image
                        src={chefImage.imageUrl}
                        alt={chefImage.description}
                        width={500}
                        height={250}
                        className="object-cover w-full h-full"
                        data-ai-hint={chefImage.imageHint}
                    />
                    </div>}
                    {hotelImage && <div className="rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                        <Image
                        src={hotelImage.imageUrl}
                        alt={hotelImage.description}
                        width={250}
                        height={250}
                        className="object-cover w-full h-full aspect-square"
                        data-ai-hint={hotelImage.imageHint}
                    />
                    </div>}
                    {buildingImage && <div className="rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                    <Image
                        src={buildingImage.imageUrl}
                        alt={buildingImage.description}
                        width={250}
                        height={250}
                        className="object-cover w-full h-full aspect-square"
                        data-ai-hint={buildingImage.imageHint}
                    />
                    </div>}
                </div>
            </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl font-bold mb-3">{pageContent.aboutTitle}</h2>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto text-lg leading-relaxed">
              {pageContent.aboutText}
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent-foreground text-sm font-medium rounded-full mb-4">
              {pageContent.visionPurpose}
            </span>
            <h2 id="vision-title" className="font-headline text-4xl font-bold mb-6">{pageContent.visionTitle}</h2>
            <div className="relative bg-card rounded-2xl p-8 shadow-lg shadow-black/5 border border-border/50 max-w-2xl mx-auto text-card-foreground">
               <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-card p-2 rounded-full border">
                <Star className="w-6 h-6 text-accent" />
              </div>
              <p id="vision-text" className="text-muted-foreground text-lg leading-relaxed italic">{pageContent.visionText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="what-we-do" className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary-foreground/10 text-primary-foreground text-sm font-medium rounded-full mb-4">
              {pageContent.servicesSubtitle}
            </span>
            <h2 className="font-headline text-4xl font-bold mb-3">{pageContent.servicesTitle}</h2>
            <p className="text-primary-foreground/90 max-w-lg mx-auto">{pageContent.servicesText}</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.title} className="bg-card text-card-foreground border hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
                <CardContent className="flex flex-col items-center justify-center text-center p-6 gap-4">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    {service.icon}
                  </div>
                  <h3 className="font-headline text-xl font-semibold h-12 flex items-center">{service.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Halal Tour Package Section */}
      <section id="halal-package" className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
                <span className="inline-block px-4 py-1.5 bg-emerald-500/10 text-emerald-300 text-sm font-medium rounded-full mb-4">
                    {pageContent.halalSubtitle}
                </span>
                <h2 className="font-headline text-4xl font-bold mb-4">{pageContent.halalTitle}</h2>
                <p className="text-primary-foreground/90 text-lg mb-6">
                    {pageContent.halalText}
                </p>
                <ul className="space-y-3 text-left mb-8">
                    <li className="flex items-center gap-3">
                        <ShieldCheck className="w-5 h-5 text-accent" />
                        <span>{pageContent.halalPoint1}</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <ShieldCheck className="w-5 h-5 text-accent" />
                        <span>{pageContent.halalPoint2}</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <ShieldCheck className="w-5 h-5 text-accent" />
                        <span>{pageContent.halalPoint3}</span>
                    </li>
                </ul>
                 <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <Button asChild size="lg" variant="secondary">
                        <Link href="/packages">{pageContent.seeAllPackages}</Link>
                    </Button>
                </div>
            </div>
            <div>
                {halalTourImage && (
                    <Image
                        src={halalTourImage.imageUrl}
                        alt={halalTourImage.description}
                        width={600}
                        height={600}
                        className="rounded-2xl shadow-xl object-cover aspect-square"
                        data-ai-hint={halalTourImage.imageHint}
                    />
                )}
            </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-20 px-4 bg-primary text-primary-foreground">
         <div className="max-w-2xl mx-auto">
             <div className="text-center mb-12">
                <span className="inline-block px-4 py-1.5 bg-primary-foreground/10 text-primary-foreground text-sm font-medium rounded-full mb-4">{pageContent.whyChooseUsSubtitle}</span>
                <h2 className="font-headline text-4xl font-bold mb-3">{pageContent.whyChooseUsTitle}</h2>
                <p className="text-primary-foreground/90">{pageContent.whyChooseUsText}</p>
             </div>
             <div className="space-y-6">
                {strengths.map((strength, index) => (
                    <div key={strength.number} className={`flex items-start gap-4 p-4 rounded-xl bg-background/50 border-l-4 ${index === 0 ? 'border-primary' : index === 1 ? 'border-accent' : index === 2 ? 'border-blue-500' : index === 3 ? 'border-purple-500' : 'border-emerald-500'}`}>
                        <span className="strength-number font-headline text-4xl font-bold">{strength.number}</span>
                        <div>
                            <h3 className="font-headline font-semibold text-foreground mb-1 text-lg">{strength.title}</h3>
                            <p className="text-muted-foreground text-sm">{strength.description}</p>
                        </div>
                    </div>
                ))}
             </div>
         </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact-us" className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl font-bold mb-3">{pageContent.contactTitle}</h2>
            <p className="text-primary-foreground/90 max-w-lg mx-auto">{pageContent.contactText}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <a href="tel:+66622244315" className="flex flex-col items-center text-center gap-3 p-4 rounded-lg hover:bg-primary-foreground/10 transition-colors">
                <div className="w-16 h-16 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                    <Phone className="w-8 h-8 text-accent" />
                </div>
                <div>
                    <h3 className="font-headline text-xl font-semibold text-primary-foreground">{pageContent.contactPhoneTitle}</h3>
                    <p className="text-primary-foreground/80 text-sm break-all">+66 62 224 4315</p>
                </div>
            </a>

            <a href="https://wa.me/8562096142645" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-center gap-3 p-4 rounded-lg hover:bg-primary-foreground/10 transition-colors">
                <div className="w-16 h-16 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                    <MessageCircle className="w-8 h-8 text-accent" />
                </div>
                <div>
                    <h3 className="font-headline text-xl font-semibold text-primary-foreground">{pageContent.contactWhatsAppTitle}</h3>
                    <p className="text-primary-foreground/80 text-sm break-all">+85620 96142645</p>
                </div>
            </a>

            <a href="mailto:Laohugtravel@gmail.com" className="flex flex-col items-center text-center gap-3 p-4 rounded-lg hover:bg-primary-foreground/10 transition-colors">
                 <div className="w-16 h-16 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                    <Mail className="w-8 h-8 text-accent" />
                </div>
                <div>
                    <h3 className="font-headline text-xl font-semibold text-primary-foreground">{pageContent.contactEmailTitle}</h3>
                    <p className="text-primary-foreground/80 text-sm break-all">Laohugtravel@gmail.com</p>
                </div>
            </a>

            <a href="http://line.me/ti/p/~Laohugtravel" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-center gap-3 p-4 rounded-lg hover:bg-primary-foreground/10 transition-colors">
                <div className="w-16 h-16 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                    <MessageSquare className="w-8 h-8 text-accent" />
                </div>
                <div>
                    <h3 className="font-headline text-xl font-semibold text-primary-foreground">{pageContent.contactLineTitle}</h3>
                    <p className="text-primary-foreground/80 text-sm break-all">Laohugtravel</p>
                </div>
            </a>
          </div>
        </div>
      </section>

      {/* Follow Us Section */}
      <section id="follow-us" className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-headline text-4xl font-bold mb-12">
            {pageContent.followTitle}
          </h2>
          <div className="grid grid-cols-5 gap-4 place-items-center">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors"
              >
                {social.icon}
                <span className="font-medium text-xs">{pageContent.followText}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
