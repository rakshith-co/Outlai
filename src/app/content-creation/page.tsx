import { ContentCreationForm } from './content-creation-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PenTool } from 'lucide-react';

export const metadata = {
    title: 'AI Content Creation | Outlai',
    description: 'Generate engaging content for any platform.',
};

export default function ContentCreationPage() {
  return (
    <main className="container mx-auto px-4 py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
            <div className="inline-block bg-primary/10 p-4 rounded-full mb-4">
              <PenTool className="w-10 h-10 text-primary" />
            </div>
            <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
              AI-Enhanced Content Creation
            </h1>
            <p className="mt-4 text-lg text-muted-foreground font-light">
              Generate engaging content for any platform. Just define your topic, tone, audience, and let our AI do the rest.
            </p>
        </div>

        <Card className="shadow-lg">
            <CardContent className="p-8">
                <ContentCreationForm />
            </CardContent>
        </Card>
      </div>
    </main>
  );
}
