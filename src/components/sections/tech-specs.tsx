import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Code, FileText, Smartphone, Tablet, Zap } from "lucide-react";

const features = [
  { title: "Rapid project delivery", icon: <Zap /> },
  { title: "Revisions in minutes, not days", icon: <Code /> },
  { title: "Agent-SEO specialists", icon: <Zap /> },
  { title: "Social & YouTube SEO", icon: <Zap /> },
  { title: "Fast video production", icon: <Zap /> },
];

const deliverables = [
    { title: "React component + plain HTML/CSS fallback", icon: <FileText /> },
    { title: "Optimized images, metadata, JSON-LD schema", icon: <FileText /> },
    { title: "Vercel/Netlify ready, or static export", icon: <FileText /> },
    { title: "Lighthouse mobile ≥ 85, desktop ≥ 95", icon: <Tablet /> },
    { title: "WCAG AA Accessibility", icon: <Smartphone /> },
    { title: "Optional CMS integration (Contentful, etc.)", icon: <FileText /> },
];


export function TechSpecs() {
  return (
    <section className="w-full py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
                <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight mb-4">
                    Features & Trust
                </h2>
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
                <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight mb-4">
                    Deliverables & Specs
                </h2>
                <Accordion type="single" collapsible className="w-full">
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
