import { Hero } from '@/components/sections/hero';
import { Features } from '@/components/sections/features';
import { HowItWorks } from '@/components/sections/how-it-works';
import { Cta } from '@/components/sections/cta';
import { HowWeAreDifferent } from '@/components/sections/how-we-are-different';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Features />
      <HowItWorks />
      <HowWeAreDifferent />
      <Cta />
    </div>
  );
}
