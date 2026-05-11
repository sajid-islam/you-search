'use client';

import FeaturesSection from '@/components/sections/FeaturesSection';
import FinalCTASection from '@/components/sections/FinalCTASection';
import HeroSection from '@/components/sections/HeroSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import StopTutorialHellSection from '@/components/sections/StopTutorialHellSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <StopTutorialHellSection />
      <HowItWorksSection />
      <FinalCTASection />
    </>
  );
}
