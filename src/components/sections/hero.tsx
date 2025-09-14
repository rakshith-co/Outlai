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
        <h1 className={cn("font-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight")}>
          Launch faster.
          <br />
          Sell sooner.
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-base md:text-lg text-muted-foreground font-light">
          Landing pages in 24 hours, SEO for AI agents, and on-demand creative + managed social—one studio, three outcomes.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button asChild size="lg" className="font-semibold text-base w-full sm:w-auto">
            <Link href="#contact">
              Get my 24h Page
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="font-semibold text-base w-full sm:w-auto glassmorphic border-white/20 hover:bg-white/10 hover:text-white">
            <Link href="/contact">
              <Package className="mr-2 h-5 w-5" />
              Contact Sales
            </Link>
          </Button>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Next-morning delivery • Quick revisions • Agent-friendly SEO
        </p>
        <div className="mt-12 flex justify-center animate-fade-in-up">
            <Card className="glassmorphic rounded-2xl">
                <CardContent className="p-4">
                    <div className="flex items-center space-x-4 text-sm font-light text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <span className="text-primary font-mono">1.</span>
                            <span>Order</span>
                        </div>
                        <div className="text-muted-foreground/50">→</div>
                        <div className="flex items-center gap-2">
                            <span className="text-primary font-mono">2.</span>
                            <span>Wake up</span>
                        </div>
                        <div className="text-muted-foreground/50">→</div>
                         <div className="flex items-center gap-2">
                            <span className="text-primary font-mono">3.</span>
                            <span>Launch</span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
