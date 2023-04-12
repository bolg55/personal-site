import { fetchAPI } from '@/lib/api';
import Hero from './Hero';
import Projects from './Projects';
import FeaturedPosts from './FeaturedPosts';

interface PageProps {}

interface Project {
  attributes: {
    id: number;
    isFeatured: boolean;
    slug: string;
    title: string;
    summary: string;
    type: string;
    link: string;
    github: string;
    img: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
}

export interface Post {
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

const Page: ({}: PageProps) => Promise<JSX.Element> = async () => {
  const homePage = await fetchAPI('/home-page', { cache: 'no-store' });

  const {
    Hero: hero,
    projects: projectsData,
    postsSelection,
    seo,
  } = homePage.data.attributes;

  const projects = projectsData.data.map((project: Project) => {
    const { id, isFeatured, slug, title, summary, type, link, github, img } =
      project.attributes;
    return {
      id,
      isFeatured,
      slug,
      title,
      summary,
      type,
      link,
      github,
      img: img.data.attributes.url,
    };
  });

  const recentPosts = {
    title: postsSelection.heading,
    posts: postsSelection.featuredPosts.data.map((post: Post) => {
      const { id, title, slug, excerpt, publishedAt, cover, tags } =
        post.attributes;
      return {
        id,
        title,
        slug,
        excerpt,
        publishedAt,
        cover: cover.data.attributes.url,
        tags: tags.data.map((tag: any) => tag.attributes.name),
      };
    }),
  };

  return (
    <main className='flex w-full min-h-screen '>
      <div className='z-0 inline-block w-full h-full p-16 pt-0'>
        <div className='flex items-center justify-between w-full'>
          <Hero hero={hero} />
        </div>
        <FeaturedPosts posts={recentPosts} />
        <Projects projects={projects} />
      </div>
    </main>
  );
};

export default Page;
