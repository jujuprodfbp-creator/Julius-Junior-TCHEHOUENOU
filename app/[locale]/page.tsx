import { setRequestLocale } from 'next-intl/server';
import { HeroSection } from '@/app/components/HeroSection';
import { SkillsSection } from '@/app/components/SkillsSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Julius Junior — Développeur Full Stack',
};

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <SkillsSection />
    </>
  );
}
