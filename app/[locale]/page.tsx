import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import FacilitiesSection from '@/components/sections/FacilitiesSection';
import PropertyListingsSection from '@/components/sections/PropertyListingsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import PartnersSection from '@/components/sections/PartnersSection';
import GettingStartedSection from '@/components/sections/GettingStartedSection';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/layout/Footer';
import { generateStaticParams, withLocale } from '@/lib/i18n';
import { useTranslations, useMessages } from 'next-intl';

function HomePage({ params }: { params: { locale: string } }) {
  const t = useTranslations('home');
  const messages = useMessages();

  return (
    <div className="min-h-screen bg-background">
      <HeroSection
        slides={messages.home.hero.items.map((item: any) => ({
          title: item.title,
          description: item.description,
          ctaText: item.ctaText,
          ctaLink: item.ctaLink,
          image: item.image,
        }))}
      />
      <AboutSection />
      <ServicesSection />
      <FacilitiesSection />
      <PropertyListingsSection />
      <TestimonialsSection />
      <PartnersSection />
      <GettingStartedSection />
      <FAQSection />
      {/* <CTASection 
        variant="centered"
        title="Join the Urbanet Community Today!"
        description="Discover how we can help you find, sell, or rent properties with ease."
        buttonText="Learn More"
      /> */}
    </div>
  );
}

const Page = withLocale('home', HomePage);
export { generateStaticParams };
export const generateMetadata = Page.generateMetadata;
export default Page;
