import { Bot, Clapperboard, Layers, Telescope, Zap, BrainCircuit } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "../ui/badge";

const featureList = [
  {
    icon: <BrainCircuit className="w-8 h-8 text-primary" />,
    title: "AI-Ready Websites & SEO",
    description: "Not just Google SEO. Agent SEO. We optimize your site so AI agents like ChatGPT can find and recommend your business first.",
    comparison: {
      us: { time: "24-48 Hours", cost: "From $999" },
      them: { time: "4-6 Weeks", cost: "$5k - $15k+" }
    }
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: "Creative Content, Made Fast",
    description: "Videos, reels, carousels, and campaigns—cut from weeks to hours. Choose from quick creative assets or fully managed growth funnels.",
    comparison: {
      us: { time: "1-3 Days", cost: "From $499/asset" },
      them: { time: "2-3 Weeks", cost: "$2k - $10k+/asset" }
    }
  },
  {
    icon: <Bot className="w-8 h-8 text-primary" />,
    title: "Social & Marketing Ops",
    description: "End-to-end management of your digital presence. From YouTube SEO to Instagram funnels, we run the campaigns while you scale.",
    comparison: {
      us: { time: "Ongoing", cost: "From $2k/mo" },
      them: { time: "Ongoing", cost: "$5k - $20k+/mo" }
    }
  },
];

export function Features() {
  return (
    <section id="services" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">
            What We Do
          </h2>
          <p className="mt-4 text-lg text-muted-foreground font-light">
            We deliver high-impact results with speed and precision.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {featureList.map((feature, index) => (
            <div key={index} className="glassmorphic p-8 rounded-2xl hover:bg-white/5 transition-colors duration-300 flex flex-col">
              <div className="mb-6 bg-primary/10 text-primary rounded-lg w-16 h-16 flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="font-headline text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground font-light flex-grow">{feature.description}</p>
              <div className="mt-6 border-t border-white/10 pt-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-sm font-semibold text-primary">Outlai</p>
                    <p className="text-xs text-foreground mt-1">{feature.comparison.us.time}</p>
                    <p className="text-xs text-muted-foreground">{feature.comparison.us.cost}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground/80">Traditional</p>
                    <p className="text-xs text-muted-foreground mt-1">{feature.comparison.them.time}</p>
                    <p className="text-xs text-muted-foreground">{feature.comparison.them.cost}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}