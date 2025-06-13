import React from 'react';
import { PlayIcon } from "@radix-ui/react-icons";

export default function AboutSection() {
  return (
    <section className="py-8 lg:py-20 px-4 lg:px-12 bg-background">
      <div className="max-w-8xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-8 lg:mb-12">
          <div className="mb-6 lg:mb-0">
            <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-4 max-w-2xl">
              <span className="block lg:inline">Connecting</span><br className="hidden lg:block" />
              <span className="block lg:inline">People with Perfect Properties</span>
            </h2>
          </div>
          <p className="text-base lg:text-xl text-muted-foreground max-w-lg">
            Urbanet is a leading real estate platform dedicated to connecting buyers, sellers, and renters with their perfect property.
          </p>
        </div>
        
        <div className="relative bg-gray-300 h-64 lg:h-96 rounded-xl flex items-center justify-center">
          <div className="w-15 h-15 bg-white rounded-full flex items-center justify-center">
            <PlayIcon className="w-8 h-8 text-gray-900" />
          </div>
        </div>
      </div>
    </section>
  );
} 