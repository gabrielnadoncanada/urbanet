import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Component2Icon, Component1Icon, SquareIcon } from '@radix-ui/react-icons';

export default function PropertyListingsSection() {
  const properties = [
    {
      title: 'Family Home',
      price: '$350,000',
      description:
        'Experience the perfect blend of elegance and comfort in our family luxury homes.',
      bathrooms: '2 Bathroom',
      bedrooms: '3 Bedroom',
      area: '2,000 sq ft',
      badges: ['Houses', 'For Sale'],
    },
    {
      title: 'Spacious Suburban Villa',
      price: '$850,000',
      description:
        'Escape to tranquility with our Spacious Suburban Villa, where elegance meets comfort.',
      bathrooms: '4 Bathrooms',
      bedrooms: '5 Bedrooms',
      area: '4,500 sq ft',
      badges: ['Villa', 'For Rent'],
    },
    {
      title: 'Cozy Downtown Apartment',
      price: '$1,800 / month',
      description:
        'Experience the best of city living in our Cozy Downtown Apartment, where modern design meets convenience.',
      bathrooms: '1 Bathroom',
      bedrooms: '2 Bedrooms',
      area: '1,200 sq ft',
      badges: ['Apartment', 'For Rent'],
    },
  ];

  return (
    <section className="bg-white py-8 px-4 lg:py-[100px] lg:px-[50px]">
      <div className="max-w-8xl mx-auto flex flex-col items-center gap-6 lg:gap-[50px]">
        {/* Heading */}
        <div className="text-center mb-8 lg:mb-12">
          <h1 className="h6 lg:h5 text-foreground mb-4">
            Explore and Browse Our Exclusive Property Listings
          </h1>
        </div>

        {/* Property Listing */}
        <div className="flex flex-col items-center w-full gap-[56px]">
          {/* Property Carousel */}
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {properties.map((property, index) => (
                <CarouselItem key={index} className="basis-[334px] lg:basis-1/3">
                  <Card className="bg-white border-0 shadow-none flex flex-col gap-4 h-[350px] lg:h-auto">
                    {/* Property Image */}
                    <div className="relative h-[181px] lg:h-[339px] bg-[#CDD5E0] rounded-lg lg:rounded-xl">
                      {/* Badge Group */}
                      <div className="absolute top-3 right-3 lg:top-4 lg:right-4 flex gap-4">
                        {property.badges.map((badge, badgeIndex) => (
                          <Badge
                            key={badgeIndex}
                            className="bg-white text-[#4A5567] hover:bg-white rounded-full px-3 py-1.5 tsm font-medium border-0"
                          >
                            {badge}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Property Content */}
                    <div className="flex flex-col gap-4">
                      {/* Name & Price */}
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="tsm lg:tlg font-semibold text-foreground mb-1">
                            {property.title}
                          </h3>
                          <p className="tsm lg:tlg font-semibold text-foreground">
                            {property.price}
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="txs lg:tsm text-muted-foreground mb-4 line-clamp-2">
                        {property.description}
                      </p>

                      {/* Divider */}
                      <hr className="border-gray-200 mb-4" />

                      {/* Property Info */}
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex gap-4">
                          <span className="txs lg:tsm text-muted-foreground flex items-center gap-1">
                            🛁 {property.bathrooms} Bathrooms
                          </span>
                          <span className="txs lg:tsm text-muted-foreground flex items-center gap-1">
                            🛏️ {property.bedrooms} Bedrooms
                          </span>
                          <span className="txs lg:tsm text-muted-foreground flex items-center gap-1">
                            📐 {property.area}
                          </span>
                        </div>
                      </div>

                      {/* Badges */}
                      <div className="flex gap-2 mb-4">
                        {property.badges.map((badge: string, badgeIndex: number) => (
                          <span
                            key={badgeIndex}
                            className="px-3 py-1 bg-gray-100 text-muted-foreground rounded-full txs lg:tsm"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden lg:flex"/>
            <CarouselNext className="hidden lg:flex"/>
          </Carousel>

          {/* View More Button */}
          <Button>
            View More
          </Button>
        </div>
      </div>
    </section>
  );
}
