import React from 'react';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useTranslations, useMessages } from 'next-intl';
import Image from 'next/image';

export default function ServicesSection() {
  const t = useTranslations('home');
  const messages = useMessages();

  // Get services from the translation messages
  const services = messages.home?.services?.items || [];

  return (
    <section className="py-8 lg:py-20 px-4 lg:px-12 bg-white">
      <div className="max-w-8xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="h6 lg:h5 text-foreground mb-4">What We Offer</h2>
          <p className="tsm lg:tlg text-muted-foreground max-w-2xl mx-auto">
            We are redefining real estate with innovation and excellence.
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: 'start',
            loop: false,
          }}
          className="w-full relative"
        >
          <CarouselContent>
            {services.map((service: any, index: number) => (
              <CarouselItem key={index} className="basis-[316px] min-w-1/4">
                <div className="">
                  <Card className="border-0 rounded-lg lg:rounded-xl p-3 lg:p-5 w-[300px] lg:w-full aspect-[3/4]  flex flex-col justify-end relative overflow-hidden">
                    {/* Background Image */}
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 300px, 25vw"
                    />
                    {/* Overlay for better text readability */}
                    <div className="absolute inset-0 bg-black/20"/>

                    <Card className="bg-white rounded-md p-4 gap-2 lg:gap-3 flex flex-col relative z-10">
                      <CardTitle className="tsm lg:tlg font-semibold text-foreground">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="txs lg:tsm text-[#4A5567]">
                        {service.description}
                      </CardDescription>
                    </Card>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Arrows - Hidden on mobile, visible on desktop */}
          <CarouselPrevious className="hidden lg:flex"/>
          <CarouselNext className="hidden lg:flex"/>
        </Carousel>
      </div>
    </section>
  );
}
