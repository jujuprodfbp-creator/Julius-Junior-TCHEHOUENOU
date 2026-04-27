'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import type { BlogPost } from '@/lib/blog';

interface BlogPostClientProps {
  post: BlogPost;
}

export function BlogPostClient({ post }: BlogPostClientProps) {
  const t = useTranslations('blog');

  return (
    <article className="section-container max-w-3xl mx-auto">
      {/* Back button */}
      <div className="mb-10 fade-up">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400
                     hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
        >
          <ArrowLeft size={16} /> {t('back')}
        </Link>
      </div>

      {/* Header */}
      <header className="mb-10 fade-up" style={{ animationDelay: '0.1s' }}>
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span key={tag} className="tech-badge">{tag}</span>
          ))}
        </div>

        <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-zinc-900 dark:text-white mb-6 leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center gap-4 text-sm text-zinc-400 dark:text-zinc-500 font-mono pb-6 border-b border-zinc-200 dark:border-zinc-800">
          <span className="flex items-center gap-1.5">
            <Calendar size={14} />
            {new Date(post.date).toLocaleDateString('fr-FR', {
              year: 'numeric', month: 'long', day: 'numeric',
            })}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={14} />
            {post.readTime} {t('min_read')}
          </span>
        </div>
      </header>

      {/* Content */}
      <div
        className="prose-custom fade-up"
        style={{ animationDelay: '0.2s' }}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
