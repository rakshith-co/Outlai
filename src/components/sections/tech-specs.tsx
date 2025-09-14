import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2 } from "lucide-react";

const features = [
  { title: "Rapid project delivery" },
  { title: "Revisions in minutes, not days" },
  { title: "Agent-SEO specialists" },
  { title: "Social & YouTube SEO" },
  { title: "Fast video production" },
];

const deliverables = [
    { title: "React component + plain HTML/CSS fallback" },
    { title: "Optimized images, metadata, JSON-LD schema" },
    { title: "Vercel/Netlify ready, or static export" },
    { title: "Lighthouse mobile ≥ 85, desktop ≥ 95" },
    { title: "WCAG AA Accessibility" },
    { title: "Optional CMS integration (Contentful, etc.)" },
];


export function TechSpecs() {
  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                    Features & Trust
                </h2>
                <p className="text-muted-foreground mb-6 font-light">We're built for speed and reliability, so you can launch with confidence.</p>
                <ul className="space-y-3">
                    {features.map(feature => (
                        <li key={feature.title} className="flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary" />
                            <span className="font-light">{feature.title}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                    Deliverables & Specs
                </h2>
                <p className="text-muted-foreground mb-6 font-light">Everything you need for a production-ready, high-performance site.</p>
                <Accordion type="single" collapsible className="w-full rounded-2xl px-4 glassmorphic">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="font-semibold">Technical Deliverables</AccordionTrigger>
                        <AccordionContent>
                           <ul className="space-y-3 pt-2">
                                {deliverables.map(item => (
                                    <li key={item.title} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                        <span className="font-light text-muted-foreground">{item.title}</span>
                                    </li>

                                ))}
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
      </div>
    </section>
  );
}
