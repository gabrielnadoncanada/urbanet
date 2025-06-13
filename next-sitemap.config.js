const SITE_URL = process.env.SITE_URL || 'https://example.com';

const locales = ['en', 'fr'];
const defaultLocale = 'en';

const pathnames = {
  '/': '/',
  '/residential-construction-renovation': {
    fr: '/construction-renovation-residentielle',
  },
  '/contact': {
    fr: '/contact',
  },
  '/about-us': {
    fr: '/a-propos',
  },
  '/commercial-construction-renovation': {
    fr: '/construction-renovation-commerciale',
  },
  '/disaster-recovery': {
    fr: '/recuperation-apres-sinistre',
  },
  '/custom-cabinets-closets': {
    fr: '/armoires-placards-sur-mesure',
  },
  '/residential/kitchen-bathroom-renovations': {
    fr: '/residentiel/renovations-cuisine-salle-de-bain',
  },
  '/residential/flooring-installation': {
    fr: '/residentiel/installation-planchers',
  },
  '/residential/doors-windows': {
    fr: '/residentiel/portes-fenetres',
  },
  '/residential/home-extensions': {
    fr: '/residentiel/rallonges-maison',
  },
};

function getPath(path, locale) {
  const mapping = pathnames[path];
  const p = typeof mapping === 'string' ? mapping : mapping?.[locale] || path;
  if (locale !== defaultLocale && !p.startsWith(`/${locale}`) && p !== '/') {
    return `/${locale}${p}`;
  }
  return p;
}

module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  transform: async (config, path) => {
    return {
      loc: `${SITE_URL}${getPath(path, defaultLocale)}`,
      alternateRefs: locales.map((locale) => ({
        href: `${SITE_URL}${getPath(path, locale)}`,
        hreflang: locale,
      })),
    };
  },
};
