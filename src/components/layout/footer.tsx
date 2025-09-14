import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Linkedin, Twitter, Instagram } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact' },
];

const socialLinks = [
  { href: '#', icon: <Twitter className="h-5 w-5" /> },
  { href: '#', icon: <Linkedin className="h-5 w-5" /> },
  { href: '#', icon: <Instagram className="h-5 w-5" /> },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background text-foreground/80 font-light text-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Icons.logo className="h-7 w-7" />
              <span className={cn('font-headline text-2xl font-medium')}>
                x Studio
              </span>
            </Link>
            <p className="pr-4">Launch faster. Sell sooner.</p>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-headline text-lg font-medium mb-4">Stay Updated</h3>
            <p className="mb-4">Subscribe to our newsletter for the latest in AI marketing.</p>
            <form className="flex gap-2">
              <Input type="email" placeholder="Enter your email" className="bg-muted border-0" />
              <Button type="submit" variant="default" className="font-semibold">Subscribe</Button>
            </form>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-headline text-lg font-medium mb-4">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <Button key={index} asChild variant="ghost" size="icon" className="text-foreground/60 hover:text-foreground">
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.icon}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-foreground/50">
          <p>&copy; {new Date().getFullYear()} x Studio, Inc. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-foreground">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
