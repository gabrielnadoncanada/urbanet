import React from 'react';
import ContactHeroSection from '@/components/sections/ContactHeroSection';
import ContactDetailSection from '@/components/sections/ContactDetailSection';
import ContactMapSection from '@/components/sections/ContactMapSection';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/layout/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <ContactHeroSection />
      <ContactDetailSection />
      <FAQSection />
      <CTASection
        variant="two-column"
        title="Find Your Perfect Property With Urbanet"
        description="Looking for your dream home? Urbanet makes property searching easy and stress-free! With our user-friendly platform and expert agents,"
        buttonText="Start Your Search"
      />
    </div>
  );
}
