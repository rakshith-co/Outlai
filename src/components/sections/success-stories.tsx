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

export function SuccessStories() {
  const stories = placeholderImages.placeholderImages.filter(img => img.imageHint.includes('startup') || img.imageHint.includes('ecommerce') || img.imageHint.includes('saas'));

  return (
    <section id="success-stories" className="w-full py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">
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
                <div className="p-1">
                  <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                    <Image
                      src={story.imageUrl}
                      alt={story.description}
                      width={600}
                      height={400}
                      className="w-full h-48 object-cover"
                      data-ai-hint={story.imageHint}
                    />
                    <CardContent className="p-6 flex-grow flex flex-col">
                      <div className="flex-grow">
                        <div className="flex justify-between items-start mb-2">
                           <h3 className="font-headline text-xl font-medium">{story.description}</h3>
                           <Badge variant="secondary" className="capitalize">{story.imageHint.split(' ')[0]}</Badge>
                        </div>
                        <p className="text-sm font-light text-muted-foreground italic mb-4">
                          "{index % 2 === 0 ? 'Outlai transformed our marketing. The AI-driven approach gave us insights we never had before.' : 'The content created by Outlai\'s AI resonated perfectly with our audience. Engagement is through the roof!'}"
                        </p>
                      </div>
                      <div className="mt-auto pt-4 border-t">
                        <div className="flex justify-between items-center text-sm">
                            <div className="flex text-yellow-400">
                                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                            </div>
                            <div className="font-bold text-primary">+{(200 - index * 25)}% ROI</div>
                        </div>
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
