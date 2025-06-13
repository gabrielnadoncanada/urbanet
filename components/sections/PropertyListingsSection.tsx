import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { 
  Component2Icon,
  Component1Icon,
  SquareIcon
} from "@radix-ui/react-icons";

export default function PropertyListingsSection() {
  const properties = [
    {
      title: "Family Home",
      price: "$350,000",
      description: "Experience the perfect blend of elegance and comfort in our family luxury homes.",
      bathrooms: "2 Bathroom",
      bedrooms: "3 Bedroom", 
      area: "2,000 sq ft",
      badges: ["Houses", "For Sale"]
    },
    {
      title: "Spacious Suburban Villa",
      price: "$850,000", 
      description: "Escape to tranquility with our Spacious Suburban Villa, where elegance meets comfort.",
      bathrooms: "4 Bathrooms",
      bedrooms: "5 Bedrooms",
      area: "4,500 sq ft", 
      badges: ["Villa", "For Rent"]
    },
    {
      title: "Cozy Downtown Apartment",
      price: "$1,800 / month",
      description: "Experience the best of city living in our Cozy Downtown Apartment, where modern design meets convenience.",
      bathrooms: "1 Bathroom",
      bedrooms: "2 Bedrooms",
      area: "1,200 sq ft",
      badges: ["Apartment", "For Rent"]
    }
  ];

  return (
    <section className="bg-white py-8 px-4 lg:py-[100px] lg:px-[50px]">
      <div className="max-w-8xl mx-auto flex flex-col items-center gap-6 lg:gap-[50px]">
        {/* Heading */}
        <div className="flex justify-between items-center w-full gap-[70px]">
          <h2 className="text-[32px] lg:text-[48px] font-semibold text-[#18181B] leading-[1.25] lg:leading-[1.21] tracking-[-0.02em] text-left lg:text-center w-full lg:w-[620px] lg:mx-auto">
            Explore and Browse Our Exclusive Property Listings
          </h2>
        </div>
        
        {/* Property Listing */}
        <div className="flex flex-col items-center w-full gap-[56px]">
          {/* Property Carousel */}
          <Carousel
            opts={{
              align: "start",
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
                            className="bg-white text-[#4A5567] hover:bg-white rounded-full px-3 py-1.5 text-sm lg:text-base font-medium border-0"
                          >
                            {badge}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {/* Property Content */}
                    <div className="flex flex-col gap-4">
                      {/* Name & Price */}
                      <div className="flex justify-between items-center gap-3">
                        <h3 className="text-base lg:text-xl font-semibold text-[#18181B] leading-[1.21] lg:leading-[1.5]">
                          {property.title}
                        </h3>
                        <span className="text-base lg:text-xl font-semibold text-[#18181B] leading-[1.21] lg:leading-[1.5]">
                          {property.price}
                        </span>
                      </div>
                      
                      {/* Description */}
                      <p className="text-sm lg:text-base font-normal text-[#677489] leading-[1.57] lg:leading-[1.625] h-11 lg:h-auto overflow-hidden">
                        {property.description}
                      </p>
                      
                      {/* Divider */}
                      <hr className="border-[#E4E4E7] border-t-[1.5px]" />
                      
                      {/* Property Info */}
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 lg:w-6 lg:h-6 text-[#677489]">
                            <Component2Icon />
                          </div>
                          <span className="text-xs lg:text-base font-normal text-[#677489] leading-[1.5] lg:leading-[1.625]">
                            {property.bathrooms}
                          </span>
                        </div>
                        
                        <div className="w-px h-5 lg:h-6 bg-[#E4E4E7] mx-[14px]"></div>
                        
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 lg:w-6 lg:h-6 text-[#677489]">
                            <Component1Icon />
                          </div>
                          <span className="text-xs lg:text-base font-normal text-[#677489] leading-[1.5] lg:leading-[1.625]">
                            {property.bedrooms}
                          </span>
                        </div>
                        
                        <div className="w-px h-5 lg:h-6 bg-[#E4E4E7] mx-[14px]"></div>
                        
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 lg:w-6 lg:h-6 text-[#677489]">
                            <SquareIcon />
                          </div>
                          <span className="text-xs lg:text-base font-normal text-[#677489] leading-[1.5] lg:leading-[1.625]">
                            {property.area}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden lg:flex" />
            <CarouselNext className="hidden lg:flex" />
          </Carousel>
          
          {/* View More Button */}
          <Button className="bg-[#18181B] text-white hover:bg-[#18181B]/90 rounded-lg px-6 py-3.5 h-[46px] text-base font-semibold leading-[1.21]">
            View More
          </Button>
        </div>
      </div>
    </section>
  );
} 