import { MetadataRoute } from 'next';

// TODO: Update this URL with your actual production domain
const baseUrl = 'https://khanifalfan.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
