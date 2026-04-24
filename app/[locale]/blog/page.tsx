import { getAllPosts } from '@/lib/blog';
import { BlogListClient } from '@/app/components/BlogListClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Articles sur le développement web, Next.js, TypeScript et les bonnes pratiques.',
};

interface BlogPageProps {
  params: { locale: string };
}

export default function BlogPage({ params: { locale } }: BlogPageProps) {
  const posts = getAllPosts(locale);
  return <BlogListClient posts={posts} />;
}
