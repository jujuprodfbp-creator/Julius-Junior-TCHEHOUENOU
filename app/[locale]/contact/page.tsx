import { setRequestLocale } from 'next-intl/server';
import { ContactClient } from '@/app/components/ContactClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contactez Julius Junior Tchehouenou pour votre projet web ou une collaboration.',
};

interface ContactPageProps {
  params: { locale: string };
}

export default function ContactPage({ params: { locale } }: ContactPageProps) {
  setRequestLocale(locale);
  return <ContactClient />;
}
