
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, CalendarDays } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#how-it-works', label: 'How it Works' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSheetOpen, setSheetOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'glassmorphic' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center">
          <div className="flex-1 flex justify-start">
            <Link href="/" className="flex items-center gap-2 rounded-md focus:outline-none focus:ring-2 focus:ring-ring" onClick={() => setSheetOpen(false)}>
              <Icons.logo className="h-7 w-auto" />
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center justify-center gap-1 flex-1">
            {navLinks.map((link) => (
              <Button key={link.href} variant="ghost" asChild className={cn('text-sm font-normal', pathname === link.href && 'font-medium bg-muted')}>
                <Link href={link.href}>{link.label}</Link>
              </Button>
            ))}
          </nav>

          <div className="hidden md:flex items-center justify-end flex-1">
            <Button asChild className="font-semibold shadow-lg shadow-white/10" size="sm">
              <Link href="https://calendly.com/djrakshithkumar/20min?back=1&month=2025-09">
                <CalendarDays className="h-4 w-4 mr-2" />
                Book a Meeting
              </Link>
            </Button>
          </div>

          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild className="md:hidden ml-auto">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80vw] glassmorphic">
                <div className="flex flex-col h-full">
                    <div className="flex justify-between items-center border-b pb-4">
                        <Link href="/" className="flex items-center gap-2" onClick={() => setSheetOpen(false)}>
                            <Icons.logo className="h-7 w-auto" />
                        </Link>
                        <Button variant="ghost" size="icon" onClick={() => setSheetOpen(false)}>
                            <X className="h-6 w-6" />
                        </Button>
                    </div>
                    <nav className="flex flex-col gap-4 mt-8 text-lg">
                        {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setSheetOpen(false)}
                            className={cn('font-normal text-foreground/80 hover:text-foreground', pathname === link.href && 'font-medium text-foreground')}
                        >
                            {link.label}
                        </Link>
                        ))}
                         <Link
                            href="#contact"
                            onClick={() => setSheetOpen(false)}
                            className={cn('font-normal text-foreground/80 hover:text-foreground', pathname === '/contact' && 'font-medium text-foreground')}
                        >
                            Contact Sales
                        </Link>
                    </nav>
                    <div className="mt-auto pt-8">
                        <Button asChild className="w-full text-base font-semibold">
                            <Link href="https://calendly.com/djrakshithkumar/20min?back=1&month=2025-09" onClick={() => setSheetOpen(false)}>Book a Meeting</Link>
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
