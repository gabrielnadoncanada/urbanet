import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { HomeIcon } from "@radix-ui/react-icons";

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground py-8 lg:py-12 px-4 lg:px-12">
      <div className="max-w-8xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between mb-6 lg:mb-8">
          <div className="max-w-xs mb-8 lg:mb-0">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-8 lg:w-12 lg:h-12 bg-primary-foreground rounded-lg flex items-center justify-center">
                <HomeIcon />
              </div>
              <span className="text-xl lg:text-2xl font-semibold">Urbanet</span>
            </div>
            <p className="text-primary-foreground/70 text-sm lg:text-base">
              Helping You Find the Perfect Home, Every Step of the Way.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:flex gap-6 lg:gap-8">
            <div>
              <h3 className="font-semibold mb-4 lg:mb-8 text-sm lg:text-base">Listing Properties</h3>
              <div className="space-y-3 lg:space-y-4 opacity-80">
                <p className="text-primary-foreground/80 text-sm">Apartment</p>
                <p className="text-primary-foreground/80 text-sm">Houses</p>
                <p className="text-primary-foreground/80 text-sm">Villa</p>
                <p className="text-primary-foreground/80 text-sm">Penthouse</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 lg:mb-8 text-sm lg:text-base">Support</h3>
              <div className="space-y-3 lg:space-y-4 opacity-80">
                <p className="text-primary-foreground/80 text-sm">Help Center</p>
                <p className="text-primary-foreground/80 text-sm">FAQs</p>
                <p className="text-primary-foreground/80 text-sm">Contact Support</p>
              </div>
            </div>
            
            <div className="col-span-2 lg:col-span-1">
              <h3 className="font-semibold mb-4 lg:mb-8 text-sm lg:text-base">Legal</h3>
              <div className="space-y-3 lg:space-y-4 opacity-80">
                <p className="text-primary-foreground/80 text-sm">Privacy Policy</p>
                <p className="text-primary-foreground/80 text-sm">Terms of Service</p>
              </div>
            </div>
            
            <div className="col-span-2 lg:col-span-1">
              <h3 className="font-semibold mb-4 lg:mb-8 text-sm lg:text-base">Subscribe for Updates</h3>
              <p className="text-primary-foreground/80 mb-4 lg:mb-8 max-w-xs text-sm">
                Get the latest news and updates directly in your inbox.
              </p>
              <div className="flex flex-col lg:flex-row border border-primary-foreground/20 rounded-lg p-2">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 bg-transparent border-0 text-primary-foreground/70 placeholder:text-primary-foreground/50 focus-visible:ring-0 mb-2 lg:mb-0"
                />
                <Button size="sm" className="px-4 py-2 rounded-lg font-semibold">
                  Send
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <hr className="border-primary-foreground/20 mb-6 lg:mb-8" />
        
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <p className="text-primary-foreground/70 text-sm mb-4 lg:mb-0">2025 Urbanet. All rights reserved.</p>
          <div className="flex gap-4">
            {['Twitter', 'Facebook', 'Instagram', 'LinkedIn'].map((social) => (
              <Button key={social} variant="secondary" size="icon" className="w-8 h-8 rounded-full">
                <div className="w-4 h-4 bg-foreground rounded"></div>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
} 