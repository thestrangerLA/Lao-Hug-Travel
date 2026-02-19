
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Plane,
  Globe,
  Mail,
  Phone,
  BedDouble,
  Car,
  Train,
  Activity,
  UtensilsCrossed,
  Menu,
  MessageSquare,
  MessageCircle,
  Facebook,
  Instagram,
  X,
  Youtube,
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useLang } from '@/context/LangContext';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { allPackagesData, packagesContentData } from '@/lib/packages-data';

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
      color: 'from-green-500 to-green-600 shadow-green-600/20',
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
      color: 'from-green-500 to-green-600 shadow-green-600/20',
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
        color: 'from-green-500 to-green-600 shadow-green-600/20',
      },
  ],
  cn: [
    {
      icon: <BedDouble className="w-7 h-7 text-white" />,
      title: '预订住宿',
      description: '寻找完美的住宿地点。',
      color: 'from-teal-500 to-teal-600 shadow-teal-500/20',
    },
    {
      icon: <Car className="w-7 h-7 text-white" />,
      title: '导游车辆',
      description: '乘坐私人车辆探索。',
      color: 'from-amber-500 to-orange-500 shadow-amber-500/20',
    },
    {
      icon: <Plane className="w-7 h-7 text-white" />,
      title: '预订机票',
      description: '获取最优惠的航班信息。',
      color: 'from-blue-500 to-blue-600 shadow-blue-500/20',
    },
    {
      icon: <Train className="w-7 h-7 text-white" />,
      title: '预订火车票',
      description: '轻松搭乘铁路旅行。',
      color: 'from-purple-500 to-purple-600 shadow-purple-500/20',
    },
    {
      icon: <Activity className="w-7 h-7 text-white" />,
      title: '活动服务',
      description: '预订精彩的旅游和活动。',
      color: 'from-pink-500 to-pink-600 shadow-pink-500/20',
    },
    {
      icon: <UtensilsCrossed className="w-7 h-7 text-white" />,
      title: '清真食品服务',
      description: '享用美味的清真餐点。',
      color: 'from-green-500 to-green-600 shadow-green-600/20',
    },
  ]
};

const strengthsData = {
    en: [
        { number: '01', title: 'Muslim Team Who Understands Your Needs', description: 'We are managed by a Muslim team that truly understands Halal tourism.' },
        { number: '02', title: 'Comprehensive Halal Services', description: 'We organize trips that include Halal food, Halal accommodations, and activities suitable for Muslims.' },
        { number: '03', title: 'Authentic Local Experience', description: 'We are experts in Laos, with local knowledge and networks to let you experience the true culture.' },
        { number: '04', title: 'Customizable Tour Packages', description: 'Design your trip according to your needs, including duration, budget, and travel style.' },
        { number: '05', title: 'Safety and Comfort', description: 'We take care of all travel and booking arrangements, allowing you to travel with peace of mind.' },
        { number: '06', title: 'Professional CustomerService', description: 'We answer questions and provide advice promptly, with care throughout your journey.' }
    ],
    th: [
        { number: '01', title: 'ทีมงานมุสลิมที่เข้าใจความต้องการ', description: 'เราดูแลโดยทีมงานมุสลิมที่เข้าใจการท่องเที่ยวแบบฮาลาลอย่างแท้จริง' },
        { number: '02', title: 'บริการฮาลาลครบวงจร', description: 'จัดทริปที่รวมอาหารฮาลาล, ที่พักฮาลาล และกิจกรรมที่เหมาะสมกับชาวมุสลิม' },
        { number: '03', title: 'ประสบการณ์ท้องถิ่นแท้จริง', description: 'เราคือผู้เชี่ยวชาญในลาว มีความรู้และเครือข่ายท้องถิ่นเพื่อให้คุณได้สัมผัสวัฒนธรรมอย่างแท้จริง' },
        { number: '04', title: 'แพ็กเกจท่องเที่ยวที่ปรับได้ตามต้องการ', description: 'ออกแบบทริปตามความต้องการของคุณ ทั้งระยะเวลา งบประมาณ และสไตล์การเดินทาง' },
        { number: '05', title: 'ความปลอดภัยและความสะดวกสบาย', description: 'ดูแลเรื่องการเดินทางและการจองให้ครบถ้วน ให้คุณเดินทางอย่างสบายใจ' },
        { number: '06', title: 'บริการลูกค้าระดับมืออาชีพ', description: 'ตอบคำถามและให้คำแนะนำอย่างรวดเร็ว พร้อมดูแลตลอดการเดินทาง' }
    ],
    ar: [
        { number: '01', title: 'فريق مسلم يفهم احتياجاتك', description: 'يديرنا فريق مسلم يفهم السياحة الحلال بشكل حقيقي.' },
        { number: '02', title: 'خدمات حلال متكاملة', description: 'ننظم رحلات تشمل طعام حلال، إقامة حلال، وأنشطة مناسبة للمسلمين.' },
        { number: '03', title: 'تجربة محلية أصيلة', description: 'نحن خبراء في لاوس، مع معرفة وشبكات محلية تتيح لك تجربة الثقافة الحقيقية.' },
        { number: '04', title: 'باقات سياحية قابلة للتخصيص', description: 'صمم رحلتك وفقًا لاحتياجاتك، بما في ذلك المدة والميزانية وأسلوب السفر.' },
        { number: '05', title: 'السلامة والراحة', description: 'نهتم بجميع ترتيبات السفر والحجز، مما يتيح لك السفر براحة بال.' },
        { number: '06', title: 'خدمة عملاء احترافية', description: 'نجيب على الأسئلة ونقدم المشورة بسرعة، مع الرعاية طوال رحلتك.' }
    ],
    cn: [
        { number: '01', title: '了解您需求的穆斯林团队', description: '我们由一个真正了解清真旅游的穆斯林团队管理。' },
        { number: '02', title: '全面的清真服务', description: '我们组织的旅行包括清真食品、清真住宿和适合穆斯林的活动。' },
        { number: '03', title: '地道的本地体验', description: '我们是老挝的专家，拥有本地知识和网络，让您体验真正的文化。' },
        { number: '04', title: '可定制的旅游套餐', description: '根据您的需求设计您的旅行，包括时间、预算和旅行风格。' },
        { number: '05', title: '安全与舒适', description: '我们负责所有旅行和预订安排，让您安心旅行。' },
        { number: '06', title: '专业的客户服务', description: '我们及时回答问题并提供建议，在您的整个旅程中提供关怀。' }
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
        heroPoweredBy: 'Powered by<br />Salafi Laos<br />Great Humble Group',
        aboutTitle: 'About Lao Hug Travel',
        aboutText: 'Lao Hug Travel is your trusted partner for unforgettable journeys in Laos. We specialize in crafting personalized travel experiences, with a special focus on Halal-friendly services. Our local expertise and commitment to quality ensure you a seamless and authentic adventure.',
        visionTitle: 'Our Vision',
        visionText: '"Exploring Laos is not just about seeing beautiful sights; it\'s about creating unforgettable memories that last a lifetime, connecting with locals, and immersing yourself in rich cultural experiences in the Halal Way."',
        servicesTitle: 'Our Services',
        halalTitle: 'Our Halal Tour Packages',
        halalText: 'Travel with peace of mind. Our Halal tour packages are designed to cater to your needs, including Halal-certified meals, prayer facilities, and Muslim-friendly accommodations.',
        seeAllPackages: 'See All Packages',
        whyChooseUsTitle: 'Why Choose Us',
        contactTitle: 'Contact Us',
        contactText: 'Have questions? We\'d love to hear from you.',
        contactPhoneTitle: 'Phone',
        contactWhatsAppTitle: 'WhatsApp',
        contactEmailTitle: 'Email',
        contactLineTitle: 'Line',
        followTitle: 'Follow Us',
        followText: 'Lao Hug Travel',
        scanLine: 'Scan to add us on Line',
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
        heroPoweredBy: 'สนับสนุนโดย<br />Salafi Laos<br />Great Humble Group',
        aboutTitle: 'เกี่ยวกับ ลาวฮัก ทราเวล',
        aboutText: 'ลาวฮัก ทราเวล คือคู่หูที่เชื่อถือได้ของคุณสำหรับการเดินทางที่น่าจดจำในลาว เราเชี่ยวชาญในการสร้างสรรค์ประสบการณ์การเดินทางส่วนบุคคล โดยให้ความสำคัญเป็นพิเศษกับบริการที่เป็นมิตรกับฮาลาล ความเชี่ยวชาญในท้องถิ่นและความมุ่งมั่นในคุณภาพของเรารับประกันว่าคุณจะได้รับการผจญภัยที่ราบรื่นและเป็นของแท้',
        visionTitle: 'วิสัยทัศน์ของเรา',
        visionText: '"การสำรวจลาวไม่ใช่แค่การได้เห็นสถานที่สวยงามเท่านั้น แต่ยังเกี่ยวกับการสร้างความทรงจำอันน่าจดจำไปตลอดชีวิต การเชื่อมต่อกับคนในท้องถิ่น และการดื่มด่ำกับประสบการณ์ทางวัฒนธรรมอันยาวนานในแนวทางฮาลาล"',
        servicesTitle: 'บริการของเรา',
        halalTitle: 'แพ็คเกจทัวร์ฮาลาลของเรา',
        halalText: 'เดินทางอย่างสบายใจ แพ็คเกจทัวร์ฮาลาลของเราออกแบบมาเพื่อตอบสนองความต้องการของคุณ รวมถึงอาหารที่ได้รับการรับรองฮาลาล สถานที่ละหมาด และที่พักที่เป็นมิตรต่อชาวมุสลิม',
        seeAllPackages: 'ดูแพ็คเกจทั้งหมด',
        whyChooseUsTitle: 'ทำไมถึงเลือกเรา',
        contactTitle: 'ติดต่อเรา',
        contactText: 'มีคำถาม? เรายินดีรับฟังจากคุณ',
        contactPhoneTitle: 'โทรศัพท์',
        contactWhatsAppTitle: 'WhatsApp',
        contactEmailTitle: 'อีเมล',
        contactLineTitle: 'ไลน์',
        followTitle: 'ติดตามเรา',
        followText: 'ลาวฮัก ทราเวล',
        scanLine: 'สแกนเพื่อเพิ่มเราบนไลน์',
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
        heroPoweredBy: 'بدعم من<br />Salafi Laos<br />Great Humble Group',
        aboutTitle: 'حول لاو هاغ ترافيل',
        aboutText: 'لاو هاغ ترافيل هي شريكك الموثوق به لرحلات لا تنسى في لاوس. نحن متخصصون في صياغة تجارب سفر شخصية ، مع التركيز بشكل خاص على الخدمات الصديقة للحلال. تضمن خبرتنا المحلية والتزامنا بالجودة مغامرة سلسة وأصيلة.',
        visionTitle: 'رؤيتنا',
        visionText: '"استكشاف لاوس لا يقتصر فقط على رؤية المعالم الجميلة ؛ إنه يتعلق بخلق ذكريات لا تُنسى تدوم مدى الحياة ، والتواصل مع السكان المحليين ، والانغماس في التجارب الثقافية الغنية بالطريقة الحلال."',
        servicesTitle: 'خدماتنا',
        halalTitle: 'باقاتنا السياحية الحلال',
        halalText: 'سافر براحة بال. تم تصميم باقاتنا السياحية الحلال لتلبية احتياجاتك ، بما في ذلك وجبات الطعام الحلال المعتمدة ، ومرافق الصلاة ، وأماكن الإقامة الصديقة للمسلمين.',
        seeAllPackages: 'عرض كل الباقات',
        whyChooseUsTitle: 'لماذا تختارنا',
        contactTitle: 'اتصل بنا',
        contactText: 'هل لديك أسئلة؟ نود أن نسمع منك.',
        contactPhoneTitle: 'هاتف',
        contactWhatsAppTitle: 'واتساب',
        contactEmailTitle: 'بريد إلكتروني',
        contactLineTitle: 'لاين',
        followTitle: 'تابعنا',
        followText: 'لاو هاغ ترافيل',
        scanLine: 'امسح ضوئيًا لإضافتنا على Line',
    },
    cn: {
        navAbout: '关于我们',
        navVision: '我们的愿景',
        navTourPackages: '旅游套餐',
        navOurServices: '我们的服务',
        navWhyChooseUs: '为何选择我们',
        navContactUs: '联系我们',
        navFollowUs: '关注我们',
        heroSubTitle: '老挝拥抱旅行',
        heroTitle: '清真服务的最佳选择',
        heroPoweredBy: '由<br />Salafi Laos<br />Great Humble Group提供支持',
        aboutTitle: '关于老挝拥抱旅行',
        aboutText: '老挝拥抱旅行是您在老挝难忘旅程的信赖伙伴。我们专注于打造个性化的旅行体验，特别注重清真友好服务。我们的本地专业知识和对质量的承诺确保您享受无缝、地道的冒险。',
        visionTitle: '我们的愿景',
        visionText: '"探索老挝不仅仅是看美丽的风景；它是创造一生难忘的回忆，与当地人建立联系，并以清真方式沉浸在丰富的文化体验中。"',
        servicesTitle: '我们的服务',
        halalTitle: '我们的清真旅游套餐',
        halalText: '安心旅行。我们的清真旅游套餐旨在满足您的需求，包括经过清真认证的餐点、祈祷设施和穆斯林友好的住宿。',
        seeAllPackages: '查看所有套餐',
        whyChooseUsTitle: '为何选择我们',
        contactTitle: '联系我们',
        contactText: '有任何问题吗？我们很乐意听取您的意见。',
        contactPhoneTitle: '电话',
        contactWhatsAppTitle: 'WhatsApp',
        contactEmailTitle: '电子邮件',
        contactLineTitle: 'Line',
        followTitle: '关注我们',
        followText: '老挝拥抱旅行',
        scanLine: '扫描以在Line上添加我们',
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
    { name: 'Facebook', icon: <Facebook className="w-6 h-6" />, href: 'https://web.facebook.com/profile.php?id=61581202540768' },
    { name: 'TikTok', icon: <TikTokIcon className="w-6 h-6" />, href: 'https://tiktok.com/@laohugtravel' },
    { name: 'Instagram', icon: <Instagram className="w-6 h-6" />, href: 'https://instagram.com/laohugtravel' },
    { name: 'Youtube', icon: <Youtube className="w-6 h-6" />, href: 'https://youtube.com/@LaoHugTravel' },
    { name: 'X', icon: <X className="w-6 h-6" />, href: 'https://x.com/laohugtravel' },
];

export default function Home() {
  const { lang, setLang } = useLang();
  const heroImage = PlaceHolderImages.find((p) => p.id === 'luang-prabang-tour');
  const lineQrImage = PlaceHolderImages.find((p) => p.id === 'line-qr-code');
  const aboutImage = PlaceHolderImages.find((p) => p.id === 'about-us-image');
  const visionImage = PlaceHolderImages.find((p) => p.id === 'vision-image');
  const [open, setOpen] = useState(false);


  const services = servicesData[lang] || servicesData.en;
  const strengths = strengthsData[lang] || strengthsData.en;
  const pageContent = pageContentData[lang] || pageContentData.en;
  const packageContent = packagesContentData[lang] || packagesContentData.en;

  const featuredPackagesIds = ['2', '4', '7'];
  const featuredPackages = allPackagesData
    .filter(pkg => featuredPackagesIds.includes(pkg.id))
    .map(pkg => {
      const image = pkg.images ? (pkg.images[lang] ?? (['ar', 'cn'].includes(lang) ? pkg.images.en : undefined) ?? pkg.images.th ?? pkg.images.default) : undefined;
      return {
        ...pkg,
        ...(pkg.translations[lang] || pkg.translations.en),
        displayImage: image,
      }
    });
  
  const navLinks = [
    { href: '#about', label: pageContent.navAbout },
    { href: '#vision', label: pageContent.navVision },
    { href: '/packages', label: pageContent.navTourPackages },
    { href: '#what-we-do', label: pageContent.navOurServices },
    { href: '#why-choose-us', label: pageContent.navWhyChooseUs },
    { href: '#contact-us', label: pageContent.navContactUs },
    { href: '#follow-us', label: pageContent.navFollowUs },
  ];

  return (
    <div className="bg-background text-foreground">
      <Sheet open={open} onOpenChange={setOpen}>
        <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
          <DropdownMenu>
              <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="bg-background/80 backdrop-blur-sm rounded-full shadow-lg flex items-center gap-1.5 px-3 h-10">
                      <Globe className="h-5 w-5" />
                      <span className="uppercase font-semibold text-sm">{lang}</span>
                  </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setLang('en')}>
                      English
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLang('th')}>
                      ไทย
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLang('ar')}>
                      العربية
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLang('cn')}>
                      中文
                  </DropdownMenuItem>
              </DropdownMenuContent>
          </DropdownMenu>

          <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="bg-background/80 backdrop-blur-sm rounded-full shadow-lg md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
              </Button>
          </SheetTrigger>
        </div>

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
            <div className="absolute bottom-4 left-4 right-4">
                <div className="border-t pt-6">
                    <h3 className="text-sm font-medium text-muted-foreground mb-2 px-4">Language</h3>
                    <Button variant={lang === 'en' ? 'secondary' : 'ghost'} className="w-full justify-start" onClick={() => { setLang('en'); setOpen(false); }}>
                        English
                    </Button>
                    <Button variant={lang === 'th' ? 'secondary' : 'ghost'} className="w-full justify-start" onClick={() => { setLang('th'); setOpen(false); }}>
                        ไทย
                    </Button>
                    <Button variant={lang === 'ar' ? 'secondary' : 'ghost'} className="w-full justify-start" onClick={() => { setLang('ar'); setOpen(false); }}>
                        العربية
                    </Button>
                    <Button variant={lang === 'cn' ? 'secondary' : 'ghost'} className="w-full justify-start" onClick={() => { setLang('cn'); setOpen(false); }}>
                        中文
                    </Button>
                </div>
            </div>
        </SheetContent>
      </Sheet>
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="flex flex-col text-left">
                    <div className="mb-4 flex flex-col items-start mt-[-2rem]">
                      <Image
                        src="https://i.ibb.co/zhgg0FPd/logo.png"
                        alt="Lao Hug Travel Logo"
                        width={100}
                        height={28}
                        className="object-contain"
                        priority
                      />
                    </div>
                    <p className="text-2xl md:text-3xl font-bold text-primary-foreground">
                      {pageContent.heroSubTitle}
                    </p>
                    <div className="w-48 h-1 bg-primary-foreground my-6"></div>
                    <h2 className="text-xl md:text-3xl font-semibold font-headline text-white">
                      {pageContent.heroTitle}
                    </h2>
                    <div className="mt-2 text-lg font-light text-primary-foreground/90" dangerouslySetInnerHTML={{ __html: pageContent.heroPoweredBy }} />
                </div>

                <div className="grid grid-cols-1 gap-4">
                    {heroImage && <div className="rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                    <Image
                        src={heroImage.imageUrl}
                        alt={heroImage.description}
                        width={500}
                        height={400}
                        className="object-cover w-full h-full"
                        data-ai-hint={heroImage.imageHint}
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
          {aboutImage && (
            <div className="mt-12 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                width={896}
                height={597}
                className="object-cover w-full h-full"
                data-ai-hint={aboutImage.imageHint}
              />
            </div>
          )}
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="vision-title" className="font-headline text-4xl font-bold mb-6">{pageContent.visionTitle}</h2>
            <div className="relative bg-card rounded-2xl p-8 shadow-lg shadow-black/5 border border-border/50 max-w-2xl mx-auto text-card-foreground">
              <p id="vision-text" className="text-muted-foreground text-lg leading-relaxed">{pageContent.visionText}</p>
            </div>
          </div>
          {visionImage && (
            <div className="mt-12 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <Image
                src={visionImage.imageUrl}
                alt={visionImage.description}
                width={896}
                height={597}
                className="object-cover w-full h-full"
                data-ai-hint={visionImage.imageHint}
              />
            </div>
          )}
        </div>
      </section>

      {/* Services Section */}
      <section id="what-we-do" className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl font-bold mb-3">{pageContent.servicesTitle}</h2>
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
        <div className="max-w-7xl mx-auto">
            <div className="text-center">
                <h2 className="font-headline text-4xl font-bold mb-4">{pageContent.halalTitle}</h2>
                <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
                    {pageContent.halalText}
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
              {featuredPackages.map((pkg) => {
                const price = lang === 'en' ? pkg.priceUsd : pkg.priceThb;
                const currencySymbol = lang === 'en' ? '$' : '฿';
                return (
                    <Card key={pkg.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full bg-card text-card-foreground">
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
                        <div className="grid grid-cols-2 gap-4 text-center text-xs text-muted-foreground border-b pb-3 mb-3">
                          <div>
                            <p>{packageContent.tourCode}</p>
                            <p className="font-bold text-foreground">{pkg.tourCode}</p>
                          </div>
                          <div>
                            <p>{packageContent.days}</p>
                            <p className="font-bold text-foreground">{pkg.days}</p>
                          </div>
                        </div>

                        <div className="mt-auto text-center">
                          <h3 className="font-bold text-xl mb-4 flex items-center justify-center min-h-[3rem]">{pkg.title}</h3>
                          <div className="flex items-baseline justify-center gap-1 mb-4">
                            <p className="text-xl font-bold text-primary">
                              {currencySymbol}{price}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {packageContent.perPerson}
                            </p>
                          </div>
                          <Button size="sm" className="w-full" asChild>
                              <a href="https://wa.me/66622244315" target="_blank" rel="noopener noreferrer">
                                  <MessageCircle className="mr-2 h-4 w-4" />
                                  {packageContent.bookNow}
                              </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                )
              })}
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg" variant="secondary">
                    <Link href="/packages">{pageContent.seeAllPackages}</Link>
                </Button>
            </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-20 px-4 bg-primary text-primary-foreground">
         <div className="max-w-2xl mx-auto">
             <div className="text-center mb-12">
                <h2 className="font-headline text-4xl font-bold mb-3">{pageContent.whyChooseUsTitle}</h2>
             </div>
             <div className="space-y-6">
                {strengths.map((strength, index) => (
                    <div key={strength.number} className={`flex items-start gap-4 p-4 rounded-xl bg-background/50 border-l-4 ${index === 0 ? 'border-primary' : index === 1 ? 'border-accent' : index === 2 ? 'border-blue-500' : index === 3 ? 'border-purple-500' : 'border-emerald-500'}`}>
                        <span className="font-headline text-4xl font-bold text-black">{strength.number}</span>
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
      <section id="contact-us" className="py-20 px-4 bg-background text-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-headline text-4xl font-bold mb-12 text-primary">{pageContent.contactTitle}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a href="tel:+8562096142645" className="flex flex-col items-center text-center gap-2 p-2 rounded-lg hover:bg-secondary transition-colors">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                    <h3 className="font-headline text-lg font-semibold text-primary">{pageContent.contactPhoneTitle}</h3>
                    <p className="text-primary text-xs break-all">+85620 96142645</p>
                </div>
            </a>

            <div className="flex flex-col items-center text-center gap-2 p-2 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                    <h3 className="font-headline text-lg font-semibold text-primary">{pageContent.contactWhatsAppTitle}</h3>
                    <div className="mt-1 space-y-1">
                      <a href="https://wa.me/66622244315" target="_blank" rel="noopener noreferrer" className="block text-primary text-xs break-all hover:underline">+66 622244315</a>
                      <a href="https://wa.me/8562096142645" target="_blank" rel="noopener noreferrer" className="block text-primary text-xs break-all hover:underline">+85620 96142645</a>
                      <a href="https://wa.me/8562028134181" target="_blank" rel="noopener noreferrer" className="block text-primary text-xs break-all hover:underline">+85620 28134181</a>
                    </div>
                </div>
            </div>

            <a href="mailto:Laohugtravel@gmail.com" className="flex flex-col items-center text-center gap-2 p-2 rounded-lg hover:bg-secondary transition-colors">
                 <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                    <h3 className="font-headline text-lg font-semibold text-primary">{pageContent.contactEmailTitle}</h3>
                    <p className="text-primary text-xs break-all">Laohugtravel@gmail.com</p>
                </div>
            </a>

            <Dialog>
              <DialogTrigger asChild>
                <div className="flex flex-col items-center text-center gap-2 p-2 rounded-lg hover:bg-secondary transition-colors cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                      <h3 className="font-headline text-lg font-semibold text-primary">{pageContent.contactLineTitle}</h3>
                      <p className="text-primary text-xs break-all">Laohugtravel</p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>{pageContent.scanLine}</DialogTitle>
                </DialogHeader>
                {lineQrImage && (
                  <div className="flex justify-center">
                    <Image
                      src={lineQrImage.imageUrl}
                      alt={lineQrImage.description}
                      width={250}
                      height={250}
                      data-ai-hint={lineQrImage.imageHint}
                    />
                  </div>
                )}
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Follow Us Section */}
      <section id="follow-us" className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-headline text-4xl font-bold mb-12 text-primary">
            {pageContent.followTitle}
          </h2>
          <div className="grid grid-cols-5 gap-4 place-items-center">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 text-primary hover:text-accent transition-colors"
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
