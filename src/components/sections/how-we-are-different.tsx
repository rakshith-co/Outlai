"use client";

import React, { useState } from 'react';
import { Hand, Workflow, Heart, X } from "lucide-react";
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const differentiators = [
    {
        icon: <Hand className="w-8 h-8" />,
        title: "Brand-First AI",
        description: "We start with your brand's soul, not a blank prompt. If you have a brand identity, we retain it. If you don't, we create one from scratch to ensure everything we produce is uniquely yours.",
    },
    {
        icon: <Workflow className="w-8 h-8" />,
        title: "Directed, Not Automated",
        description: "We direct the AI, personalizing the workflow for your specific case. We're not just running scripts; we are conductors orchestrating a symphony of tools to create a masterpiece that reflects your business.",
    },
    {
        icon: <Heart className="w-8 h-8" />,
        title: "Quality at Speed",
        description: "Our priority is making sure everything we ship has the soul of your business. We move fast, but we never compromise on the quality and integrity of your brand. You get the outcome, that simple.",
    }
];

const TriangleIcon = ({ activeIndex, onSelect }: { activeIndex: number | null, onSelect: (index: number | null) => void }) => {
    return (
        <svg viewBox="0 0 100 86.6" className="w-full h-full cursor-pointer drop-shadow-lg">
            {/* Top Section */}
            <polygon
                points="50,0 100,86.6 0,86.6"
                className={cn(
                    "fill-card stroke-border stroke-[0.5] transition-colors",
                    activeIndex !== 0 && "hover:fill-muted"
                )}
                onClick={() => onSelect(0)}
            />
             <polygon
                points="50,0 75,43.3 25,43.3"
                className={cn("fill-card stroke-border stroke-[0.5] hover:fill-primary/10 transition-colors", activeIndex === 0 ? "fill-primary/10" : "")}
                onClick={() => onSelect(0)}
            />

            {/* Bottom Left Section */}
            <polygon
                points="0,86.6 50,86.6 25,43.3"
                className={cn("fill-card stroke-border stroke-[0.5] hover:fill-primary/10 transition-colors", activeIndex === 1 ? "fill-primary/10" : "")}
                onClick={() => onSelect(1)}
            />
            
            {/* Bottom Right Section */}
             <polygon
                points="50,86.6 100,86.6 75,43.3"
                className={cn("fill-card stroke-border stroke-[0.5] hover:fill-primary/10 transition-colors", activeIndex === 2 ? "fill-primary/10" : "")}
                onClick={() => onSelect(2)}
            />

            {/* Dividers */}
            <line x1="25" y1="43.3" x2="75" y2="43.3" className="stroke-border stroke-[0.5]" />
            <line x1="50" y1="86.6" x2="50" y2="43.3" className="stroke-border stroke-[0.5]" />
        </svg>
    )
}

export function HowWeAreDifferent() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  return (
    <section className="w-full py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
            How We're Different
          </h2>
          <p className="mt-4 text-lg text-muted-foreground font-light">
            Everybody uses AI, but we give it direction.
          </p>
        </div>

        <div className="relative w-full max-w-lg aspect-[100/86.6] mx-auto">
            {activeIndex !== null ? (
                 <div className="absolute inset-0 flex items-center justify-center p-8 animate-in fade-in duration-500 z-20">
                     <Card className="glassmorphic w-full max-w-md text-center relative">
                         <Button variant="ghost" size="icon" className="absolute top-2 right-2" onClick={() => setActiveIndex(null)}>
                            <X className="w-4 h-4" />
                         </Button>
                         <CardHeader className="items-center">
                            <div className="p-3 bg-primary/10 rounded-full mb-2">
                                {React.cloneElement(differentiators[activeIndex].icon, {className: "w-8 h-8 text-primary"})}
                            </div>
                            <CardTitle className="text-2xl font-bold">{differentiators[activeIndex].title}</CardTitle>
                         </CardHeader>
                         <CardContent>
                             <p className="text-muted-foreground font-light">{differentiators[activeIndex].description}</p>
                         </CardContent>
                     </Card>
                 </div>
            ) : (
                 <div className="relative w-full h-full">
                    <svg viewBox="0 0 100 86.6" className="w-full h-full drop-shadow-lg">
                        {/* Top Section */}
                        <polygon
                            points="50,0 75,43.3 25,43.3"
                            className="fill-card stroke-border stroke-[0.5] hover:fill-primary/10 transition-colors cursor-pointer"
                            onClick={() => setActiveIndex(0)}
                        />
                        {/* Bottom Left Section */}
                        <polygon
                            points="0,86.6 50,86.6 25,43.3"
                            className="fill-card stroke-border stroke-[0.5] hover:fill-primary/10 transition-colors cursor-pointer"
                            onClick={() => setActiveIndex(1)}
                        />
                        {/* Bottom Right Section */}
                        <polygon
                            points="50,86.6 100,86.6 75,43.3"
                            className="fill-card stroke-border stroke-[0.5] hover:fill-primary/10 transition-colors cursor-pointer"
                            onClick={() => setActiveIndex(2)}
                        />
                    </svg>

                    <div className="absolute inset-0 pointer-events-none">
                        {/* Top Label */}
                        <div className="absolute top-[22%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 cursor-pointer pointer-events-auto" onClick={() => setActiveIndex(0)}>
                             {React.cloneElement(differentiators[0].icon, { className: "w-6 h-6 text-primary" })}
                            <h3 className="font-semibold text-sm text-center text-foreground">{differentiators[0].title}</h3>
                        </div>
                        {/* Left Label */}
                        <div className="absolute top-[68%] left-[25%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 cursor-pointer pointer-events-auto" onClick={() => setActiveIndex(1)}>
                            {React.cloneElement(differentiators[1].icon, { className: "w-6 h-6 text-primary" })}
                            <h3 className="font-semibold text-sm text-center text-foreground">{differentiators[1].title}</h3>
                        </div>
                        {/* Right Label */}
                        <div className="absolute top-[68%] left-[75%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 cursor-pointer pointer-events-auto" onClick={() => setActiveIndex(2)}>
                             {React.cloneElement(differentiators[2].icon, { className: "w-6 h-6 text-primary" })}
                            <h3 className="font-semibold text-sm text-center text-foreground">{differentiators[2].title}</h3>
                        </div>
                    </div>
                </div>
            )}
        </div>

      </div>
    </section>
  );
}
