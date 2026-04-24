import { ProjectsClient } from '@/app/components/ProjectsClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projets',
  description: 'Découvrez mes projets de développement web full stack, frontend et backend.',
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
