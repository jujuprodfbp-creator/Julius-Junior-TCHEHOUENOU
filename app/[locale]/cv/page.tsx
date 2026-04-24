'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Download, GraduationCap, Briefcase, Code, Languages } from 'lucide-react';
import Image from 'next/image';

export const dynamic = 'force-dynamic';

export default function CVPage() {
  const t = useTranslations('cv');

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
        <p className="text-zinc-500 dark:text-zinc-400 text-lg mb-6">{t('subtitle')}</p>
        <a
          href="/cv.pdf"
          download="CV_Julius_Junior_Tchehouenou.pdf"
          className="btn-primary inline-flex"
        >
          <Download size={18} />
          {t('download')}
        </a>
        <div className="w-16 h-1 bg-gradient-to-r from-brand-500 to-accent-500 rounded-full mx-auto mt-6" />
      </motion.div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left column */}
        <div className="lg:col-span-1 space-y-6">
          {/* Identity */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass rounded-2xl p-6 text-center"
          >
            <div className="w-20 h-20 rounded-full overflow-hidden bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center mx-auto mb-4">
              <Image
                src="/images/profile.jpg"
                alt="Julius Junior Tchehouenou"
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="font-display text-lg text-zinc-900 dark:text-white mb-1">
              Julius Junior<br />Tchehouenou
            </h2>
            <p className="text-sm text-brand-600 dark:text-brand-400 font-medium mb-3">Développeur Full Stack</p>
            <div className="text-xs text-zinc-500 dark:text-zinc-400 space-y-1">
              <p>📧 julius.tchehouenou@gmail.com</p>
              <p>📱 +229 01 61 13 32 24</p>
              <p>📍 Parakou, Bénin 🇧🇯</p>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="font-display text-base text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
              <Code size={16} className="text-brand-500" />
              {t('skills')}
            </h3>
            {['Next.js', 'React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'MongoDB', 'Git', 'Django'].map((skill) => (
              <span key={skill} className="tech-badge mr-1.5 mb-1.5 inline-block">{skill}</span>
            ))}
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="font-display text-base text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
              <Languages size={16} className="text-brand-500" />
              {t('languages')}
            </h3>
            {[
              { lang: 'Français', level: 'Natif' },
              { lang: 'Anglais', level: 'Intermédiaire' },
            ].map(({ lang, level }) => (
              <div key={lang} className="flex justify-between items-center py-1.5 border-b border-zinc-100 dark:border-zinc-800 last:border-0">
                <span className="text-sm text-zinc-700 dark:text-zinc-300">{lang}</span>
                <span className="text-xs font-mono text-zinc-400">{level}</span>
              </div>
            ))}
          </motion.div>

          {/* Interests */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="font-display text-base text-zinc-900 dark:text-white mb-4">{t('interests')}</h3>
            <div className="space-y-2">
              <div className="text-sm text-zinc-600 dark:text-zinc-300">• Développement open source</div>
              <div className="text-sm text-zinc-600 dark:text-zinc-300">• Lecture de blogs tech</div>
              <div className="text-sm text-zinc-600 dark:text-zinc-300">• Jeux vidéo</div>
              <div className="text-sm text-zinc-600 dark:text-zinc-300">• Sport (football)</div>
              <div className="text-sm text-zinc-600 dark:text-zinc-300">• Voyages et découvertes culturelles</div>
            </div>
          </motion.div>
        </div>

        {/* Right column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Profile */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="font-display text-lg text-zinc-900 dark:text-white mb-4">{t('profile')}</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
              {t('profile_desc')}
            </p>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="font-display text-lg text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
              <GraduationCap size={20} className="text-brand-500" />
              {t('education')}
            </h3>
            <div className="relative pl-4 border-l-2 border-brand-200 dark:border-brand-800 space-y-6">
              {[
                {
                  degree: 'Licence en Informatique de Gestion',
                  school: 'IUT · Université de Parakou',
                  period: '2026 – En cours',
                  desc: 'Formation spécialisée en développement web, bases de données, réseaux et gestion de systèmes d\'information.',
                },
                {
                  degree: 'Baccalauréat Série D',
                  school: 'CEG1-Lokossa',
                  period: '2023',
                  desc: 'Baccalauréat scientifique mention Bien.',
                },
              ].map((edu) => (
                <div key={edu.degree} className="relative">
                  <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-brand-500 border-2 border-white dark:border-zinc-900" />
                  <div className="flex flex-col sm:flex-row sm:justify-between mb-1">
                    <h4 className="font-medium text-zinc-900 dark:text-white text-sm">{edu.degree}</h4>
                    <span className="text-xs font-mono text-brand-600 dark:text-brand-400">{edu.period}</span>
                  </div>
                  <p className="text-sm text-brand-600 dark:text-brand-400 mb-1">{edu.school}</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">{edu.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="font-display text-lg text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
              <Briefcase size={20} className="text-brand-500" />
              {t('experience')}
            </h3>
            <div className="relative pl-4 border-l-2 border-accent-200 dark:border-accent-800 space-y-6">
              {[
                {
                  role: 'Développeur Web Full Stack (Freelance)',
                  company: 'Projets Personnels & Clients',
                  period: '2023 – Présent',
                  desc: 'Conception et développement d\'applications web complètes. Stack principale : Next.js, TypeScript, Node.js, PostgreSQL.',
                },
                {
                  role: 'Stage en Développement Web',
                  company: 'Entreprise locale · Parakou',
                  period: 'Été 2023',
                  desc: 'Intégration de maquettes Figma, développement de fonctionnalités front-end avec React. Collaboration en équipe Agile.',
                },
              ].map((xp) => (
                <div key={xp.role} className="relative">
                  <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-accent-500 border-2 border-white dark:border-zinc-900" />
                  <div className="flex flex-col sm:flex-row sm:justify-between mb-1">
                    <h4 className="font-medium text-zinc-900 dark:text-white text-sm">{xp.role}</h4>
                    <span className="text-xs font-mono text-accent-600 dark:text-accent-400">{xp.period}</span>
                  </div>
                  <p className="text-sm text-accent-600 dark:text-accent-400 mb-1">{xp.company}</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">{xp.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
