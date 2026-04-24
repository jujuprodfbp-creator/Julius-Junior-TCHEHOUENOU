import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://julius-tchehouenou.vercel.app'),
  title: {
    default: 'Julius Junior Tchehouenou — Développeur Full Stack',
    template: '%s | Julius Junior',
  },
  description:
    'Portfolio professionnel de Julius Junior Tchehouenou, étudiant développeur Full Stack à l\'IUT de Parakou. Spécialisé en Next.js, TypeScript, React.',
  keywords: ['développeur', 'full stack', 'next.js', 'react', 'portfolio', 'bénin', 'parakou'],
  authors: [{ name: 'Julius Junior Tchehouenou' }],
  creator: 'Julius Junior Tchehouenou',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://julius-tchehouenou.vercel.app',
    title: 'Julius Junior Tchehouenou — Développeur Full Stack',
    description: 'Portfolio de Julius Junior Tchehouenou, développeur Full Stack.',
    siteName: 'Julius Junior Portfolio',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Julius Junior Tchehouenou — Développeur Full Stack',
    description: 'Portfolio de Julius Junior Tchehouenou, développeur Full Stack.',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
