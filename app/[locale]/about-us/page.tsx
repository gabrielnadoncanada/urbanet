import React from 'react';
import AboutHeroSection from '@/components/sections/AboutHeroSection';
import AboutStatsSection from '@/components/sections/AboutStatsSection';
import VisionMissionSection from '@/components/sections/VisionMissionSection';
import CoreValuesSection from '@/components/sections/CoreValuesSection';
import GallerySection from '@/components/sections/GallerySection';
import TeamSection from '@/components/sections/TeamSection';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/layout/Footer';

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-background pt-[114px]">
      <AboutHeroSection />
      <AboutStatsSection />
      <VisionMissionSection />
      <CoreValuesSection />
      <GallerySection />
      <TeamSection />
      <CTASection 
        variant="centered"
        title="Join the Urbanet Community Today!"
        description="Discover how we can help you find, sell, or rent properties with ease."
        buttonText="Learn More"
      />
    </div>
  );
} 