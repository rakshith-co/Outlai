
import { Button } from '@/components/ui/button';
import { Users, ArrowRight, Eye, MessageSquare, Network, Rocket } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Community | Outlai',
  description: 'Join the Outlai community to connect with founders, marketers, and AI enthusiasts.',
};

const benefits = [
    {
        icon: <Eye className="w-6 h-6 text-primary" />,
        title: "Exclusive Insights",
        description: "Early access to AI marketing trends and strategies.",
        position: "top-0 left-1/2 -translate-x-1/2 -translate-y-full"
    },
    {
        icon: <Rocket className="w-6 h-6 text-primary" />,
        title: "Early Access",
        description: "Be the first to try new AI tools and features.",
        position: "top-1/2 right-0 translate-x-full"
    },
    {
        icon: <Network className="w-6 h-6 text-primary" />,
        title: "Peer Networking",
        description: "Connect with ambitious entrepreneurs.",
        position: "bottom-0 left-1/2 -translate-x-1/2 translate-y-full"
    },
    {
        icon: <MessageSquare className="w-6 h-6 text-primary" />,
        title: "Direct Access",
        description: "Interact directly with the Outlai team.",
        position: "top-1/2 left-0 -translate-x-full"
    }
]

export default function CommunityPage() {
  return (
    <main className="container mx-auto px-4 py-16 md:py-24 flex flex-col items-center justify-center min-h-[80vh]">
      <div className="relative w-full max-w-4xl flex items-center justify-center">

        {/* Lines connecting the hub to the benefits */}
        <div className="absolute w-px h-full bg-border/50 top-0 left-1/2 -translate-x-1/2"></div>
        <div className="absolute h-px w-full bg-border/50 top-1/2 left-0 -translate-y-1/2"></div>
        
        {/* Central Hub */}
        <div className="relative z-10 flex flex-col items-center text-center p-8">
            <div className="relative inline-block bg-primary/10 p-5 rounded-full mb-4 shadow-lg primary-bar-glow">
                <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping"></div>
                <Users className="w-12 h-12 text-primary relative" />
            </div>
            <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
              Join the Outlai Community
            </h1>
            <p className="mt-4 max-w-md text-lg text-muted-foreground font-light">
              Connect, learn, and grow with a network of forward-thinking founders, marketers, and AI enthusiasts.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="font-semibold primary-bar-glow">
                <Link href="#">
                  Join our Discord <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
        </div>

        {/* Benefits orbiting the hub */}
        {benefits.map((benefit, index) => (
            <div key={index} className={`absolute ${benefit.position} w-56`}>
                <div className="glassmorphic p-4 rounded-lg shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
                    <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 bg-primary/10 p-2 rounded-full">
                           {benefit.icon}
                        </div>
                        <div>
                            <h3 className="font-semibold text-base">{benefit.title}</h3>
                            <p className="text-sm text-muted-foreground font-light">{benefit.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </main>
  );
}
