import { ROUTES } from '@/i18n/routing';

export const residentialLinks = [
  { titleKey: 'homeExtensions', href: ROUTES.RESIDENTIAL_HOME_EXTENSIONS },
  { titleKey: 'doorsWindows', href: ROUTES.RESIDENTIAL_DOORS_WINDOWS },
  { titleKey: 'kitchenBathroom', href: ROUTES.RESIDENTIAL_KITCHEN_BATHROOM_RENOVATIONS },
  { titleKey: 'flooring', href: ROUTES.RESIDENTIAL_FLOORING_INSTALLATION },
] as const; 