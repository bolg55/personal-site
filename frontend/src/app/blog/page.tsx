import { fetchAPI } from '@/lib/api';
import FeaturedPosts from '../FeaturedPosts';

const BlogPage = async () => {
  const postsData = await fetchAPI('/posts', {
    next: { revalidate: 60 * 60 * 24 },
    populate: {
      fields: ['title', 'slug', 'excerpt', 'publishedAt'],
      cover: {
        fields: ['formats.medium', 'url', 'alternativeText'],
      },
      tags: true,
      seo: true,
    },
  });

  interface Post {
    attributes: {
      id: number;
      title: string;
      slug: string;
      excerpt: string;
      publishedAt: string;
      cover: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
      tags: {
        data: {
          attributes: {
            name: string;
          };
        }[];
      };
    };
  }

  const posts = postsData.data.map((post: Post) => {
    const { title, slug, excerpt, publishedAt, cover, tags } = post.attributes;
    return {
      title,
      slug,
      excerpt,
      publishedAt,
      cover: cover.data.attributes.url,
      tags: tags.data.map((tag: any) => tag.attributes.name),
    };
  });

  return (
    <main className='flex w-full min-h-screen'>
      <div className='z-0 inline-block w-full h-full p-16 pt-0'>
        <FeaturedPosts posts={posts} title='Blog' />
      </div>
    </main>
  );
};
export default BlogPage;
