import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Linkedin, Twitter, Instagram } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#how-it-works', label: 'How it Works' },
  { href: '#contact', label: 'Contact' },
];

const socialLinks = [
  { href: '#', icon: <Linkedin className="h-5 w-5" /> },
  { href: '#', icon: <Instagram className="h-5 w-5" /> },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background text-foreground/80 font-light text-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex justify-center md:justify-start">
            <div className="relative h-7 w-[104px]">
                <Link href="/">
                    <Icons.logo />
                </Link>
            </div>
          </div>

          <div className="flex justify-center items-center gap-6">
            {navLinks.map((link, index) => (
                <Link key={index} href={link.href} className="hover:text-foreground transition-colors">{link.label}</Link>
            ))}
          </div>

          <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((link, index) => (
                <Button key={index} asChild variant="ghost" size="icon" className="text-foreground/60 hover:text-foreground">
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.icon}
                  </a>
                </Button>
              ))}
            </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-foreground/50 gap-2">
          <p>&copy; {new Date().getFullYear()} Outlai, Inc. All rights reserved.</p>
          <div className="flex flex-col sm:flex-row items-center gap-x-4 gap-y-2">
            <p>Bangalore, Karnataka</p>
            <a href="mailto:growth@outlai.studio" className="hover:text-foreground transition-colors">growth@outlai.studio</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
