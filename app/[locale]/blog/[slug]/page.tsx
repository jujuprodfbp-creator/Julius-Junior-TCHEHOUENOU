import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { BlogPostClient } from '@/app/components/BlogPostClient';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

interface BlogPostPageProps {
  params: { locale: string; slug: string };
}

export async function generateStaticParams({ params: { locale } }: { params: { locale: string } }) {
  const posts = getAllPosts(locale);
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug, params.locale);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug, params.locale);
  if (!post) notFound();
  return <BlogPostClient post={post} />;
}
