import React from 'react';
import { Target, Rocket, Check, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const steps = [
  {
    icon: <Target className="w-8 h-8" />,
    title: 'Share your goals',
    description: "Tell us what you want to achieve, and we'll handle the 'how'.",
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: 'Outlai does the heavy lifting',
    description: 'Our team builds, optimizes, and manages your marketing tasks at high speed.',
  },
  {
    icon: <Check className="w-8 h-8" />,
    title: 'You launch, focus, and grow',
    description: 'With marketing on autopilot, you can get back to building your product.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-thin tracking-tight">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground font-thin">
            Our process is simple, fast, and transparent to get you results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                    <div className="mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-muted/20 glassmorphic">
                        {React.cloneElement(step.icon, { className: "w-8 h-8 text-accent" })}
                    </div>
                    <h3 className="text-xl font-headline font-thin mb-2">{step.title}</h3>
                    <p className="text-muted-foreground font-thin">{step.description}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
