import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { allPackagesData } from '@/lib/packages-data';

/**
 * generateStaticParams is required for static export with dynamic routes.
 * It must be in a Server Component (no 'use client').
 */
export async function generateStaticParams() {
  return allPackagesData.map((pkg) => ({
    id: pkg.id,
  }));
}

export default function PackageDetailPage() {
  return (
    <div className="bg-secondary min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-6">
        <h1 className="text-2xl font-bold text-primary">
          This page has been moved. 
          Please contact us via WhatsApp for bookings.
        </h1>
        <Button asChild variant="default" size="lg">
          <Link href="/packages">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to all packages
          </Link>
        </Button>
      </div>
    </div>
  );
}
