import { Hero } from '@/components/sections/hero';
import { Features } from '@/components/sections/features';
import { SuccessStories } from '@/components/sections/success-stories';
import { Cta } from '@/components/sections/cta';
import { SocialProof } from '@/components/sections/social-proof';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <SocialProof />
      <Features />
      <SuccessStories />
      <Cta />
    </div>
  );
}
