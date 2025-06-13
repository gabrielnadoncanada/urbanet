import type React from 'react';
import { Locale } from 'next-intl';
import type { Route } from '@/i18n/routing';
import { VariantProps } from 'class-variance-authority';
import { sectionVariants } from '@/components/layout/section';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: Route;
  imageSrc?: string;
  className?: string;
}

export interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

export interface PageHeaderProps {
  title: string;
  description: string;
  image?: string;
  actions?: React.ReactNode;
}

export interface HeroSectionProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

export interface EmergencyCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
  borderColor: string;
}

export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface ServiceFeatureProps {
  title: string;
  description: string;
  imageSrc: string;
  linkHref: string;
}

export interface TextImageSectionProps {
  title: string;
  descriptions: string[];
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  ctaText?: string;
  ctaLink?: string;
  checklist?: string[];
  variant?: 'default' | 'primary' | 'secondary' | 'gray' | 'muted';
  container?: 'default' | 'narrow' | 'wide' | 'full' | 'none';
  spacing?: 'default' | 'compact' | 'spacious' | 'none';
  children?: React.ReactNode;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface FeaturesGridSectionProps {
  title?: string;
  description?: string;
  features: FeatureItem[];
  columns?: 2 | 3 | 4;
  variant?: 'default' | 'primary' | 'secondary' | 'gray' | 'muted';
  container?: 'default' | 'narrow' | 'wide' | 'full' | 'none';
  spacing?: 'default' | 'compact' | 'spacious' | 'none';
  withBorder?: boolean;
  actions?: React.ReactNode;
}

export interface ChecklistSectionProps {
  title: string;
  description?: string;
  items: string[];
  variant?: 'default' | 'primary' | 'secondary' | 'gray' | 'muted';
  container?: 'default' | 'narrow' | 'wide' | 'full' | 'none';
  spacing?: 'default' | 'compact' | 'spacious' | 'none';
}

export interface DoubleChecklistProps {
  title?: string;
  firstSection: {
    title: string;
    description?: string;
    items: string[];
  };
  secondSection: {
    title: string;
    description?: string;
    items: string[];
  };
  variant?: 'default' | 'primary' | 'secondary' | 'gray' | 'muted';
  container?: 'default' | 'narrow' | 'wide' | 'full' | 'none';
  spacing?: 'default' | 'compact' | 'spacious' | 'none';
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface ProcessStepsProps {
  title?: string;
  description?: string;
  steps: ProcessStep[];
  columns?: 2 | 3 | 4;
  variant?: 'default' | 'primary' | 'secondary' | 'gray' | 'muted';
  container?: 'default' | 'narrow' | 'wide' | 'full' | 'none';
  spacing?: 'default' | 'compact' | 'spacious' | 'none';
}

export type LocaleProps = {
  params: Promise<{ locale: Locale }>;
};

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  as?: React.ElementType;
  container?: 'default' | 'narrow' | 'wide' | 'full' | 'none';
}
