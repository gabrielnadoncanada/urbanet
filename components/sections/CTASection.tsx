import React from 'react';
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref?: string;
}

export default function CTASection({ 
  title,
  description,
  buttonText,
  buttonHref = "#"
}: CTASectionProps) {
  return (
    <section className="py-16 lg:py-24 px-4 lg:px-12 bg-gray-300">
      <div className="max-w-8xl mx-auto text-center">
        <div className="max-w-3xl mx-auto mb-8">
          <h2 className="text-4xl lg:text-7xl font-semibold text-white mb-6 leading-tight">
            {title}
          </h2>
          <p className="text-lg lg:text-xl text-gray-100 mb-8">
            {description}
          </p>
        </div>
        <Button 
          variant="secondary" 
          size="lg" 
          className="px-8 py-4 rounded-xl font-semibold bg-white text-gray-900 hover:bg-white/90"
          asChild
        >
          <a href={buttonHref}>{buttonText}</a>
        </Button>
      </div>
    </section>
  );
} 