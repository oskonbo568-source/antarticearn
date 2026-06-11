'use client';

import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import BonusSection from '@/components/BonusSection';
import AdsSection from '@/components/AdsSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <FeaturesSection />
      <BonusSection />
      <AdsSection />
    </div>
  );
}