import { setRequestLocale } from 'next-intl/server';
import type { Locale } from 'next-intl';
import { generateMetadataFor } from '@/lib/metadata';

export const locales = ['en', 'fr'];

export function getStaticLocaleParams() {
  return locales.map((locale) => ({ locale }));
}

export const generateStaticParams = getStaticLocaleParams;

export function withLocale<
  P extends { params: { locale: Locale } } | { params: Promise<{ locale: Locale }> },
>(namespace: string, PageComponent: (props: P) => Promise<React.JSX.Element> | React.JSX.Element) {
  async function PageWrapper(props: any) {
    const params = await props.params;
    setRequestLocale(params.locale);
    return <PageComponent {...props} />;
  }

  (PageWrapper as any).generateMetadata = generateMetadataFor(namespace);
  return PageWrapper as typeof PageWrapper & {
    generateMetadata: ReturnType<typeof generateMetadataFor>;
  };
}
