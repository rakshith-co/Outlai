import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, PlayCircle } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative w-full py-24 md:py-32 lg:py-40 bg-background overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute h-[500px] w-[500px] bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 left-1/4 top-1/2"></div>
        <div className="absolute h-[400px] w-[400px] bg-accent/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 right-1/4 bottom-1/2"></div>
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className={cn("font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight")}>
          AI-Powered Growth for
          <br />
          <span className="text-primary">Ambitious Brands</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground font-light">
          Outlai combines full-stack marketing expertise with intelligent AI automation to build, manage, and scale your brand's growth engine.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button asChild size="lg" className="font-semibold text-base w-full sm:w-auto">
            <Link href="/marketing-strategy">
              Start Your Strategy
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="ghost" className="font-semibold text-base w-full sm:w-auto">
            <Link href="/contact">
              <PlayCircle className="mr-2 h-5 w-5" />
              Book a Free Call
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
