import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { useParams } from 'next/navigation';

export async function generateTranslatedMetadata(
  locale: string,
  namespace: string,
  keys: { title?: string; description?: string } = {},
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace });

  return {
    title: t(keys.title ?? 'seo.meta_title'),
    description: t(keys.description ?? 'seo.meta_description'),
  };
}

export function generateMetadataFor(
  namespace: string,
  keys?: { title?: string; description?: string },
) {
  return async function ({ params }: { params: { locale: string } }) {
    return generateTranslatedMetadata(params.locale, namespace, keys);
  };
}
