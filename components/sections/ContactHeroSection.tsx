import React from 'react';
import { Button } from '@/components/ui/button';
import { HomeIcon } from '@radix-ui/react-icons';

export default function ContactHeroSection() {
  return (
    <section className="bg-gray-300 min-h-[740px] pt-[114px] relative">
      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center px-4 lg:px-12 py-12 lg:py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="h6 lg:h3 text-white mb-8">Get in Touch with Us</h1>
          <p className="tsm lg:tlg text-white max-w-3xl mx-auto">
            Browse through a curated selection of properties tailored to your needs. Find your dream
            home, investment, or rental today.
          </p>
        </div>
      </div>
    </section>
  );
}
