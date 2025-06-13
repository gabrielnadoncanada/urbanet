import React from 'react';
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQSection() {
  return (
    <section className="py-8 lg:py-24 px-4 lg:px-12 bg-background">
      <div className="max-w-8xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16">
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h2 className="text-4xl lg:text-5xl font-semibold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base lg:text-xl text-muted-foreground mb-6 lg:mb-8">
              Answers to your real estate questions and concerns
            </p>
          </div>


          <div className="mb-4">
            <h3 className="text-base lg:text-lg font-medium text-foreground mb-2">Still have Questions?</h3>
            <p className="text-muted-foreground mb-4 text-sm lg:text-base">
              We're here to help! Don't hesitate—ask away and get the answers you need.
            </p>
            <Button size="lg" className="w-auto px-6 py-4 rounded-lg font-semibold">
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </div>

        <div className="flex-1">
          <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
            <AccordionItem value="item-1" className="border-b border-border">
              <AccordionTrigger className="text-sm lg:text-lg font-medium text-foreground hover:no-underline">
                How do I list my property on Urbanet?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm lg:text-base">
                Simply create an account, add your property details, and submit for verification.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-b border-border">
              <AccordionTrigger className="text-sm lg:text-lg font-medium text-foreground hover:no-underline">
                Are the properties verified?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm lg:text-base">
                Yes, all properties go through our comprehensive verification process.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-b border-border">
              <AccordionTrigger className="text-sm lg:text-lg font-medium text-foreground hover:no-underline">
                Can I schedule virtual tours?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm lg:text-base">
                Absolutely! Virtual tours are available for most of our properties.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-b border-border">
              <AccordionTrigger className="text-sm lg:text-lg font-medium text-foreground hover:no-underline">
                What payment methods are accepted?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm lg:text-base">
                We accept various payment methods including bank transfers, credit cards, and financing options.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-b border-border">
              <AccordionTrigger className="text-sm lg:text-lg font-medium text-foreground hover:no-underline">
                Can I work with a specific agent?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm lg:text-base">
                Yes, you can request to work with a specific agent based on your preferences.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border-b border-border">
              <AccordionTrigger className="text-sm lg:text-lg font-medium text-foreground hover:no-underline">
                How often are the listings updated?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm lg:text-base">
                Our listings are updated in real-time to ensure you have access to the latest properties.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
} 