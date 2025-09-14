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

const TriangleLayout = ({ activeIndex, onSelect }: { activeIndex: number | null, onSelect: (index: number | null) => void }) => {
    const triangleSections = [
        { // Top
            points: "50,0 100,50 0,50",
            position: 'top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2',
            title: differentiators[0].title,
            icon: differentiators[0].icon,
        },
        { // Left
            points: "0,50 50,100 50,0",
            position: 'top-1/2 left-1/4 -translate-x-1/2',
            title: differentiators[1].title,
            icon: differentiators[1].icon,
        },
        { // Right
            points: "100,50 50,0 50,100",
            position: 'top-1/2 left-3/4 -translate-x-1/2',
            title: differentiators[2].title,
            icon: differentiators[2].icon,
        }
    ];

    return (
        <div className="relative w-full max-w-lg aspect-square mx-auto">
            {activeIndex !== null ? (
                 <div className="absolute inset-0 flex items-center justify-center p-8 animate-in fade-in duration-500 z-20">
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
            ) : (
                <div className="relative w-full h-full">
                    <svg viewBox="0 0 100 100" className="w-full h-full cursor-pointer absolute inset-0">
                        {triangleSections.map((section, index) => (
                             <polygon
                                key={index}
                                points={section.points}
                                className="fill-muted/20 stroke-border stroke-[1.5] hover:fill-primary/10 transition-colors"
                                onClick={() => onSelect(index)}
                            />
                        ))}
                    </svg>
                    {triangleSections.map((section, index) => (
                        <div
                            key={index}
                            onClick={() => onSelect(index)}
                            style={{
                                top: section.position.includes('top-1/4') ? '25%' : '60%',
                                left: section.position.includes('left-1/2') ? '50%' : section.position.includes('left-1/4') ? '25%' : '75%',
                                transform: 'translate(-50%, -50%)'
                            }}
                            className="absolute flex flex-col items-center gap-2 text-foreground cursor-pointer"
                        >
                            <div className="text-primary">{section.icon}</div>
                            <h3 className="font-semibold text-lg text-center">{section.title}</h3>
                        </div>
                    ))}
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
