'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Globe, ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

const navLinks = [
  { href: '/#about', label: 'About' },
  { href: '/#what-we-do', label: 'Services' },
  { href: '/#halal-package', label: 'Halal Tours' },
  { href: '/#why-choose-us', label: 'Why Us' },
  { href: '/#contact-us', label: 'Contact' },
  { href: '/itinerary', label: 'Plan a Trip' },
];

export default function Header() {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState('');
  const [currentLang, setCurrentLang] = useState('EN');

  useEffect(() => {
    const handleScroll = () => {
      let currentHash = '';
      const sections = navLinks
        .map((link) => link.href.split('#')[1])
        .filter(Boolean);

      for (const id of sections) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentHash = `#${id}`;
            break;
          }
        }
      }
      setActiveHash(currentHash);
    };

    if (pathname === '/') {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
    }

    return () => {
      if (pathname === '/') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [pathname]);

  const isLinkActive = (href: string) => {
    const [path, hash] = href.split('#');
    if (hash) {
      if (pathname === '/') {
        return activeHash === `#${hash}`;
      }
      return false;
    }
    return pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Globe className="h-7 w-7 text-primary" />
          <span className="text-xl font-bold font-headline">Lao Hug Travel</span>
        </Link>
        <div className="flex items-center gap-2">
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary',
                  isLinkActive(link.href)
                    ? 'text-primary'
                    : 'text-muted-foreground'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="hidden md:flex">
                {currentLang}
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onSelect={() => setCurrentLang('EN')}>
                English (EN)
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setCurrentLang('TH')}>
                Thai (TH)
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col gap-6 pt-10">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        'text-lg font-medium transition-colors hover:text-primary',
                        isLinkActive(link.href)
                          ? 'text-primary'
                          : 'text-foreground'
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                   <div className="border-t pt-6">
                     <h3 className="text-sm font-medium text-muted-foreground mb-2 px-4">Language</h3>
                      <Button variant={currentLang === 'EN' ? 'secondary' : 'ghost'} className="w-full justify-start" onClick={() => setCurrentLang('EN')}>
                        English (EN)
                      </Button>
                      <Button variant={currentLang === 'TH' ? 'secondary' : 'ghost'} className="w-full justify-start" onClick={() => setCurrentLang('TH')}>
                        Thai (TH)
                      </Button>
                   </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
