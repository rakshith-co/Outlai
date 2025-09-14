import { ContactForm } from "@/components/contact-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function Cta() {
  return (
    <section id="contact" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto">
          <Card className="shadow-2xl glassmorphic relative">
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
