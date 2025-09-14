import { Card, CardContent } from "@/components/ui/card";
import { Check, Edit, Rocket } from "lucide-react";

const steps = [
    {
        step: 1,
        title: "Tell us your goal",
        description: "Use our simple form to outline your objective. No lengthy brief required.",
        icon: <Edit className="w-8 h-8" />
    },
    {
        step: 2,
        title: "We build overnight",
        description: "Our team gets to work immediately, building your page or assets. You'll get a staging link in under 24 hours.",
        icon: <Rocket className="w-8 h-8" />
    },
    {
        step: 3,
        title: "You review, we deploy",
        description: "Provide feedback, we'll make quick revisions, and your project goes live in minutes.",
        icon: <Check className="w-8 h-8" />
    }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground font-light">
            A simple, fast, and transparent process to get you results.
          </p>
        </div>

        <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2"></div>
            <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
                <Card key={index} className="glassmorphic rounded-2xl p-8 text-center">
                    <div className="mb-6 mx-auto bg-primary/10 text-primary rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl font-headline">
                        {step.icon}
                    </div>
                    <h3 className="font-headline text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground font-light">{step.description}</p>
                </Card>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
}
