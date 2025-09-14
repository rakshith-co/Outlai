import { Clapperboard, Layers, Telescope } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const featureList = [
  {
    icon: <Layers className="w-8 h-8 text-primary" />,
    title: "1-Day Landing Pages",
    description: "Complete landing pages ready next morning—no brief required. Includes templates, optional custom copy, and lightning-fast deployment.",
    tag: "On-the-go sites",
  },
  {
    icon: <Telescope className="w-8 h-8 text-primary" />,
    title: "Agent-Ready SEO",
    description: "Optimize your site so modern agents (ChatGPT-style) find products & actions first. We focus on schema, agent signals, and product-first indexing.",
    tag: "AI/Agent-first discovery",
  },
  {
    icon: <Clapperboard className="w-8 h-8 text-primary" />,
    title: "Creative & Managed Social",
    description: "Videos, carousels, reels and full channel management. Production time cut by days, cost cut by ~⅓ with fast edits and VFX-lite options.",
    tag: "Speedy video & growth",
  },
];

export function Features() {
  return (
    <section id="services" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {featureList.map((feature, index) => (
            <Card key={index} className="glassmorphic p-8 rounded-2xl hover:bg-white/5 transition-colors duration-300">
              <div className="mb-4 bg-primary/10 text-primary rounded-lg w-12 h-12 flex items-center justify-center">
                {feature.icon}
              </div>
              <p className="text-sm font-semibold text-primary mb-2">{feature.tag}</p>
              <h3 className="font-headline text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground font-light">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
