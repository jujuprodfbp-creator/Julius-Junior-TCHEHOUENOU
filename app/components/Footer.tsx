'use client';

import { useTranslations } from 'next-intl';
import { Github, Linkedin, Instagram, Facebook, Mail, Phone } from 'lucide-react';
import { Link } from '@/i18n';

const socialLinks = [
  {
    href: 'https://github.com/jujuprodfbp-creator',
    label: 'GitHub',
    icon: Github,
  },
  {
    href: 'https://www.linkedin.com/in/junior-tchehouenou-a7b804281',
    label: 'LinkedIn',
    icon: Linkedin,
  },
  {
    href: 'https://www.instagram.com/juniorjuliustchehouenou',
    label: 'Instagram',
    icon: Instagram,
  },
  {
    href: 'https://www.facebook.com/100066386066745',
    label: 'Facebook',
    icon: Facebook,
  },
];

export function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200/50 dark:border-zinc-800/50 bg-zinc-50/50 dark:bg-zinc-950/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl text-zinc-900 dark:text-white mb-3">
              Julius<span className="text-brand-500">.</span>dev
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
              TCHEHOUENOU Nonvignon Julius Junior
              <br />
              Développeur Full Stack · Bénin 🇧🇯
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-3">
              Navigation
            </h4>
            <nav className="flex flex-col gap-2">
              {[
                { href: '/', label: tNav('home') },
                { href: '/projects', label: tNav('projects') },
                { href: '/blog', label: tNav('blog') },
                { href: '/cv', label: tNav('cv') },
                { href: '/contact', label: tNav('contact') },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact + social */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-3">
              Contact
            </h4>
            <div className="flex flex-col gap-2 mb-4">
              <a
                href="mailto:julius.tchehouenou@gmail.com"
                className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-brand-500 transition-colors"
              >
                <Mail size={14} />
                julius.tchehouenou@gmail.com
              </a>
              <a
                href="tel:+22901611332 24"
                className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-brand-500 transition-colors"
              >
                <Phone size={14} />
                +229 01 61 13 32 24
              </a>
            </div>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400
                             hover:bg-brand-500 hover:text-white transition-colors duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-zinc-200/50 dark:border-zinc-800/50 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-zinc-400 dark:text-zinc-500">
            {t('made_with')} <span className="font-medium text-zinc-600 dark:text-zinc-300">Julius Junior</span>
          </p>
          <p className="text-xs text-zinc-400 dark:text-zinc-500">
            © {year} — {t('rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
