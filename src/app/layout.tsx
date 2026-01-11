'use client';

import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { useState } from 'react';
import Home from './page';

// export const metadata: Metadata = {
//   title: 'Lao Hug Travel',
//   description: 'Your trusted partner for unforgettable journeys.',
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [lang, setLang] = useState<'en' | 'th' | 'lao'>('en');

  const isHomePage = (children as React.ReactElement)?.type === Home;

  return (
    <html lang="en" className="h-full">
      <head>
        <title>Lao Hug Travel</title>
        <meta name="description" content="Your trusted partner for unforgettable journeys." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased flex flex-col h-full">
        <Header currentLang={lang} setCurrentLang={setLang} />
        <main className="flex-grow">
          {isHomePage ? <Home lang={lang} /> : children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
