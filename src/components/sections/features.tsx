import { BarChart3, BrainCircuit, Layers, PenTool, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const featureList = [
  {
    icon: <BrainCircuit className="w-10 h-10 text-primary" />,
    title: "AI-Driven Marketing Strategy",
    description: "Leverage AI to analyze market trends and develop targeted marketing strategies for scalable business growth.",
  },
  {
    icon: <Layers className="w-10 h-10 text-primary" />,
    title: "Full-Stack Marketing",
    description: "We manage all aspects of digital marketing including content, SEO, and ad campaigns under one roof.",
  },
  {
    icon: <PenTool className="w-10 h-10 text-primary" />,
    title: "AI-Enhanced Content Creation",
    description: "Create engaging visuals and copy for blogs, social media, and ads, maintaining high-quality, tailored content.",
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-primary" />,
    title: "Performance Analytics",
    description: "Our real-time dashboard tracks marketing performance, offering actionable insights to optimize campaigns.",
  },
];

export function Features() {
  return (
    <section id="features" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">
            An Entire Marketing Team, Powered by AI
          </h2>
          <p className="mt-4 text-lg text-muted-foreground font-light">
            Outlai is your unfair advantage. We combine expert marketing talent with powerful AI to deliver results that were previously unimaginable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureList.map((feature, index) => (
            <Card key={index} className="flex flex-col text-center items-center p-6 border-t-4 border-primary shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="p-0 mb-4">
                {feature.icon}
              </CardHeader>
              <CardContent className="p-0">
                <CardTitle className="font-headline text-xl mb-2">{feature.title}</CardTitle>
                <CardDescription className="text-sm font-light leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
