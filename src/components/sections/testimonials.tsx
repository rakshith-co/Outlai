import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from '@/components/ui/badge';
import placeholderImages from '@/lib/placeholder-images.json';
import { Star } from 'lucide-react';

export function Testimonials() {
  const stories = placeholderImages.placeholderImages.filter(img => img.imageHint.includes('startup') || img.imageHint.includes('ecommerce') || img.imageHint.includes('saas')).slice(0, 3);

  const quotes = [
    { text: "The fastest we've ever launched a campaign. The 24-hour turnaround is a game-changer.", author: "Founder, D2C Brand" },
    { text: "Our organic traffic from AI agents has tripled. Agent-Ready SEO is the future.", author: "Marketing Head, SaaS Co." },
    { text: "Incredible video quality on a shoestring budget and timeline. Highly recommend.", author: "CEO, Tech Startup" },
  ];

  return (
    <section id="work" className="w-full py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            From Vision to Victory
          </h2>
          <p className="mt-4 text-lg text-muted-foreground font-light">
            See how we've partnered with brands to turn ambitious goals into measurable success.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {stories.map((story, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col rounded-2xl glassmorphic">
                    <CardContent className="p-6 flex-grow flex flex-col">
                        <div className="flex text-yellow-400 mb-4">
                            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                        </div>
                      <div className="flex-grow">
                        <p className="text-lg font-light text-foreground mb-4">
                         "{quotes[index].text}"
                        </p>
                      </div>
                      <div className="mt-auto pt-4">
                        <p className="font-semibold">{quotes[index].author}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-12" />
          <CarouselNext className="mr-12" />
        </Carousel>
      </div>
    </section>
  );
}
