import { ContactForm } from '@/components/contact-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader className="text-center">
            <h1 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">
              Get in Touch
            </h1>
            <CardDescription className="text-lg pt-2">
              Have a question or want to work together? Drop us a line.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
