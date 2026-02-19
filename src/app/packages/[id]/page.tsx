'use client';

import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useLang } from '@/context/LangContext';
import Link from 'next/link';
import { allPackagesData } from '@/lib/packages-data';

// Note: In a static export, generateStaticParams is required for dynamic routes.
// Even if we are not using this page, it must exist for the build to pass.
export async function generateStaticParams() {
  return allPackagesData.map((pkg) => ({
    id: pkg.id,
  }));
}

export default function PackageDetailPage() {
  const { lang } = useLang();

  const contentData = {
    en: {
        back: 'Back to all packages',
        message: 'This page has been moved. Please contact us via WhatsApp for bookings.',
    },
    th: {
        back: 'กลับไปหน้าแพ็คเกจทั้งหมด',
        message: 'หน้านี้ถูกย้ายแล้ว โปรดติดต่อเราผ่าน WhatsApp เพื่อจองทัวร์',
    },
    ar: {
      back: 'العودة إلى كافة الباقات',
      message: 'تم نقل هذه الصفحة. يرجى الاتصال بنا عبر الواتساب للحجز.',
    },
    cn: {
        back: '返回所有套餐',
        message: '此页面已移动。请通过 WhatsApp 联系我们进行预订。',
    }
  };

  const content = contentData[lang] || contentData.en;

  return (
    <div className="bg-secondary min-h-screen flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center space-y-6">
            <h1 className="text-2xl font-bold text-primary">{content.message}</h1>
            <Button asChild variant="default" size="lg">
                <Link href="/packages">
                    <ArrowLeft className="mr-2 h-4 w-4" /> {content.back}
                </Link>
            </Button>
        </div>
    </div>
  );
}
