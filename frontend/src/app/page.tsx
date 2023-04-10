import { fetchAPI } from '@/lib/api';
import { homeQuery, projectsQuery } from '@/queries/populate';
import Hero from './Hero';
import Projects from './Projects';

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

const Page: ({}: PageProps) => Promise<JSX.Element> = async () => {
  const [homePage, projectsData] = await Promise.all([
    fetchAPI('/home-page', homeQuery),
    fetchAPI('/projects', projectsQuery),
  ]);

  const { Hero: hero, seo } = homePage.data.attributes;

  const heroImageUrl = hero.image.data.attributes.url;

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

  return (
    <main className='flex w-full min-h-screen '>
      <div className='z-0 inline-block w-full h-full p-16 pt-0'>
        <div className='flex items-center justify-between w-full'>
          <Hero heroImage={heroImageUrl} hero={hero} />
        </div>
        <Projects projects={projects} />
      </div>
    </main>
  );
};

export default Page;
