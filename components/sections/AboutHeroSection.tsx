import React from 'react';
import { Button } from '@/components/ui/button';
import { HomeIcon } from '@radix-ui/react-icons';

export default function AboutHeroSection() {
  return (
    <section className="bg-white relative">
      {/* Hero Content - About Us Section */}
      <div className="px-4 lg:px-12 py-8 lg:py-12">
        <div className="max-w-8xl mx-auto">
          {/* Heading Section */}
          <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-8 lg:gap-32 mb-8">
            <div className="max-w-2xl">
              <h1 className="h6 lg:h5 text-gray-900">
                Turning Real Estate Dreams into Reality.
              </h1>
            </div>
            <div className="max-w-xl lg:max-w-lg">
              <p className="tsm lg:tlg text-gray-600">
                Revolutionizing the way you buy, sell, and rent properties with trust, technology,
                and transparency—making real estate transactions seamless, efficient, and
                stress-free.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full h-96 lg:h-[600px] bg-gray-300 rounded-xl"></div>
        </div>
      </div>
    </section>
  );
}
