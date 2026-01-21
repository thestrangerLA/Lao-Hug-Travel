'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { useLang } from '@/context/LangContext';


const navLinks = [
    { href: '/', label: 'Home' },
    {
        label: 'Tours',
        subLinks: [
            { href: '/packages', label: 'All Packages' },
            { href: '/tours/1', label: 'Vientiane Tour' },
        ],
    },
    { href: '/services', label: 'Services' },
    { href: '/gmhi', label: 'GMHI' },
];

export function Header() {
    const pathname = usePathname();
    const { lang, setLang } = useLang();

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center">
                <Link href="/" className="mr-6 flex items-center space-x-2">
                    <span className="font-bold sm:inline-block font-headline text-lg">
                        Lao Hug Travel
                    </span>
                </Link>

                <div className="flex flex-1 items-center justify-end space-x-2">
                     <nav className="hidden md:flex gap-1">
                        {navLinks.map((link) =>
                            link.subLinks ? (
                                <DropdownMenu key={link.label}>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" className="flex items-center gap-1 text-base">
                                            {link.label}
                                            <ChevronDown className="h-4 w-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        {link.subLinks.map((subLink) => (
                                            <DropdownMenuItem key={subLink.href} asChild>
                                                <Link href={subLink.href}>{subLink.label}</Link>
                                            </DropdownMenuItem>
                                        ))}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            ) : (
                                <Button asChild variant="ghost" key={link.href} className={cn("text-base", pathname === link.href ? "font-bold text-primary" : "")}>
                                    <Link href={link.href}>{link.label}</Link>
                                </Button>
                            )
                        )}
                    </nav>
                    <div className="hidden md:block">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <span className='text-sm'>{lang.toUpperCase()}</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => setLang('en')}>
                                    English
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setLang('th')}>
                                    Thai
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setLang('lao')}>
                                    Lao
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>


                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                             <div className="flex flex-col gap-6 pt-10">
                                {navLinks.map((link) => (
                                    <div key={link.label}>
                                    {link.subLinks ? (
                                        <div>
                                            <p className="font-semibold text-muted-foreground px-4 mb-2">{link.label}</p>
                                            {link.subLinks.map(sublink => (
                                                <Link
                                                    key={sublink.href}
                                                    href={sublink.href}
                                                    className={cn(
                                                        'block px-4 py-2 text-lg font-medium transition-colors hover:text-primary',
                                                        pathname === sublink.href ? 'text-primary' : 'text-foreground'
                                                    )}
                                                >
                                                    {sublink.label}
                                                </Link>
                                            ))}
                                        </div>
                                    ) : (
                                         <Link
                                            key={link.href}
                                            href={link.href}
                                            className={cn(
                                                'block px-4 py-2 text-lg font-medium transition-colors hover:text-primary',
                                                pathname === link.href ? 'text-primary' : 'text-foreground'
                                            )}
                                        >
                                            {link.label}
                                        </Link>
                                    )}
                                    </div>
                                ))}
                                <div className="border-t pt-6">
                                    <h3 className="text-sm font-medium text-muted-foreground mb-2 px-4">Language</h3>
                                    <Button variant={lang === 'en' ? 'secondary' : 'ghost'} className="w-full justify-start" onClick={() => setLang('en')}>
                                        English (EN)
                                    </Button>
                                    <Button variant={lang === 'th' ? 'secondary' : 'ghost'} className="w-full justify-start" onClick={() => setLang('th')}>
                                        Thai (TH)
                                    </Button>
                                    <Button variant={lang === 'lao' ? 'secondary' : 'ghost'} className="w-full justify-start" onClick={() => setLang('lao')}>
                                        Lao (LAO)
                                    </Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
