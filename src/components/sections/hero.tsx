import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Package } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export function Hero() {
  return (
    <section className="relative w-full py-24 md:py-32 lg:py-40 bg-background overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute h-[500px] w-[500px] bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 left-1/4 top-1/2"></div>
        <div className="absolute h-[400px] w-[400px] bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 right-1/4 bottom-1/2"></div>
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className={cn("font-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-thin tracking-tighter leading-tight")}>
          You focus on your product.
          <br />
          We handle the rest.
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-base md:text-lg text-muted-foreground font-thin">
          Outlai makes business easier — from AI-ready SEO to creative content and digital operations. What usually takes weeks, we deliver in hours.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button asChild size="lg" className="font-semibold text-base w-full sm:w-auto glassmorphic" variant="outline">
            <Link href="#services">
              See What We Do
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="font-semibold text-base w-full sm:w-auto glassmorphic">
            <Link href="#contact">
              Contact Sales
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <p className="mt-4 text-xs text-muted-foreground max-w-lg mx-auto">
          Built for businesses that want to stay ahead without worrying about AI trends and marketing complexity.
        </p>
        <div className="mt-12 flex justify-center animate-fade-in-up">
            <Card className="glassmorphic rounded-2xl">
                <CardContent className="p-4">
                    <div className="flex items-center space-x-4 text-sm font-thin text-muted-foreground">
                        <span>AI SEO</span>
                        <div className="text-muted-foreground/50"> • </div>
                        <span>Creatives</span>
                        <div className="text-muted-foreground/50"> • </div>
                        <span>Social</span>
                        <div className="text-muted-foreground/50"> • </div>
                        <span>Automation</span>
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
