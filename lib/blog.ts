// lib/blog.ts — Utilitaires pour les articles de blog
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: number;
  tags: string[];
  content: string;
  locale: string;
}

const postsDirectory = path.join(process.cwd(), 'content/blog');

export function getAllPosts(locale: string): Omit<BlogPost, 'content'>[] {
  const localeDir = path.join(postsDirectory, locale);

  if (!fs.existsSync(localeDir)) return [];

  const fileNames = fs.readdirSync(localeDir).filter((f) => f.endsWith('.md'));

  return fileNames
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(localeDir, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        locale,
        title: data.title as string,
        excerpt: data.excerpt as string,
        date: data.date as string,
        readTime: data.readTime as number,
        tags: (data.tags as string[]) || [],
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string, locale: string): Promise<BlogPost | null> {
  const fullPath = path.join(postsDirectory, locale, `${slug}.md`);

  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(remarkHtml).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    locale,
    title: data.title as string,
    excerpt: data.excerpt as string,
    date: data.date as string,
    readTime: data.readTime as number,
    tags: (data.tags as string[]) || [],
    content: contentHtml,
  };
}
