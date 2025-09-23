import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Community | Outlai',
  description: 'Join the Outlai community to connect with founders, marketers, and AI enthusiasts.',
};

export default function CommunityPage() {
  return (
    <main className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-block bg-primary/10 p-4 rounded-full mb-4">
            <Users className="w-10 h-10 text-primary" />
        </div>
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
          Join the Outlai Community
        </h1>
        <p className="mt-4 text-lg text-muted-foreground font-light">
          Connect, learn, and grow with a network of forward-thinking founders, marketers, and AI enthusiasts.
        </p>
      </div>
      <div className="max-w-2xl mx-auto mt-12">
        <Card className="shadow-lg glassmorphic">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Why You Should Join</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4 text-muted-foreground font-light">
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center mt-1">
                    <ArrowRight className="w-4 h-4 text-primary" />
                </div>
                <span>
                    <span className="font-semibold text-foreground">Exclusive Insights:</span> Get early access to AI marketing trends, strategies, and case studies before anyone else.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center mt-1">
                    <ArrowRight className="w-4 h-4 text-primary" />
                </div>
                <span>
                    <span className="font-semibold text-foreground">Direct Access:</span> Interact directly with the Outlai team, ask questions, and get real-time feedback on your ideas.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center mt-1">
                    <ArrowRight className="w-4 h-4 text-primary" />
                </div>
                <span>
                    <span className="font-semibold text-foreground">Peer Networking:</span> Connect with a curated community of ambitious entrepreneurs and marketers who are building the future.
                </span>
              </li>
               <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center mt-1">
                    <ArrowRight className="w-4 h-4 text-primary" />
                </div>
                <span>
                    <span className="font-semibold text-foreground">Early Access:</span> Be the first to try our new AI tools, services, and features, and help shape our roadmap.
                </span>
              </li>
            </ul>
            <div className="mt-8 text-center">
              <Button asChild size="lg" className="font-semibold primary-bar-glow">
                <Link href="#">
                  Join our Discord <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
