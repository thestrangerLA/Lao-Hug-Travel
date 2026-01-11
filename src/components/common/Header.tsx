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

export default function Header({ currentLang, setCurrentLang }: { currentLang: 'en' | 'th' | 'lao', setCurrentLang: (lang: 'en' | 'th' | 'lao') => void }) {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState('');
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (pathname === '/') {
      const handleScroll = () => {
        let currentHash = '';
        const sections = navLinks
          .map((link) => {
            const parts = link.href.split('#');
            return parts.length > 1 ? parts[1] : null;
          })
          .filter((id): id is string => id !== null);

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
      
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    } else {
        setActiveHash('');
    }
  }, [pathname]);
  
  if (!isMounted) {
    // Return a placeholder or null to avoid hydration mismatch
    return (
       <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
            <Globe className="h-7 w-7 text-primary" />
            <span className="text-xl font-bold font-headline">Lao Hug Travel</span>
            </Link>
            <div className="flex items-center gap-2">
                <div className="hidden md:flex items-center gap-6">
                    {/* Skeleton for nav links */}
                    {Array.from({length: 6}).map((_, i) => <div key={i} className="h-4 w-20 bg-muted rounded-md" />)}
                </div>
                <div className="h-10 w-20 bg-muted rounded-md hidden md:flex" />
                <div className="md:hidden">
                    <Button variant="ghost" size="icon">
                        <Menu className="h-6 w-6" />
                    </Button>
                </div>
            </div>
        </div>
       </header>
    );
  }

  const isLinkActive = (href: string) => {
    const [path, hash] = href.split('#');
    // For the homepage, check the active hash
    if (pathname === '/' && hash) {
      return activeHash === `#${hash}`;
    }
    // For other pages, just check the pathname
    if (pathname !== '/' && path !== '/') {
        return pathname === path;
    }
    return false;
  };
  
  const langMap = {
    en: "EN",
    th: "TH",
    lao: "LAO",
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
                {langMap[currentLang]}
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onSelect={() => setCurrentLang('en')}>
                English (EN)
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setCurrentLang('th')}>
                Thai (TH)
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setCurrentLang('lao')}>
                Lao (LAO)
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
                      <Button variant={currentLang === 'en' ? 'secondary' : 'ghost'} className="w-full justify-start" onClick={() => setCurrentLang('en')}>
                        English (EN)
                      </Button>
                      <Button variant={currentLang === 'th' ? 'secondary' : 'ghost'} className="w-full justify-start" onClick={() => setCurrentLang('th')}>
                        Thai (TH)
                      </Button>
                      <Button variant={currentLang === 'lao' ? 'secondary' : 'ghost'} className="w-full justify-start" onClick={() => setCurrentLang('lao')}>
                        Lao (LAO)
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
