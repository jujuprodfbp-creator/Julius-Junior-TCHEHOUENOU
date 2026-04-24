import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import { ThemeProvider } from '@/app/components/ThemeProvider';
import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';
import { locales } from '@/i18n';
import { notFound } from 'next/navigation';

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params: { locale } }: LocaleLayoutProps) {
  // Validate locale
  if (!locales.includes(locale as any)) notFound();

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="noise-overlay">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <NextIntlClientProvider messages={messages}>
            <div className="relative min-h-screen flex flex-col">
              {/* Background mesh gradient */}
              <div className="fixed inset-0 -z-10 bg-mesh-dark dark:bg-mesh-dark bg-white dark:bg-zinc-950 pointer-events-none" />
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
