import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDown } from "lucide-react";

const ChaosIcon = () => (
    <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50,10 C-10,30 40,50 50,50 C110,70 60,90 50,90" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"
              pathLength="1" strokeDasharray="1" strokeDashoffset="0">
            <animate attributeName="stroke-dashoffset" values="1; 0" dur="1s" repeatCount="1" />
        </path>
        <path d="M20,80 C40,20 60,80 80,20" stroke="white" strokeWidth="1" strokeLinecap="round" fill="none" strokeDasharray="5,5">
             <animate attributeName="stroke-dashoffset" values="20; 0" dur="1.5s" repeatCount="1" />
        </path>
         <path d="M25 25C85 25 15 75 75 75" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeLinecap="round" fill="none" strokeDasharray="2,2">
             <animate attributeName="stroke-dashoffset" values="-15; 0" dur="1.5s" repeatCount="1" />
        </path>
        <circle cx="50" cy="50" r="48" stroke="hsl(var(--muted-foreground))" strokeWidth="0.5" fill="none" />
    </svg>
);

const ClarityIcon = () => (
    <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="48" stroke="hsl(var(--muted-foreground))" strokeWidth="0.5" fill="none" />
        <path d="M20,50 C40,20 60,80 80,50" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"
            pathLength="1" strokeDasharray="1" strokeDashoffset="0">
            <animate attributeName="stroke-dashoffset" values="1; 0" dur="1s" repeatCount="1" />
        </path>
    </svg>
);

export function Differentiation() {
  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            From Complexity to Clarity
          </h2>
          <p className="mt-4 text-lg text-muted-foreground font-light">
            We didn't just improve the old model. We built a new one.
          </p>
        </div>

        {/* Top Section: Complexity */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-12 items-center">
            <div className="flex flex-col items-center justify-center">
                <ChaosIcon />
                <h3 className="mt-4 text-2xl font-bold text-white text-center">Complexity & Delay</h3>
            </div>
            <div>
                <h4 className="text-2xl font-bold text-white mb-4">The Traditional Way</h4>
                <ul className="space-y-3 font-light text-muted-foreground list-disc list-inside text-lg">
                    <li>Weeks or months to deliver</li>
                    <li>Multiple handoffs & long feedback loops</li>
                    <li>High overhead and opaque agency fees</li>
                    <li>Focused on billable hours, not results</li>
                    <li>Slow to adapt to new technology</li>
                </ul>
            </div>
        </div>

        {/* Divider */}
        <div className="relative my-12 md:my-16 flex justify-center">
            <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-border"></div>
            <div className="relative bg-background px-4">
                 <div className="w-12 h-12 rounded-full border border-border bg-background flex items-center justify-center">
                    <ArrowDown className="w-6 h-6 text-white" />
                 </div>
            </div>
        </div>


        {/* Bottom Section: Clarity */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-12 items-center">
            <div className="flex flex-col items-center justify-center">
                <ClarityIcon />
                <h3 className="mt-4 text-2xl font-bold text-white text-center">Clarity & Speed</h3>
            </div>
             <div>
                <h4 className="text-2xl font-bold text-white mb-4">The Outlai Way</h4>
                <ul className="space-y-3 font-light text-white list-disc list-inside text-lg">
                    <li>Hours or days to deliver</li>
                    <li>AI-powered workflows & real-time collaboration</li>
                    <li>Fraction of the cost with transparent pricing</li>
                    <li>Focused on your product's success</li>
                    <li>Built for the speed of modern business</li>
                </ul>
            </div>
        </div>

      </div>
    </section>
  );
}
