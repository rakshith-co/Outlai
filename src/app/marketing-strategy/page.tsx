import { MarketingStrategyForm } from './marketing-strategy-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BrainCircuit } from 'lucide-react';

export const metadata = {
  title: 'AI Marketing Strategy Generator | Outlai',
  description: 'Generate a tailored marketing strategy for your business.',
};

export default function MarketingStrategyPage() {
  return (
    <main className="container mx-auto px-4 py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
            <div className="inline-block bg-primary/10 p-4 rounded-full mb-4">
              <BrainCircuit className="w-10 h-10 text-primary" />
            </div>
            <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
              AI-Driven Marketing Strategy
            </h1>
            <p className="mt-4 text-lg text-muted-foreground font-light">
              Describe your business and target market, and our AI will craft a tailored marketing plan to fuel your growth.
            </p>
        </div>

        <Card className="shadow-lg">
            <CardContent className="p-8">
                <MarketingStrategyForm />
            </CardContent>
        </Card>
      </div>
    </main>
  );
}
