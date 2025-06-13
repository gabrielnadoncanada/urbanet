import React from 'react';
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { 
  CheckCircledIcon,
  MagnifyingGlassIcon,
  PersonIcon,
  StarIcon,
  EyeOpenIcon,
  BadgeIcon,
  IdCardIcon,
  GroupIcon
} from "@radix-ui/react-icons";

export default function FacilitiesSection() {
  const facilities = [
    {
      icon: <CheckCircledIcon />,
      title: "Verified Property Listings",
      description: "100% trusted properties for peace of mind."
    },
    {
      icon: <MagnifyingGlassIcon />,
      title: "Advanced Search Filters", 
      description: "Find properties tailored to your preferences."
    },
    {
      icon: <PersonIcon />,
      title: "Expert Support",
      description: "Agents and consultants at your service."
    },
    {
      icon: <StarIcon />,
      title: "User-Friendly Platform",
      description: "Simple navigation for seamless browsing."
    },
    {
      icon: <EyeOpenIcon />,
      title: "Virtual Tours",
      description: "Explore properties from the comfort of your home."
    },
    {
      icon: <BadgeIcon />,
      title: "Affordable Pricing",
      description: "Competitive rates for every budget."
    },
    {
      icon: <IdCardIcon />,
      title: "Flexible Payment Options",
      description: "Tailored payment plans for ease."
    },
    {
      icon: <GroupIcon />,
      title: "Community Insights",
      description: "Discover neighborhoods that fit your lifestyle."
    }
  ];

  return (
    <section className="py-8 lg:py-24 px-4 lg:px-12 bg-background">
      <div className="max-w-8xl mx-auto">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            <span className="block lg:inline">Discover the Facilities</span><br className="hidden lg:block" />
            <span className="block lg:inline">We Offer at Urbanet</span>
          </h2>
          <p className="text-base lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            With innovative solutions, market expertise, and a customer-first approach, we simplify the process to ensure a smooth experience.
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {facilities.map((facility, index) => (
            <Card key={index} className="p-4 lg:p-6">
              <CardContent className="p-0">
                <div className="w-8 h-8 lg:w-[40px] lg:h-[40px] text-gray-800 mb-4 lg:mb-6">
                  {facility.icon}
                </div>
                <CardTitle className="text-sm lg:text-base font-semibold text-gray-800 mb-2">{facility.title}</CardTitle>
                <CardDescription className="text-xs lg:text-sm">{facility.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 