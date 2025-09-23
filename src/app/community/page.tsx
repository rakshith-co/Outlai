import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, ArrowRight, Eye, MessageSquare, Network, Rocket } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Community | Outlai',
  description: 'Join the Outlai community to connect with founders, marketers, and AI enthusiasts.',
};

const benefits = [
    {
        icon: <Eye className="w-8 h-8 text-primary" />,
        title: "Exclusive Insights",
        description: "Get early access to AI marketing trends, strategies, and case studies before anyone else.",
    },
    {
        icon: <MessageSquare className="w-8 h-8 text-primary" />,
        title: "Direct Access",
        description: "Interact directly with the Outlai team, ask questions, and get real-time feedback on your ideas.",
    },
    {
        icon: <Network className="w-8 h-8 text-primary" />,
        title: "Peer Networking",
        description: "Connect with a curated community of ambitious entrepreneurs and marketers who are building the future.",
    },
    {
        icon: <Rocket className="w-8 h-8 text-primary" />,
        title: "Early Access",
        description: "Be the first to try our new AI tools, services, and features, and help shape our roadmap.",
    }
]

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

      <div className="max-w-4xl mx-auto mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
                <Card key={index} className="glassmorphic text-center">
                    <CardHeader className="items-center">
                        <div className="p-3 bg-primary/10 rounded-full mb-2">
                           {benefit.icon}
                        </div>
                        <CardTitle>{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground font-light">{benefit.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>

      <div className="mt-16 text-center">
          <p className="text-xl font-light mb-4">Ready to join the conversation?</p>
          <Button asChild size="lg" className="font-semibold primary-bar-glow">
            <Link href="#">
              Join our Discord <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
      </div>

    </main>
  );
}
