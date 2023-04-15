import { fetchAPI } from '@/lib/api';

interface PostProps {
  attributes: any;
  url: string;
  lastModified: string;
}

export const sitemap = async () => {
  const allPosts = await fetchAPI('/posts');

  const posts = allPosts.data.map((post: PostProps) => ({
    url: `http://localhost:3000/blog/${post.attributes.slug}`,
    lastModified: post.attributes.updatedAt,
    changefreq: 'daily',
  }));

  const routes = ['', '/about', '/contact', '/blog', '/blog/*'].map(
    (route) => ({
      url: `http://localhost:3000/${route}`,
      lastModified: new Date().toISOString(),
    })
  );

  return [...posts, ...routes];
};
