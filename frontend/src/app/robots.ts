import { MetadataRoute } from 'next';

export const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: '*', // or 'Googlebot'
      allow: '/',
      disallow: ['/admin', '/api', '/auth', '/graphql', '/private/'],
    },
    sitemap: 'https://www.kellenbolger.ca/sitemap.xml',
  };
};
