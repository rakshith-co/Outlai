import { ContactForm } from "@/components/contact-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function Cta() {
  return (
    <section id="contact" className="w-full py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Card className="shadow-2xl bg-background border-white/10">
            <CardHeader className="text-center">
              <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">
                Ready to Launch Faster?
              </h2>
              <CardDescription className="text-lg pt-2 text-muted-foreground">
                Fill out the form and we'll send a staging link by tomorrow morning.
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
