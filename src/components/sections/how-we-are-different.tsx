
"use client";

import React, { useState } from 'react';
import { Hand, Heart, Link as LinkIcon, X } from "lucide-react";
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const differentiators = [
    {
        icon: <Hand />,
        title: "Brand-First AI",
        description: "We start with your brand's soul, not a blank prompt. If you have a brand identity, we retain it. If you don't, we create one from scratch to ensure everything we produce is uniquely yours.",
        positionClasses: "top-[25%] left-1/2 -translate-x-1/2 -translate-y-1/2"
    },
    {
        icon: <LinkIcon />,
        title: "Directed, Not Automated",
        description: "We direct the AI, personalizing the workflow for your specific case. We're not just running scripts; we are conductors orchestrating a symphony of tools to create a masterpiece that reflects your business.",
        positionClasses: "top-3/4 left-[33%] -translate-x-1/2 -translate-y-1/2"
    },
    {
        icon: <Heart />,
        title: "Quality at Speed",
        description: "Our priority is making sure everything we ship has the soul of your business. We move fast, but we never compromise on the quality and integrity of your brand. You get the outcome, that simple.",
        positionClasses: "top-3/4 left-[67%] -translate-x-1/2 -translate-y-1/2"
    }
];

export function HowWeAreDifferent() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const handlePolygonClick = (index: number) => {
    setActiveIndex(index);
  }

  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
            How We're Different
          </h2>
          <p className="mt-4 text-lg text-muted-foreground font-light">
            Everybody uses AI, but we give it direction.
          </p>
        </div>

        <div className="relative w-full max-w-lg aspect-[400/300] mx-auto">
            {activeIndex !== null && (
                 <div className="absolute inset-0 flex items-center justify-center p-4 animate-in fade-in duration-500 z-20">
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
            )}

            <div className={cn("relative w-full h-full transition-opacity duration-300", activeIndex !== null ? 'opacity-20 blur-sm' : 'opacity-100')}>
                <svg viewBox="0 0 400 300" className="w-full h-full">
                    {/* Main White Triangle */}
                    <polygon points="200,0 400,300 0,300" className="fill-white" />

                    {/* Dividers */}
                    <line x1="100" y1="150" x2="300" y2="150" className="stroke-black" strokeWidth="2" />
                    <line x1="200" y1="150" x2="200" y2="300" className="stroke-black" strokeWidth="2" />

                    {/* Clickable Zones */}
                    <polygon points="200,0 100,150 300,150" className="fill-transparent cursor-pointer hover:fill-black/5 transition-colors" onClick={() => handlePolygonClick(0)} />
                    <polygon points="0,300 100,150 200,150 200,300" className="fill-transparent cursor-pointer hover:fill-black/5 transition-colors" onClick={() => handlePolygonClick(1)} />
                    <polygon points="400,300 300,150 200,150 200,300" className="fill-transparent cursor-pointer hover:fill-black/5 transition-colors" onClick={() => handlePolygonClick(2)} />
                </svg>

                <div className={cn("absolute inset-0 pointer-events-none text-primary-foreground", activeIndex !== null && 'pointer-events-auto')}>
                    {differentiators.map((d, index) => (
                         <div 
                            key={index}
                            onClick={() => handlePolygonClick(index)}
                            className={cn("absolute w-1/3 flex flex-col items-center justify-center gap-2 cursor-pointer pointer-events-auto", d.positionClasses)}
                         >
                            <div className="flex flex-col items-center gap-2 text-black">
                                {React.cloneElement(d.icon, { className: "w-6 h-6" })}
                                <h3 className="font-semibold text-base text-center">{d.title}</h3>
                            </div>
                         </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
