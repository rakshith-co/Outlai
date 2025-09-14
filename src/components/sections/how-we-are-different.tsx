import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Hand, Bot, Workflow, Heart } from "lucide-react";

const differentiators = [
    {
        icon: <Hand className="w-8 h-8 text-primary" />,
        title: "Brand-First AI",
        description: "We start with your brand's soul, not a blank prompt. If you have a brand identity, we retain it. If you don't, we create one from scratch to ensure everything we produce is uniquely yours.",
    },
    {
        icon: <Workflow className="w-8 h-8 text-primary" />,
        title: "Directed, Not Automated",
        description: "We direct the AI, personalizing the workflow for your specific case. We're not just running scripts; we are conductors orchestrating a symphony of tools to create a masterpiece that reflects your business.",
    },
    {
        icon: <Heart className="w-8 h-8 text-primary" />,
        title: "Quality at Speed",
        description: "Our priority is making sure everything we ship has the soul of your business. We move fast, but we never compromise on the quality and integrity of your brand. You get the outcome, that simple.",
    }
];

export function HowWeAreDifferent() {
  return (
    <section className="w-full py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            How We're Different
          </h2>
          <p className="mt-4 text-lg text-muted-foreground font-light">
            Everybody uses AI, but we give it direction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentiators.map((item) => (
                <Card key={item.title} className="glassmorphic text-center">
                    <CardHeader className="items-center">
                        <div className="p-4 bg-primary/10 rounded-full mb-4">
                           {item.icon}
                        </div>
                        <CardTitle className="text-2xl font-bold text-white">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground font-light">{item.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>

      </div>
    </section>
  );
}
