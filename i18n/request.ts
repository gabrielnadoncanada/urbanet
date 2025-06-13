import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';
import fs from 'fs/promises';
import path from 'path';

async function loadAllLocaleNamespaces(locale: string) {
  const dir = path.join(process.cwd(), 'messages', locale);
  const files = await fs.readdir(dir);

  const namespaces = await Promise.all(
    files
      .filter((f) => f.endsWith('.json'))
      .map(async (f) => {
        const filePath = path.join(dir, f);
        const ns = f.replace(/\.json$/, '');
        const content = await fs.readFile(filePath, 'utf-8');
        return { [ns]: JSON.parse(content) };
      }),
  );
  return Object.assign({}, ...namespaces);
}

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;

  const messages = await loadAllLocaleNamespaces(locale);

  return {
    locale,
    messages,
  };
});
