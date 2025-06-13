import { defineRouting } from 'next-intl/routing';

// List of supported route paths
export const ROUTES = {
  HOME: '/',
  RESIDENTIAL_CONSTRUCTION_RENOVATION: '/residential-construction-renovation',
  CONTACT: '/contact',
  ABOUT_US: '/about-us',
  COMMERCIAL_CONSTRUCTION_RENOVATION: '/commercial-construction-renovation',
  DISASTER_RECOVERY: '/disaster-recovery',
  CUSTOM_CABINETS_CLOSETS: '/custom-cabinets-closets',
  RESIDENTIAL_KITCHEN_BATHROOM_RENOVATIONS: '/residential/kitchen-bathroom-renovations',
  RESIDENTIAL_FLOORING_INSTALLATION: '/residential/flooring-installation',
  RESIDENTIAL_DOORS_WINDOWS: '/residential/doors-windows',
  RESIDENTIAL_HOME_EXTENSIONS: '/residential/home-extensions',
} as const;

export type Route = (typeof ROUTES)[keyof typeof ROUTES];

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['fr', 'en'],

  // Used when no locale matches
  defaultLocale: 'en',
  pathnames: {
    [ROUTES.HOME]: '/',
    [ROUTES.RESIDENTIAL_CONSTRUCTION_RENOVATION]: {
      fr: '/construction-renovation-residentielle',
    },
    [ROUTES.CONTACT]: {
      fr: '/contact',
    },
    [ROUTES.ABOUT_US]: {
      fr: '/a-propos',
    },
    [ROUTES.COMMERCIAL_CONSTRUCTION_RENOVATION]: {
      fr: '/construction-renovation-commerciale',
    },
    [ROUTES.DISASTER_RECOVERY]: {
      fr: '/recuperation-apres-sinistre',
    },
    [ROUTES.CUSTOM_CABINETS_CLOSETS]: {
      fr: '/armoires-placards-sur-mesure',
    },
    [ROUTES.RESIDENTIAL_KITCHEN_BATHROOM_RENOVATIONS]: {
      fr: '/residentiel/renovations-cuisine-salle-de-bain',
    },
    [ROUTES.RESIDENTIAL_FLOORING_INSTALLATION]: {
      fr: '/residentiel/installation-planchers',
    },
    [ROUTES.RESIDENTIAL_DOORS_WINDOWS]: {
      fr: '/residentiel/portes-fenetres',
    },
    [ROUTES.RESIDENTIAL_HOME_EXTENSIONS]: {
      fr: '/residentiel/rallonges-maison',
    },
  },
});
