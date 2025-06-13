import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';

export default function TestimonialsSection() {
  return (
    <section className="py-8 lg:py-24 px-4 lg:px-12 bg-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="h6 lg:h5 text-foreground mb-8 lg:mb-16">
          Hear from our satisfied clients
        </h2>

        <div className="mb-8 lg:mb-12">
          <blockquote className="tmd lg:text-[32px] text-muted-foreground mb-6 lg:mb-8">
            "Owning a villa by Urbanet has been life-changing. The luxurious design, private pool,
            and stunning views make every day feel like a vacation. It's the perfect blend of
            elegance and comfort. Couldn't be happier with our investment!"
          </blockquote>

          <div className="text-center">
            <p className="tsm lg:tlg font-medium text-foreground">Tanya Rudwick</p>
            <p className="txs lg:tmd text-muted-foreground">Villa Owner</p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-4">
          <Button
            variant="outline"
            size="icon"
            className="lg:w-10 lg:h-10 lg:w-12 lg:h-12 rounded-full"
          >
            <ChevronLeftIcon />
          </Button>

          <div className="flex gap-3">
            <div className="w-3 h-3 bg-foreground rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          </div>

          <Button size="icon" className="lg:w-10 lg:h-10 lg:w-12 lg:h-12 rounded-full">
            <ChevronRightIcon />
          </Button>
        </div>
      </div>
    </section>
  );
}
