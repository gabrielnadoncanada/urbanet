import React from 'react';
import { Button } from "@/components/ui/button";
import { 
  ChevronLeftIcon,
  ChevronRightIcon
} from "@radix-ui/react-icons";

export default function TestimonialsSection() {
  return (
    <section className="py-8 lg:py-24 px-4 lg:px-12 bg-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-8 lg:mb-16">
          Hear from our satisfied clients
        </h2>
        
        <div className="mb-8 lg:mb-12">
          <blockquote className="text-xl lg:text-3xl text-muted-foreground mb-6 lg:mb-8 leading-relaxed">
            "Owning a villa by Urbanet has been life-changing. The luxurious design, private pool, and stunning views make every day feel like a vacation. It's the perfect blend of elegance and comfort. Couldn't be happier with our investment!"
          </blockquote>
          
          <div className="text-center">
            <p className="text-lg lg:text-xl font-medium text-foreground">Tanya Rudwick</p>
            <p className="text-muted-foreground">Villa Owner</p>
          </div>
        </div>
        
        <div className="flex justify-center items-center gap-4">
          <Button variant="outline" size="icon" className="w-10 h-10 lg:w-12 lg:h-12 rounded-full">
            <ChevronLeftIcon />
          </Button>
          
          <div className="flex gap-3">
            <div className="w-3 h-3 bg-foreground rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          </div>
          
          <Button size="icon" className="w-10 h-10 lg:w-12 lg:h-12 rounded-full">
            <ChevronRightIcon />
          </Button>
        </div>
      </div>
    </section>
  );
} 