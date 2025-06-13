import React from 'react';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import {
  CheckCircledIcon,
  MagnifyingGlassIcon,
  PersonIcon,
  StarIcon,
  EyeOpenIcon,
  BadgeIcon,
  IdCardIcon,
  GroupIcon,
} from '@radix-ui/react-icons';

export default function FacilitiesSection() {
  const facilities = [
    {
      icon: <CheckCircledIcon className="w-6 h-6 lg:w-10 lg:h-10"/>,
      title: 'Verified Property Listings',
      description: '100% trusted properties for peace of mind.',
    },
    {
      icon: <MagnifyingGlassIcon className="w-6 h-6 lg:w-10 lg:h-10"/>,
      title: 'Advanced Search Filters',
      description: 'Find properties tailored to your preferences.',
    },
    {
      icon: <PersonIcon className="w-6 h-6 lg:w-10 lg:h-10"/>,
      title: 'Expert Support',
      description: 'Agents and consultants at your service.',
    },
    {
      icon: <StarIcon className="w-6 h-6 lg:w-10 lg:h-10"/>,
      title: 'User-Friendly Platform',
      description: 'Simple navigation for seamless browsing.',
    },
    {
      icon: <EyeOpenIcon className="w-6 h-6 lg:w-10 lg:h-10"/>,
      title: 'Virtual Tours',
      description: 'Explore properties from the comfort of your home.',
    },
    {
      icon: <BadgeIcon className="w-6 h-6 lg:w-10 lg:h-10"/>,
      title: 'Affordable Pricing',
      description: 'Competitive rates for every budget.',
    },
    {
      icon: <IdCardIcon className="w-6 h-6 lg:w-10 lg:h-10"/>,
      title: 'Flexible Payment Options',
      description: 'Tailored payment plans for ease.',
    },
    {
      icon: <GroupIcon className="w-6 h-6 lg:w-10 lg:h-10"/>,
      title: 'Community Insights',
      description: 'Discover neighborhoods that fit your lifestyle.',
    },
  ];

  return (
    <section className="py-8 lg:py-24 px-4 lg:px-12 bg-background">
      <div className="max-w-8xl mx-auto">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="h6 lg:h5 text-foreground mb-4">
            <span className="block lg:inline">Discover the Facilities</span>
            <br className="hidden lg:block"/>
            <span className="block lg:inline">We Offer at Urbanet</span>
          </h2>
          <p className="tsm lg:tlg text-muted-foreground max-w-2xl mx-auto">
            With innovative solutions, market expertise, and a customer-first approach, we simplify
            the process to ensure a smooth experience.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {facilities.map((facility, index) => (
            <Card key={index} className="p-4 lg:p-6">
              <CardContent className="p-0">
                <div className="w-8 h-8 lg:w-10 lg:h-10 text-gray-800 mb-4 lg:mb-6">
                  {facility.icon}
                </div>
                <CardTitle className="tsm lg:tlg font-semibold text-gray-800 mb-2">
                  {facility.title}
                </CardTitle>
                <CardDescription className="">
                  <p className="txs lg:tmd">{facility.description}</p>
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
