import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const ChaosIcon = () => (
    <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 90C10 90 90 10 50 50C10 90 90 90 50 50C10 10 90 10 50 50" stroke="hsl(var(--muted-foreground))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 15L85 85" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeLinecap="round" strokeDasharray="4 4" />
        <path d="M85 15L15 85" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeLinecap="round" strokeDasharray="4 4" />
        <path d="M20 70C20 70 80 30 50 50C20 70 80 70 50 50C20 30 80 30 50 50" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M30 20C30 20 70 80 50 50C30 20 70 20 50 50C30 80 70 80 50 50" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const ClarityIcon = () => (
    <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w.org/2000/svg">
        <circle cx="50" cy="50" r="45" stroke="hsl(var(--primary))" strokeWidth="2" />
        <circle cx="50" cy="50" r="35" stroke="hsl(var(--primary))" strokeWidth="2" stroke-opacity="0.8" />
        <circle cx="50" cy="50" r="25" stroke="hsl(var(--primary))" strokeWidth="2" stroke-opacity="0.6" />
        <circle cx="50" cy="50" r="15" stroke="hsl(var(--primary))" strokeWidth="2" stroke-opacity="0.4" />
        <circle cx="50" cy="50" r="5" fill="hsl(var(--primary))" />
    </svg>
);


const TraditionalColumn = () => (
    <Card className="glassmorphic rounded-2xl w-full h-full flex flex-col">
        <CardHeader>
            <div className="flex items-center gap-4">
                <ChaosIcon />
                <div>
                    <CardTitle className="font-headline text-2xl">The Traditional Way</CardTitle>
                    <p className="text-muted-foreground font-light">Complexity & Delay</p>
                </div>
            </div>
        </CardHeader>
        <CardContent className="flex-grow">
            <ul className="space-y-3 font-light text-muted-foreground list-disc list-inside">
                <li>Weeks or months to deliver</li>
                <li>Multiple handoffs & long feedback loops</li>
                <li>High overhead and opaque agency fees</li>
                <li>Focused on billable hours, not results</li>
                <li>Slow to adapt to new technology</li>
            </ul>
        </CardContent>
    </Card>
);

const OutlaiColumn = () => (
    <Card className="glassmorphic rounded-2xl w-full h-full flex flex-col border-primary/20 shadow-primary/10 shadow-lg">
        <CardHeader>
            <div className="flex items-center gap-4">
                <ClarityIcon />
                <div>
                    <CardTitle className="font-headline text-2xl text-primary">The Outlai Way</CardTitle>
                    <p className="text-muted-foreground font-light">Clarity & Speed</p>
                </div>
            </div>
        </CardHeader>
        <CardContent className="flex-grow">
            <ul className="space-y-3 font-light text-foreground list-disc list-inside">
                <li>Hours or days to deliver</li>
                <li>AI-powered workflows & real-time collaboration</li>
                <li>Fraction of the cost with transparent pricing</li>
                <li>Focused on your product's success</li>
                <li>Built for the speed of modern business</li>
            </ul>
        </CardContent>
    </Card>
);


export function Differentiation() {
  return (
    <section className="w-full py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">
            From Complexity to Clarity
          </h2>
          <p className="mt-4 text-lg text-muted-foreground font-light">
            We didn't just improve the old model. We built a new one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_auto_1fr] gap-8 items-center">
          <TraditionalColumn />
          
          <div className="hidden lg:flex justify-center items-center">
            <ArrowRight className="w-12 h-12 text-primary/50 animate-pulse" />
          </div>

          <OutlaiColumn />
        </div>
      </div>
    </section>
  );
}
