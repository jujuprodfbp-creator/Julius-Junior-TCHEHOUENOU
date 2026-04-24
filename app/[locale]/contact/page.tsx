import { ContactClient } from '@/app/components/ContactClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contactez Julius Junior Tchehouenou pour votre projet web ou une collaboration.',
};

export default function ContactPage() {
  return <ContactClient />;
}
