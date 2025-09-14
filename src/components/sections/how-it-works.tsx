import React from 'react';
import { Target, Rocket, Check, Plus } from 'lucide-react';
import { Card } from '@/components/ui/card';

const steps = [
  {
    icon: <Target className="w-5 h-5 text-white" />,
    title: 'Share your goals',
    description: "Tell us what you want to achieve, and we'll handle the 'how'.",
    bgColor: 'bg-purple-500',
  },
  {
    icon: <Rocket className="w-5 h-5 text-white" />,
    title: 'Outlai does the heavy lifting',
    description: 'Our team builds, optimizes, and manages your marketing tasks at high speed.',
    bgColor: 'bg-blue-500',
  },
  {
    icon: <Check className="w-5 h-5 text-white" />,
    title: 'You launch, focus, and grow',
    description: 'With marketing on autopilot, you can get back to building your product.',
    bgColor: 'bg-green-500',
  },
];

const Connector = () => (
    <div className="relative h-12 w-full flex justify-center items-center">
      <div className="h-full w-px bg-blue-200/30"></div>
      <div className="absolute">
        <div className="w-6 h-6 bg-background border border-blue-200/30 rounded-full flex justify-center items-center">
          <Plus className="w-4 h-4 text-blue-400" />
        </div>
      </div>
    </div>
  );

export function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground font-light">
            Our process is simple, fast, and transparent to get you results.
          </p>
        </div>
        
        <div className="max-w-md mx-auto flex flex-col items-center">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <Card className="w-full p-4 glassmorphic">
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center ${step.bgColor}`}>
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground font-light">{step.description}</p>
                  </div>
                </div>
              </Card>
              {index < steps.length - 1 && <Connector />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
