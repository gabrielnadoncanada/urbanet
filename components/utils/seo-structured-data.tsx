const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Dilamco',
  url: 'https://www.dilamco.com',
  telephone: '+1-514-820-0773',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1234 Example Street',
    addressLocality: 'Montreal',
    addressRegion: 'QC',
    postalCode: 'H1A 1A1',
    addressCountry: 'CA',
  },
};

export default function SeoStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
