'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import {
  Github,
  Linkedin,
  Instagram,
  Facebook,
  MessageCircle,
  ArrowDown,
  Download,
  FolderOpen,
} from 'lucide-react';
import { Link } from '@/i18n';

const socialLinks = [
  {
    href: 'https://github.com/jujuprodfbp-creator',
    icon: Github,
    label: 'GitHub',
    color: 'hover:text-zinc-900 dark:hover:text-white',
  },
  {
    href: 'https://www.linkedin.com/in/junior-tchehouenou-a7b804281',
    icon: Linkedin,
    label: 'LinkedIn',
    color: 'hover:text-blue-600',
  },
  {
    href: 'https://whatsapp.com/dl/',
    icon: MessageCircle,
    label: 'WhatsApp',
    color: 'hover:text-green-500',
  },
  {
    href: 'https://www.instagram.com/juniorjuliustchehouenou',
    icon: Instagram,
    label: 'Instagram',
    color: 'hover:text-pink-500',
  },
  {
    href: 'https://www.facebook.com/100066386066745',
    icon: Facebook,
    label: 'Facebook',
    color: 'hover:text-blue-500',
  },
];

export function HeroSection() {
  const t = useTranslations('home');

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-500/10 dark:bg-brand-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-500/10 dark:bg-accent-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-400/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <div className="fade-up inline-flex items-center gap-2 mb-6" style={{ animationDelay: '0.1s' }}>
              <span className="flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800/80 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-700">
                {t('status')}
              </span>
            </div>

            <p className="fade-up text-zinc-500 dark:text-zinc-400 text-lg mb-2 font-body" style={{ animationDelay: '0.15s' }}>
              {t('greeting')}
            </p>

            <h1 className="fade-up text-5xl md:text-6xl lg:text-7xl font-display mb-4 leading-tight" style={{ animationDelay: '0.2s' }}>
              <span className="text-zinc-900 dark:text-white">Julius</span>{' '}
              <span className="gradient-text">Junior</span>
            </h1>

            <h2 className="fade-up text-xl md:text-2xl font-body font-light text-zinc-500 dark:text-zinc-400 mb-6" style={{ animationDelay: '0.25s' }}>
              {t('role')}
            </h2>

            <p className="fade-up text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8 text-base md:text-lg" style={{ animationDelay: '0.3s' }}>
              {t('bio')}
            </p>

            <div className="fade-up flex flex-wrap gap-4 justify-center lg:justify-start mb-10" style={{ animationDelay: '0.35s' }}>
              <Link href="/projects" className="btn-primary">
                <FolderOpen size={18} />
                {t('cta_projects')}
              </Link>
              <a href="/cv.pdf" download className="btn-secondary">
                <Download size={18} />
                {t('cta_cv')}
              </a>
            </div>

            <div className="fade-up flex items-center gap-4 justify-center lg:justify-start" style={{ animationDelay: '0.4s' }}>
              {socialLinks.map(({ href, icon: Icon, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`p-2.5 rounded-xl glass text-zinc-500 dark:text-zinc-400 ${color} transition-colors duration-200`}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="flex-shrink-0 order-1 lg:order-2 fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative animate-float">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-400 via-accent-500 to-brand-600 blur-md opacity-40 scale-105" />
              <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full p-1 bg-gradient-to-br from-brand-400 to-accent-600 animate-glow">
                <div className="w-full h-full rounded-full overflow-hidden bg-zinc-200 dark:bg-zinc-800">
                  <Image
                    src="/images/profile.jpg"
                    alt="Julius Junior Tchehouenou"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                    priority
                    onLoad={() => {
                      const initials = document.querySelector('.profile-initials') as HTMLElement;
                      if (initials) initials.style.display = 'none';
                    }}
                  />
                  <div className="profile-initials absolute inset-1 rounded-full flex items-center justify-center bg-gradient-to-br from-brand-600 to-accent-600">
                    <span className="text-white font-display text-4xl font-bold select-none">JJ</span>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-2 -right-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-xl px-3 py-2 shadow-lg fade-up" style={{ animationDelay: '0.5s' }}>
                <p className="text-xs font-mono font-semibold text-brand-600 dark:text-brand-400">{'<dev />'}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-20 max-w-lg mx-auto lg:mx-0 fade-up" style={{ animationDelay: '0.6s' }}>
          {[
            { value: '6+', label: t('stats_projects') },
            { value: '18+', label: t('stats_months') },
            { value: '12+', label: t('stats_tech') },
          ].map(({ value, label }) => (
            <div key={label} className="text-center lg:text-left">
              <p className="text-3xl font-display font-bold gradient-text">{value}</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 fade-in" style={{ animationDelay: '0.8s' }}>
        <span className="text-xs text-zinc-400 font-mono">{t('scroll')}</span>
        <div className="animate-bounce">
          <ArrowDown size={16} className="text-zinc-400" />
        </div>
      </div>
    </section>
  );
}
