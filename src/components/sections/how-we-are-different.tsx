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
        position: 'bottom-1/4 left-1/2 -translate-x-1/2',
    },
    {
        icon: <Workflow className="w-8 h-8" />,
        title: "Directed, Not Automated",
        description: "We direct the AI, personalizing the workflow for your specific case. We're not just running scripts; we are conductors orchestrating a symphony of tools to create a masterpiece that reflects your business.",
        position: 'top-1/4 left-1/4 -translate-x-1/2',
    },
    {
        icon: <Heart className="w-8 h-8" />,
        title: "Quality at Speed",
        description: "Our priority is making sure everything we ship has the soul of your business. We move fast, but we never compromise on the quality and integrity of your brand. You get the outcome, that simple.",
        position: 'top-1/4 right-1/4 translate-x-1/2',
    }
];

const TriangleLayout = ({ activeIndex, onSelect }: { activeIndex: number | null, onSelect: (index: number | null) => void }) => {
    return (
        <div className="relative w-full max-w-2xl aspect-[4/3] mx-auto">
            {/* Clickable Sections */}
            {differentiators.map((d, index) => (
                <div
                    key={index}
                    className={cn(
                        "absolute p-4 text-center cursor-pointer transition-all duration-300 rounded-full hover:bg-primary/5",
                        activeIndex !== null && activeIndex !== index ? 'opacity-0 scale-90' : 'opacity-100',
                        d.position
                    )}
                    onClick={() => onSelect(index)}
                >
                   {activeIndex === null && (
                        <div className="flex flex-col items-center gap-2 animate-in fade-in duration-500">
                             <div className="text-primary">{React.cloneElement(d.icon, { className: "w-8 h-8" })}</div>
                            <h3 className="font-semibold text-lg text-foreground">{d.title}</h3>
                        </div>
                    )}
                </div>
            ))}
            
            {/* Active content */}
            {activeIndex !== null && (
                 <div className="absolute inset-0 flex items-center justify-center p-8 animate-in fade-in duration-500">
                     <Card className="glassmorphic w-full max-w-md text-center relative">
                         <Button variant="ghost" size="icon" className="absolute top-2 right-2" onClick={() => onSelect(null)}>
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
            )}
        </div>
    );
};


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

        <TriangleLayout activeIndex={activeIndex} onSelect={setActiveIndex} />

      </div>
    </section>
  );
}
