'use client';

import FeaturesSection from '@/components/sections/FeaturesSection';
import FinalCTASection from '@/components/sections/FinalCTASection';
import HeroSection from '@/components/sections/HeroSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import StopTutorialHellSection from '@/components/sections/StopTutorialHellSection';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const logVisitor = async () => {
      // Prevent multiple increments on reload within the same session
      if (sessionStorage.getItem('v_counted')) return;

      // Set immediately to prevent double-trigger in React Strict Mode
      sessionStorage.setItem('v_counted', 'true');

      try {
        await fetch('/api/stats', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ type: 'visitor' }),
        });
      } catch (err) {
        console.error('Failed to log visitor', err);
      }
    };
    logVisitor();
  }, []);

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
