"use client"
import React from 'react';
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  HomeIcon,
  HamburgerMenuIcon
} from "@radix-ui/react-icons";
import { cn } from '@/lib/utils';


export default function Header() {

  return (
    <header
      className={cn(
        'absolute top-0 left-0 right-0 z-[100] transition-transform duration-200 will-change-transform',
      )}
    >
      <nav className="flex max-lg:justify-between items-center px-4 lg:px-12 py-8">
        <div className="flex items-center gap-3 lg:gap-4">
          <div className="w-8 h-8 lg:w-12 lg:h-12 bg-white rounded-lg flex items-center justify-center">
            <HomeIcon />
          </div>
          <span className="text-xl lg:text-2xl font-semibold text-gray-900">Urbanet</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden flex-1 justify-between lg:flex items-center gap-12">
          <NavigationMenu className='mx-auto'>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink href="/" className="text-lg font-medium text-gray-900 px-4 py-2 hover:bg-white/10 rounded-md transition-colors">
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-lg text-gray-200">
                  About
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px]">
                    <NavigationMenuLink href="/about-us" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100">
                      <div className="text-sm font-medium leading-none">About Us</div>
                      <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                        Learn about our company and mission
                      </p>
                    </NavigationMenuLink>
                    <NavigationMenuLink href="/about-us#team" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100">
                      <div className="text-sm font-medium leading-none">Our Team</div>
                      <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                        Meet the people behind Urbanet
                      </p>
                    </NavigationMenuLink>
                    <NavigationMenuLink href="/about-us#values" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100">
                      <div className="text-sm font-medium leading-none">Our Values</div>
                      <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                        Discover what drives us forward
                      </p>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-lg text-gray-200">
                  Listings
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[500px] grid-cols-2">
                    <NavigationMenuLink href="/listings/buy" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100">
                      <div className="text-sm font-medium leading-none">Buy Property</div>
                      <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                        Find your dream home
                      </p>
                    </NavigationMenuLink>
                    <NavigationMenuLink href="/listings/sell" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100">
                      <div className="text-sm font-medium leading-none">Sell Property</div>
                      <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                        List your property with us
                      </p>
                    </NavigationMenuLink>
                    <NavigationMenuLink href="/listings/rent" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100">
                      <div className="text-sm font-medium leading-none">Rent Property</div>
                      <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                        Find rental properties
                      </p>
                    </NavigationMenuLink>
                    <NavigationMenuLink href="/listings/commercial" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100">
                      <div className="text-sm font-medium leading-none">Commercial</div>
                      <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                        Commercial real estate
                      </p>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink href="/contact" className="text-lg text-gray-200 px-4 py-2 hover:bg-white/10 rounded-md transition-colors">
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button variant="outline" className="px-6 py-3 border-white text-white  font-semibold bg-transparent hover:bg-white/10">
            Contact Agent
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <HamburgerMenuIcon />
        </div>
      </nav>
    </header>
  );
} 