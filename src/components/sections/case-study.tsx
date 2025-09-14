import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function CaseStudy() {
  return (
    <section id="work" className="w-full py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image 
              src="https://picsum.photos/seed/casestudy/800/600"
              alt="D2C Footwear Brand Case Study"
              width={800}
              height={600}
              className="rounded-2xl shadow-lg"
              data-ai-hint="ecommerce product"
            />
          </div>
          <div>
            <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Real Results, Real Fast
            </h2>
            <Card className="glassmorphic">
                <CardHeader>
                    <CardTitle className="text-xl font-bold">D2C Footwear Brand</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-lg text-muted-foreground font-light mb-6">
                        A landing page delivered in 20 hours led to a 2x click-through rate on paid ads and saved 70% on production time compared to a traditional photoshoot and web development cycle.
                    </p>
                    <div className="flex items-center gap-6">
                        <div>
                            <p className="text-3xl font-bold text-primary">2x</p>
                            <p className="text-sm text-muted-foreground">Higher CTR</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-primary">70%</p>
                            <p className="text-sm text-muted-foreground">Time Saved</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
