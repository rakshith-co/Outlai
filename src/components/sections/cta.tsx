import { ContactForm } from "@/components/contact-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function Cta() {
  return (
    <section id="contact" className="w-full py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto">
            <div className="absolute inset-0 z-0 opacity-10 flex items-center justify-center pointer-events-none">
                <p className="text-[10vw] font-extrabold text-foreground/50 whitespace-nowrap">
                    Save weeks • Beat AI trends • Focus on product
                </p>
            </div>
          <Card className="shadow-2xl bg-background/80 backdrop-blur-lg border-white/10 relative">
            <CardHeader className="text-center">
              <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">
                Ready to make your business easier?
              </h2>
              <CardDescription className="text-lg pt-2 text-muted-foreground">
                No pricing tables. No long waits. Just tell us what you need — and we’ll deliver it fast.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
