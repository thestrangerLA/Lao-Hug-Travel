
'use client';

import Link from 'next/link';
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const socialLinks = [
  { icon: <Instagram className="h-5 w-5" />, href: '#' },
  { icon: <Facebook className="h-5 w-5" />, href: '#' },
  { icon: <Twitter className="h-5 w-5" />, href: '#' },
  { icon: <Youtube className="h-5 w-5" />, href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="flex flex-col items-center text-center">
            <span className="text-lg font-bold font-headline">Lao Hug Travel</span>
            <p className="text-xs text-primary font-medium tracking-wider">BEST CHOICE HALAL SERVICE</p>
          </Link>
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={`Follow us on ${social.href}`}
              >
                {social.icon}
              </Link>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Lao Hug Travel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
