import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

const pricingTiers = [
  {
    name: "Starter",
    price: "$499",
    description: "24h landing page",
    features: [
        "1-page site",
        "Template-based design",
        "Next-morning delivery",
        "1 round of revisions"
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth",
    price: "$999",
    description: "Landing + Agent SEO",
    features: [
        "Everything in Starter",
        "Agent-Ready SEO",
        "Custom copy",
        "Analytics setup"
    ],
    cta: "Choose Growth",
    popular: true,
  },
  {
    name: "Managed",
    price: "$2499/mo",
    description: "Full creative & channel management",
    features: [
        "Everything in Growth",
        "Weekly social content",
        "Video production",
        "Ad funnel management"
    ],
    cta: "Request a Quote",
    popular: false,
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground font-light">
            Choose the plan that's right for you. No hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {pricingTiers.map((tier) => (
            <Card key={tier.name} className={`glassmorphic rounded-2xl flex flex-col h-full ${tier.popular ? 'border-primary border-2' : ''}`}>
              <CardHeader>
                <CardTitle className="font-headline text-2xl font-bold">{tier.name}</CardTitle>
                <CardDescription className="text-muted-foreground">{tier.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-6">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    <span className="text-muted-foreground">{tier.name === 'Managed' ? '' : ' one-time'}</span>
                </div>
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" />
                      <span className="text-sm font-light text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                 <Button asChild className={`w-full font-semibold ${tier.popular ? 'bg-primary' : 'bg-secondary text-secondary-foreground'}`}>
                    <Link href="#contact">{tier.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
            <Button asChild variant="outline" className="font-semibold glassmorphic border-white/20 hover:bg-white/10 hover:text-white">
                <Link href="#contact">Request a Quote</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
