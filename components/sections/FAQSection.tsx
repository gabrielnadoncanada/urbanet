import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQSection() {
  return (
    <section className="py-8 lg:py-24 px-4 lg:px-12 bg-background">
      <div className="max-w-8xl mx-auto flex flex-col lg:grid grid-flow-col grid-cols-2 grid-rows-2 gap-8 lg:gap-16">
        <div>
          <h2 className="h6 lg:h5 text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="tsm lg:tlg text-muted-foreground">
            Answers to your real estate questions and concerns
          </p>
        </div>

        <div className="mb-4 place-content-end max-lg:order-last">
          <h3 className="tsm lg:tmd font-medium text-foreground mb-2">Still have Questions?</h3>
          <p className="txs lg:tsm text-muted-foreground mb-4">
            We're here to help! Don't hesitate—ask away and get the answers you need.
          </p>
          <Button size="lg">
            <a href="/contact">Contact Us</a>
          </Button>
        </div>
        <div className="flex-1 row-span-2">
          <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
            <AccordionItem value="item-1" className="border-b border-border">
              <AccordionTrigger className="tsm lg:tmd font-medium text-foreground hover:no-underline">
                How do I list my property on Urbanet?
              </AccordionTrigger>
              <AccordionContent className="txs lg:tsm text-muted-foreground">
                Simply create an account, add your property details, and submit for verification.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-b border-border">
              <AccordionTrigger className="tsm lg:tmd font-medium text-foreground hover:no-underline">
                Are the properties verified?
              </AccordionTrigger>
              <AccordionContent className="txs lg:tsm text-muted-foreground">
                Yes, all properties go through our comprehensive verification process.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-b border-border">
              <AccordionTrigger className="tsm lg:tmd font-medium text-foreground hover:no-underline">
                Can I schedule virtual tours?
              </AccordionTrigger>
              <AccordionContent className="txs lg:tsm text-muted-foreground">
                Absolutely! Virtual tours are available for most of our properties.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-b border-border">
              <AccordionTrigger className="tsm lg:tmd font-medium text-foreground hover:no-underline">
                What payment methods are accepted?
              </AccordionTrigger>
              <AccordionContent className="txs lg:tsm text-muted-foreground">
                We accept various payment methods including bank transfers, credit cards, and
                financing options.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-b border-border">
              <AccordionTrigger className="tsm lg:tmd font-medium text-foreground hover:no-underline">
                Can I work with a specific agent?
              </AccordionTrigger>
              <AccordionContent className="txs lg:tsm text-muted-foreground">
                Yes, you can request to work with a specific agent based on your preferences.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border-b border-border">
              <AccordionTrigger className="tsm lg:tmd font-medium text-foreground hover:no-underline">
                How often are the listings updated?
              </AccordionTrigger>
              <AccordionContent className="txs lg:tsm text-muted-foreground">
                Our listings are updated in real-time to ensure you have access to the latest
                properties.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
