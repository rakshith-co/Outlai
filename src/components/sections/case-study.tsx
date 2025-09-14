import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";


export function CaseStudy() {
  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <Card className="glassmorphic rounded-2xl overflow-hidden md:grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12">
                <p className="text-sm font-semibold text-primary mb-2">Quick Proof</p>
                <h3 className="font-headline text-2xl md:text-3xl font-bold mb-4">D2C Footwear Brand</h3>
                <p className="text-muted-foreground font-light mb-6">A landing page was delivered in 20 hours, resulting in a 2x increase in click-through rates on paid ads and saving 70% of production time compared to a full-scale photoshoot.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="p-4 border border-white/10 rounded-lg text-center">
                        <p className="text-3xl font-bold text-primary">2x</p>
                        <p className="text-sm text-muted-foreground">CTR on Paid Ads</p>
                    </div>
                     <div className="p-4 border border-white/10 rounded-lg text-center">
                        <p className="text-3xl font-bold text-primary">70%</p>
                        <p className="text-sm text-muted-foreground">Time Saved</p>
                    </div>
                </div>
            </div>
            <div className="h-64 md:h-full w-full">
                <Image
                    src="https://picsum.photos/seed/footwear-brand/800/600"
                    alt="D2C Footwear Brand"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                    data-ai-hint="footwear product"
                />
            </div>
        </Card>
      </div>
    </section>
  );
}
