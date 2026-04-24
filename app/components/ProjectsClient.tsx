'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Github, ExternalLink, Wifi, WifiOff } from 'lucide-react';
import { projects, categories, type Category } from '@/data/projects';
import { useLocale } from 'next-intl';

export function ProjectsClient() {
  const t = useTranslations('projects');
  const locale = useLocale() as 'fr' | 'en';
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filtered = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const categoryLabels: Record<Category, string> = {
    all: t('filter_all'),
    fullstack: 'Full Stack',
    frontend: 'Frontend',
    backend: 'Backend',
  };

  return (
    <section className="section-container">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="section-title">{t('title')}</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">{t('subtitle')}</p>
        <div className="w-16 h-1 bg-gradient-to-r from-brand-500 to-accent-500 rounded-full mx-auto mt-4" />
      </motion.div>

      {/* Category filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap justify-center gap-2 mb-12"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
              activeCategory === cat
                ? 'bg-brand-600 text-white border-brand-600 shadow-lg shadow-brand-500/25'
                : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-700 hover:border-brand-400 hover:text-brand-600 dark:hover:text-brand-400'
            }`}
          >
            {categoryLabels[cat]}
          </button>
        ))}
      </motion.div>

      {/* Projects grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, idx) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="group glass rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-brand-500/10 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Project image */}
              <div className="relative h-48 bg-gradient-to-br from-brand-900 to-accent-900 overflow-hidden">
                {/* Placeholder gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-600/30 to-accent-600/30 flex items-center justify-center">
                  <span className="font-display text-white/20 text-6xl font-bold select-none">
                    {project.title.charAt(0)}
                  </span>
                </div>

                {/* Online badge */}
                <div className="absolute top-3 left-3">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                    project.isOnline
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : 'bg-zinc-500/20 text-zinc-400 border border-zinc-500/30'
                  }`}>
                    {project.isOnline ? <Wifi size={10} /> : <WifiOff size={10} />}
                    {project.isOnline ? t('online') : 'Local'}
                  </span>
                </div>

                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-brand-500/30 text-brand-300 border border-brand-500/30">
                      ★ Featured
                    </span>
                  </div>
                )}

                {/* Hover overlay with links */}
                <div className="absolute inset-0 bg-zinc-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm font-medium transition-colors border border-white/20"
                    aria-label={`${project.title} GitHub`}
                  >
                    <Github size={15} /> {t('github')}
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-brand-600/80 hover:bg-brand-600 text-white rounded-lg text-sm font-medium transition-colors"
                      aria-label={`${project.title} live site`}
                    >
                      <ExternalLink size={15} /> {t('live')}
                    </a>
                  )}
                </div>
              </div>

              {/* Card content */}
              <div className="p-5">
                <h3 className="font-display text-lg text-zinc-900 dark:text-white mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4 line-clamp-3">
                  {project.description[locale]}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="tech-badge">+{project.technologies.length - 4}</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="text-center text-zinc-400 py-20">{t('no_projects')}</p>
      )}
    </section>
  );
}
