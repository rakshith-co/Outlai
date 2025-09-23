
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Package } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export function Hero() {
  return (
    <section className="relative w-full py-24 md:py-32 lg:py-40 bg-background overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--muted-foreground) / 0.1) 1px, transparent 1px), linear-gradient(to right, hsl(var(--muted-foreground) / 0.1) 1px, transparent 1px)",
            backgroundSize: "3rem 3rem",
          }}
        />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute h-[500px] w-[500px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 left-1/4 top-1/2"></div>
          <div className="absolute h-[400px] w-[400px] bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 right-1/4 bottom-1/2"></div>
        </div>
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className={cn("font-headline text-5xl md:text-7xl font-bold tracking-tighter leading-tight")}>
          You focus on your product.
          <br />
          We handle the rest.
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-base md:text-lg text-muted-foreground font-light">
          We take the heavy lifting out of business. From ideas to execution, progress comes quicker than you expect.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button asChild size="lg" className="font-semibold text-base w-full sm:w-auto">
            <Link href="/community">
              Join Our Community
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="font-semibold text-base w-full sm:w-auto glassmorphic border-white/20 hover:bg-white/10 hover:text-white shadow-lg shadow-white/20">
            <Link href="#contact">
              Contact Sales
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <p className="mt-4 text-xs text-muted-foreground max-w-lg mx-auto hidden sm:block">
          Built for businesses that want clarity and growth — without the confusion or delays.
        </p>
        <div className="mt-12 flex justify-center animate-fade-in-up">
            <Card className="glassmorphic rounded-2xl">
                <CardContent className="p-2 md:p-4 px-4">
                    <div className="flex items-center space-x-2 md:space-x-4 text-xs md:text-sm font-light text-muted-foreground">
                        <span>AI SEO</span>
                        <div className="w-3 h-3 md:w-4 md:h-4 rounded-full orbit-glow flex items-center justify-center">
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500 shadow-[0_0_8px_theme(colors.green.500)]" />
                        </div>
                        <span>Creatives</span>
                        <div className="w-3 h-3 md:w-4 md:h-4 rounded-full orbit-glow flex items-center justify-center" style={{animationDelay: '0.75s'}}>
                           <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500 shadow-[0_0_8px_theme(colors.green.500)]" />
                        </div>
                        <span>Social</span>
                        <div className="w-3 h-3 md:w-4 md:h-4 rounded-full orbit-glow flex items-center justify-center" style={{animationDelay: '1.5s'}}>
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500 shadow-[0_0_8px_theme(colors.green.500)]" />
                        </div>
                        <span>Automation</span>
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
