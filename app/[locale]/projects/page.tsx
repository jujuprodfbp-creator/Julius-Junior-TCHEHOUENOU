import { setRequestLocale } from 'next-intl/server';
import { ProjectsClient } from '@/app/components/ProjectsClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projets',
  description: 'Découvrez mes projets de développement web full stack, frontend et backend.',
};

interface ProjectsPageProps {
  params: { locale: string };
}

export default function ProjectsPage({ params: { locale } }: ProjectsPageProps) {
  setRequestLocale(locale);
  return <ProjectsClient />;
}
