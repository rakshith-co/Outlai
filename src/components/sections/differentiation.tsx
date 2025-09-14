import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, XCircle, Rocket, Wallet, Target } from "lucide-react";

const differentiators = [
  {
    icon: <Rocket className="w-8 h-8 text-primary" />,
    title: "Speed",
    traditional: "Weeks to months. Multiple handoffs & long feedback loops.",
    outlai: "Hours to days. AI-powered workflows & real-time collaboration.",
  },
  {
    icon: <Wallet className="w-8 h-8 text-primary" />,
    title: "Cost",
    traditional: "High overhead, retainers, and opaque pricing models.",
    outlai: "Fraction of the cost. Transparent, project-based pricing.",
  },
  {
    icon: <Target className="w-8 h-8 text-primary" />,
    title: "Quality & Focus",
    traditional: "Focused on billable hours and legacy processes.",
    outlai: "Focused on results, AI-readiness, and your product's success.",
  },
];

export function Differentiation() {
  return (
    <section className="w-full py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">
            How We're Different
          </h2>
          <p className="mt-4 text-lg text-muted-foreground font-light">
            We're not just another agency. We're a new model built for the speed of modern business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {differentiators.map((item) => (
            <Card key={item.title} className="glassmorphic rounded-2xl text-center">
              <CardHeader className="items-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                    {item.icon}
                </div>
                <CardTitle className="font-headline text-2xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Traditional</h4>
                  <p className="text-sm font-light text-muted-foreground">{item.traditional}</p>
                </div>
                <div className="w-1/4 h-px bg-border mx-auto"></div>
                <div>
                  <h4 className="font-semibold mb-2">Outlai</h4>
                  <p className="text-sm font-light text-muted-foreground">{item.outlai}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
