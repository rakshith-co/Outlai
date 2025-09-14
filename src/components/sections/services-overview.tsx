import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";
import { Layers, Telescope, Clapperboard } from "lucide-react";

const serviceTiers = [
  {
    name: "24h Landing Pages",
    icon: <Layers className="w-8 h-8 text-primary" />,
    description: "Lightning-fast landing pages built overnight to capture your audience.",
    features: [
        "Template-based or custom design",
        "Next-morning delivery",
        "Agent-Ready SEO included",
        "2 rounds of revisions"
    ],
    cta: "Start your project",
  },
  {
    name: "AI-Ready SEO",
    icon: <Telescope className="w-8 h-8 text-primary" />,
    description: "Optimize your site for modern AI agents and product-first indexing.",
    features: [
        "In-depth schema markup",
        "Agent signal optimization",
        "Product-first indexing",
        "Performance analysis"
    ],
    cta: "Optimize your SEO",
  },
  {
    name: "Creative & Social",
    icon: <Clapperboard className="w-8 h-8 text-primary" />,
    description: "Full-service social media and video content to grow your brand.",
    features: [
        "Weekly content schedule",
        "Fast video production",
        "VFX-lite options",
        "Ad funnel management"
    ],
    cta: "Boost your social",
  }
];

export function ServicesOverview() {
  return (
    <section id="services-overview" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">
            What We Do
          </h2>
          <p className="mt-4 text-lg text-muted-foreground font-light">
            We deliver high-impact results with speed and precision.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {serviceTiers.map((tier) => (
            <Card key={tier.name} className="glassmorphic rounded-2xl flex flex-col h-full">
              <CardHeader className="items-center text-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                    {tier.icon}
                </div>
                <CardTitle className="font-headline text-2xl font-bold">{tier.name}</CardTitle>
                <CardDescription className="text-muted-foreground pt-2">{tier.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm font-light text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                 <Button asChild className="w-full font-semibold" variant="outline">
                    <Link href="#contact">{tier.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
            <Button asChild size="lg" className="font-semibold">
                <Link href="/contact">Contact Sales</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
