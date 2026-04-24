import { useTranslations } from 'next-intl';
import { HeroSection } from '@/app/components/HeroSection';
import { SkillsSection } from '@/app/components/SkillsSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Julius Junior — Développeur Full Stack',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SkillsSection />
    </>
  );
}
