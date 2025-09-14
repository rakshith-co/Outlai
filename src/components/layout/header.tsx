"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
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
        isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2" onClick={() => setSheetOpen(false)}>
            <Icons.logo className="h-7 w-auto" />
          </Link>
          
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Button key={link.href} variant="ghost" asChild className={cn('text-sm font-light', pathname === link.href && 'font-medium bg-muted')}>
                <Link href={link.href}>{link.label}</Link>
              </Button>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <Button asChild variant="ghost" className="font-semibold">
              <Link href="/contact">Contact</Link>
            </Button>
          </div>

          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80vw] bg-background">
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
                            className={cn('font-light text-foreground/80 hover:text-foreground', pathname === link.href && 'font-medium text-foreground')}
                        >
                            {link.label}
                        </Link>
                        ))}
                         <Link
                            href="/contact"
                            onClick={() => setSheetOpen(false)}
                            className={cn('font-light text-foreground/80 hover:text-foreground', pathname === '/contact' && 'font-medium text-foreground')}
                        >
                            Contact Sales
                        </Link>
                    </nav>
                    <div className="mt-auto pt-8">
                        <Button asChild className="w-full text-base font-semibold">
                            <Link href="/contact" onClick={() => setSheetOpen(false)}>Start Your Project</Link>
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
