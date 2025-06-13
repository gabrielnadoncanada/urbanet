'use client';
import React, { useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/navigation';

import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export default function HeroSection({ slides }: { slides: any[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="relative overflow-hidden">
      <div className="embla"ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className={`embla__slide flex-[0_0_100%] min-h-[563px] lg:min-h-[863px] relative`}
            >
              <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute inset-0 scale-110">
                  <Image
                    src={slide.image || '/kitchen-bathroom-renovations.webp'}
                    alt="Montreal construction and renovation"
                    fill
                    className={cn('object-cover')}
                    style={{
                      objectPosition: 'center center',
                    }}
                    priority
                  />
                </div>
              </div>
              {/* Hero Content */}
              <div className="bg-gray-300 z-10 relative px-4 lg:px-12 py-4 lg:py-12 flex flex-col max-lg:justify-center lg:flex-row justify-between items-center h-full">
                <div className="max-w-full lg:max-w-2xl mb-8 lg:mb-0">
                  <h1 className="h6 lg:h3 text-white mb-6 lg:mb-8">{slide.title}</h1>
                  <p className="tsm lg:tlg text-gray-100 mb-6 lg:mb-8 max-w-xl">{slide.description}</p>
                  <Link href={slide.ctaLink}>
                    <Button size="lg">{slide.ctaText}</Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-10 right-4 lg:right-12 flex gap-3 z-10">
        <Button
          variant="outline"
          size="icon"
          className="lg:w-10 lg:h-10 border-white rounded-full bg-transparent hover:bg-white/10"
          onClick={scrollPrev}
        >
          <ChevronLeftIcon />
        </Button>
        <Button
          size="icon"
          className="lg:w-10 lg:h-10 bg-white text-gray-900 rounded-full hover:bg-white/90"
          onClick={scrollNext}
        >
          <ChevronRightIcon />
        </Button>
      </div>
    </section>
  );
}
