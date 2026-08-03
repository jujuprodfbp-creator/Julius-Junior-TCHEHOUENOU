'use client';

import { useTranslations } from 'next-intl';

const skillGroups = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 88 },
      { name: 'Next.js', level: 85 },
      { name: 'React Native', level: 75 },
      { name: 'TypeScript', level: 78 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Django', level: 82 },
      { name: 'Django REST Framework', level: 80 },
      { name: 'Node.js', level: 75 },
      { name: 'NestJS', level: 65 },
    ],
  },
  {
    category: 'Données & Outils',
    skills: [
      { name: 'PostgreSQL', level: 78 },
      { name: 'MongoDB', level: 70 },
      { name: 'Git / GitHub', level: 85 },
    ],
  },
  {
    category: 'IA',
    skills: [
      { name: 'Prompt Engineering', level: 80 },
      { name: 'APIs LLM (OpenAI, Anthropic)', level: 72 },
    ],
  },
];

export function SkillsSection() {
  const t = useTranslations('home');

  return (
    <section className="py-24 relative">
      <div className="section-container">
        <div className="mb-16 text-center fade-up" style={{ animationDelay: '0.1s' }}>
          <h2 className="section-title">{t('skills_title')}</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-500 to-accent-500 rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillGroups.map((group, groupIdx) => (
            <div
              key={group.category}
              className="glass rounded-2xl p-6 fade-up"
              style={{ animationDelay: `${0.15 + groupIdx * 0.05}s` }}
            >
              <h3 className="font-display text-lg text-zinc-900 dark:text-white mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-500" />
                {group.category}
              </h3>
              <div className="space-y-4">
                {group.skills.map((skill, idx) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm font-mono text-zinc-700 dark:text-zinc-300">{skill.name}</span>
                      <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">{skill.level}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                      <div
                        className="progress-fill h-full bg-gradient-to-r from-brand-500 to-accent-500 rounded-full"
                        style={{ '--target-width': `${skill.level}%` } as React.CSSProperties}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
