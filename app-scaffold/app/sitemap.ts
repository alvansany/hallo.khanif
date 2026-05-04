import { MetadataRoute } from 'next';
import { WORKS } from '@/lib/data';

// TODO: Update this URL with your actual production domain
const baseUrl = 'https://khanifalfan.com';

export default function sitemap(): MetadataRoute.Sitemap {
  // Base routes
  const routes = ['', '/work', '/services', '/lab', '/blog', '/contact'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  // Dynamic work routes
  const works = WORKS.map((work) => ({
    url: `${baseUrl}/work/${work.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...works];
}
