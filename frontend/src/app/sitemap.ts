import { fetchAPI } from '@/lib/api';

interface PostProps {
  attributes: any;
  url: string;
  lastModified: string;
}

const sitemap = async () => {
  const allPosts = await fetchAPI('/posts');

  const posts = allPosts.data.map((post: PostProps) => ({
    url: `https://www.kellenbolger.ca/blog/${post.attributes.slug}`,
    lastModified: post.attributes.updatedAt,
    changefreq: 'daily',
  }));

  const routes = ['', '/about', '/contact', '/blog', '/blog/*'].map(
    (route) => ({
      url: `https://www.kellenbolger.ca/${route}`,
      lastModified: new Date().toISOString(),
    })
  );

  return [...posts, ...routes];
};

export default sitemap;
