import { Card, CardContent } from "@/components/ui/card";
import { Check, Edit, Rocket, Target, Lightbulb, Growth } from "lucide-react";

const steps = [
    {
        step: 1,
        title: "Share your goals",
        description: "Tell us what you want to achieve, and we'll handle the 'how'.",
        icon: <Target className="w-8 h-8" />
    },
    {
        step: 2,
        title: "Outlai does the heavy lifting",
        description: "Our team builds, optimizes, and manages your marketing tasks at high speed.",
        icon: <Rocket className="w-8 h-8" />
    },
    {
        step: 3,
        title: "You launch, focus, and grow",
        description: "With marketing on autopilot, you can get back to building your product.",
        icon: <Check className="w-8 h-8" />
    }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground font-light">
            Our process is simple, fast, and transparent to get you results, letting you focus on your product.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-8 left-0 w-full h-px bg-transparent">
             <svg width="100%" height="2" className="absolute">
                <line x1="15%" y1="1" x2="85%" y2="1" strokeWidth="2" strokeDasharray="8 8" className="stroke-border" />
            </svg>
          </div>
          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                  <div className="relative z-10 mb-6 bg-background rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl font-headline border-4 border-muted">
                    <div className="bg-primary/10 text-primary rounded-full w-14 h-14 flex items-center justify-center">
                        {step.icon}
                    </div>
                  </div>
                  <div className="p-4 rounded-lg">
                    <h3 className="font-headline text-2xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground font-light">{step.description}</p>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
