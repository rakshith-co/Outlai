import React from 'react';
import { Target, Rocket, Check } from 'lucide-react';

const steps = [
  {
    icon: <Target className="w-8 h-8 text-primary" />,
    title: 'Share your goals',
    description: "Tell us what you want to achieve, and we'll handle the 'how'.",
  },
  {
    icon: <Rocket className="w-8 h-8 text-primary" />,
    title: 'Outlai does the heavy lifting',
    description: 'Our team builds, optimizes, and manages your marketing tasks at high speed.',
  },
  {
    icon: <Check className="w-8 h-8 text-primary" />,
    title: 'You launch, focus, and grow',
    description: 'With marketing on autopilot, you can get back to building your product.',
  },
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-6 bg-background p-2 rounded-full">
                <div className="bg-muted/50 rounded-full p-4">
                  {step.icon}
                </div>
              </div>
              <h3 className="font-headline text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground font-light px-4">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}