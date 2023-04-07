import { fetchAPI } from '@/lib/api';
import { getLargeImage, getStrapiMedia } from '@/lib/media';
import { footerQuery, headerQuery } from '@/queries/populate';
import Hero from './Hero';

interface PageProps {}

const Page: ({}: PageProps) => Promise<JSX.Element> = async () => {
  const homePage = await fetchAPI('/home-page', {
    populate: {
      Hero: {
        populate: '*',
      },
      servicesPreview: {
        populate: '*',
      },
      featuredProject: {
        populate: '*',
      },
      postsSelection: {
        populate: '*',
      },
      seo: {
        populate: '*',
      },
    },
  });

  const {
    Hero: hero,
    services,
    featuredProject,
    posts,
    seo,
  } = homePage.data.attributes;

  const heroImageUrl = getLargeImage(hero.image.data.attributes.formats.large)!;

  return (
    <main className='flex w-full min-h-screen '>
      <div className='w-full h-full inline-block z-0 p-16 pt-0'>
        <div className='flex items-center justify-between w-full'>
          <Hero heroImage={heroImageUrl} hero={hero} />
        </div>
      </div>
    </main>
  );
};

export default Page;
