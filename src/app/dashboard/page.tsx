import { DashboardClient } from './dashboard-client';

export const metadata = {
  title: 'Performance Dashboard | Outlai',
  description: 'Track your marketing performance in real-time.',
};

export default function DashboardPage() {
  return (
    <main className="bg-muted min-h-screen">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="mb-8">
            <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
              Performance Dashboard
            </h1>
            <p className="mt-2 text-lg text-muted-foreground font-light">
              Real-time insights to optimize your campaigns and drive growth.
            </p>
        </div>
        <DashboardClient />
      </div>
    </main>
  );
}
