import { Hero } from '@/components/sections/hero';
import { Features } from '@/components/sections/features';
import { HowItWorks } from '@/components/sections/how-it-works';
import { Pricing } from '@/components/sections/pricing';
import { Cta } from '@/components/sections/cta';
import { SocialProof } from '@/components/sections/social-proof';
import { CaseStudy } from '@/components/sections/case-study';
import { Testimonials } from '@/components/sections/testimonials';
import { TechSpecs } from '@/components/sections/tech-specs';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Features />
      <HowItWorks />
      <CaseStudy />
      <Pricing />
      <Testimonials />
      <SocialProof />
      <TechSpecs />
      <Cta />
    </div>
  );
}
