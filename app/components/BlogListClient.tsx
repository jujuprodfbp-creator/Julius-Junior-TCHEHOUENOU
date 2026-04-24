'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Link } from '@/i18n';
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react';
import type { BlogPost } from '@/lib/blog';

interface BlogListClientProps {
  posts: Omit<BlogPost, 'content'>[];
}

export function BlogListClient({ posts }: BlogListClientProps) {
  const t = useTranslations('blog');

  return (
    <section className="section-container">
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

      {posts.length === 0 ? (
        <p className="text-center text-zinc-400 py-20">Aucun article disponible.</p>
      ) : (
        <div className="grid gap-8 max-w-3xl mx-auto">
          {posts.map((post, idx) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group glass rounded-2xl p-6 md:p-8 hover:shadow-xl hover:shadow-brand-500/10 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span key={tag} className="tech-badge">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <Link href={`/blog/${post.slug}`}>
                <h2 className="font-display text-xl md:text-2xl text-zinc-900 dark:text-white mb-3
                               group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors cursor-pointer">
                  {post.title}
                </h2>
              </Link>

              {/* Excerpt */}
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6">
                {post.excerpt}
              </p>

              {/* Meta */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-xs text-zinc-400 dark:text-zinc-500 font-mono">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={12} />
                    {new Date(post.date).toLocaleDateString('fr-FR', {
                      year: 'numeric', month: 'long', day: 'numeric',
                    })}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={12} />
                    {post.readTime} {t('min_read')}
                  </span>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="flex items-center gap-1.5 text-sm font-medium text-brand-600 dark:text-brand-400
                             hover:gap-2.5 transition-all duration-200"
                >
                  {t('read_more')} <ArrowRight size={14} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      )}
    </section>
  );
}
