import { Bot, Clapperboard, Layers, Telescope, Zap, BrainCircuit } from "lucide-react";

const featureList = [
  {
    icon: <BrainCircuit className="w-8 h-8 text-primary" />,
    title: "AI-Ready Websites & SEO",
    description: "Not just Google SEO. Agent SEO. We optimize your site so AI agents like ChatGPT can find and recommend your business first.",
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: "Creative Content, Made Fast",
    description: "Videos, reels, carousels, and campaigns—cut from weeks to hours. Choose from quick creative assets or fully managed growth funnels.",
  },
  {
    icon: <Bot className="w-8 h-8 text-primary" />,
    title: "Social & Marketing Ops",
    description: "End-to-end management of your digital presence. From YouTube SEO to Instagram funnels, we run the campaigns while you scale.",
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
            <div key={index} className="glassmorphic p-8 rounded-2xl hover:bg-white/5 transition-colors duration-300">
              <div className="mb-6 bg-primary/10 text-primary rounded-lg w-16 h-16 flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="font-headline text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground font-light">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
