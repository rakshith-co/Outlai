import React from 'react';
import { Target, Rocket, Check, Plus, FileText, BrainCircuit, Zap, Bot, Send, Scaling } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Step = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <Card className="w-full p-6 glassmorphic">
    <div className="flex items-center space-x-4">
      <div className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center bg-muted">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-lg text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground font-light">{description}</p>
      </div>
    </div>
  </Card>
);

const SubStep = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <Card className="w-full p-4 glassmorphic border-dashed border-white/20">
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center bg-muted/50">
          {icon}
        </div>
        <div>
          <h4 className="font-medium text-sm text-foreground">{title}</h4>
          <p className="text-xs text-muted-foreground font-light">{description}</p>
        </div>
      </div>
    </Card>
  );

const Connector = () => (
    <div className="relative h-12 w-full flex justify-center items-center">
      <div className="h-full w-px bg-border"></div>
      <div className="absolute">
        <div className="w-6 h-6 bg-background border border-border rounded-full flex justify-center items-center">
          <Plus className="w-4 h-4 text-muted-foreground" />
        </div>
      </div>
    </div>
  );

  const SubConnector = () => (
    <div className="relative h-8 w-full flex justify-center items-center">
        <div className="h-full w-px bg-border/50 border-dashed"></div>
    </div>
  );

export function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-semibold tracking-tight">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground font-light">
            Our process is simple, fast, and transparent to get you results.
          </p>
        </div>
        
        <div className="max-w-xl mx-auto flex flex-col items-center">
            {/* Step 1 */}
            <Step 
                icon={<Target className="w-5 h-5 text-foreground" />}
                title="Share your goals"
                description="Tell us what you want to achieve, and we'll handle the 'how'."
            />
            <SubConnector />
            <SubStep
                icon={<FileText className="w-4 h-4 text-muted-foreground" />}
                title="Initial Briefing"
                description="We start with your vision, target audience, and business objectives."
            />
            <SubConnector />
            <SubStep
                icon={<BrainCircuit className="w-4 h-4 text-muted-foreground" />}
                title="Strategy Session"
                description="We define key metrics and map out a high-level plan together."
            />

            <Connector />

            {/* Step 2 */}
            <Step 
                icon={<Rocket className="w-5 h-5 text-foreground" />}
                title="Outlai does the heavy lifting"
                description="Our team builds, optimizes, and manages your marketing tasks at high speed."
            />
            <SubConnector />
            <SubStep
                icon={<Zap className="w-4 h-4 text-muted-foreground" />}
                title="Rapid Prototyping"
                description="Our AI and human team create initial designs and copy."
            />
             <SubConnector />
            <SubStep
                icon={<Bot className="w-4 h-4 text-muted-foreground" />}
                title="Build & Optimize"
                description="We build out assets, from landing pages to social content, with SEO best practices."
            />
             <SubConnector />
            <SubStep
                icon={<Check className="w-4 h-4 text-muted-foreground" />}
                title="Review & Refine"
                description="You get to review and provide feedback, which we implement in minutes."
            />

            <Connector />

            {/* Step 3 */}
            <Step 
                icon={<Check className="w-5 h-5 text-foreground" />}
                title="You launch, focus, and grow"
                description="With marketing on autopilot, you can get back to building your product."
            />
             <SubConnector />
             <SubStep
                icon={<Send className="w-4 h-4 text-muted-foreground" />}
                title="Launch & Monitor"
                description="We deploy the campaign and monitor its performance in real-time."
            />
             <SubConnector />
             <SubStep
                icon={<Scaling className="w-4 h-4 text-muted-foreground" />}
                title="Scale & Report"
                description="We provide clear reports and scale what's working to maximize your ROI."
            />
        </div>
      </div>
    </section>
  );
}