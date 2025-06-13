import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';

function NotFound() {
  const t = useTranslations('notFound');
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center gap-6">
      <h1 className="font-bold">{t('title')}</h1>
      <p className="text-muted-foreground">{t('description')}</p>
      <div className="flex gap-4 pt-4">
        <Link href="/">
          <Button>{t('home')}</Button>
        </Link>
        <Link href="/contact">
          <Button variant="outline">{t('contact')}</Button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
