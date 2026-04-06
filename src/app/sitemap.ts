import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const blogEntries = posts.map((post) => ({
    url: `https://quido.fr/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const cityPages = [
    'conciergerie-ferney-voltaire',
    'conciergerie-saint-genis-pouilly',
    'conciergerie-divonne-les-bains',
    'conciergerie-gex',
    'conciergerie-prevessin-moens',
  ].map((slug) => ({
    url: `https://quido.fr/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: 'https://quido.fr',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://quido.fr/estimation',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://quido.fr/rendez-vous',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://quido.fr/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://quido.fr/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://quido.fr/mentions-legales',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: 'https://quido.fr/confidentialite',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    ...cityPages,
    ...blogEntries,
  ];
}
