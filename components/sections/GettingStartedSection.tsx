import React from 'react';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { ChevronRightIcon, ChevronDownIcon } from '@radix-ui/react-icons';

export default function GettingStartedSection() {
  const steps = [
    {
      title: 'Browse Listings',
      description: 'Find diverse properties in Urbanet',
    },
    {
      title: 'Contact Agent',
      description: 'Ask, schedule, and get tailored deals',
    },
    {
      title: 'Schedule Visits',
      description: 'Pick a time, and our agents ensure a hassle-free viewing',
    },
    {
      title: 'Close the Deal',
      description: 'Close your deal confidently with expert guidance',
    },
  ];

  return (
    <section className="py-8 lg:py-24 px-4 lg:px-12 bg-background">
      <div className="max-w-8xl mx-auto">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="h6 lg:h5 text-foreground mb-4">Getting Started with Urbanet</h2>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-6">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <Card className="bg-secondary p-4 lg:p-6 w-full lg:max-w-xs">
                <CardContent className="p-0">
                  <CardTitle className="tsm lg:tlg font-semibold text-foreground mb-2">
                    {step.title}
                  </CardTitle>
                  <CardDescription className="txs lg:tsm">{step.description}</CardDescription>
                </CardContent>
              </Card>
              {index < 3 && (
                <div className="w-6 h-6 text-black hidden lg:block">
                  <ChevronRightIcon />
                </div>
              )}
              {index < 3 && (
                <div className="w-6 h-6 text-black lg:hidden rotate-90">
                  <ChevronDownIcon />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
