import React from 'react';
import { Target, Rocket, Check, ArrowDown, Plus } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const steps = [
  {
    icon: <Target className="w-5 h-5 text-purple-500" />,
    title: 'Share your goals',
    description: "Tell us what you want to achieve, and we'll handle the 'how'.",
    iconBg: 'bg-purple-100',
  },
  {
    icon: <Rocket className="w-5 h-5 text-blue-500" />,
    title: 'Outlai does the heavy lifting',
    description: 'Our team builds, optimizes, and manages your marketing tasks at high speed.',
    iconBg: 'bg-blue-100',
  },
  {
    icon: <Check className="w-5 h-5 text-green-500" />,
    title: 'You launch, focus, and grow',
    description: 'With marketing on autopilot, you can get back to building your product.',
    iconBg: 'bg-green-100',
  },
];

const Connector = () => (
    <div className="relative h-16 w-full flex justify-center items-center">
        <div className="absolute w-px h-full bg-gray-200 dark:bg-gray-700" />
        <ArrowDown className="w-4 h-4 text-muted-foreground absolute top-0 mt-1" />
        <div className="absolute z-10 p-1 bg-muted rounded-full">
             <Plus className="w-4 h-4 text-muted-foreground" />
        </div>
    </div>
);


export function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground font-light">
            Our process is simple, fast, and transparent to get you results.
          </p>
        </div>

        <div className="max-w-md mx-auto">
            <div className="flex flex-col items-center">
                {steps.map((step, index) => (
                    <React.Fragment key={step.title}>
                        <Card className="w-full bg-background shadow-md">
                            <CardContent className="p-4 flex items-center gap-4">
                                <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${step.iconBg}`}>
                                    {step.icon}
                                </div>
                                <div className="flex-grow">
                                    <h3 className="font-semibold text-foreground">{step.title}</h3>
                                    <p className="text-sm text-muted-foreground font-light">{step.description}</p>
                                </div>
                            </CardContent>
                        </Card>
                        {index < steps.length - 1 && <Connector />}
                    </React.Fragment>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}