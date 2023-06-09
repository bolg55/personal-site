import AnimatedText from '@/components/AnimatedText';
import AboutMe from './About';
import Experience from '@/components/Experience';
import { fetchAPI } from '@/lib/api';
import { getStrapiMedia } from '@/lib/media';
import { aboutQuery, jobsQuery } from '@/queries/populate';

export const metadata = {
  title: 'About Me',
  description:
    'Learn about my journey as a full-stack web developer with expertise in JavaScript, TypeScript, Node, Next.js, React, and Solid. Explore my experience and skills.',
};

const About = async () => {
  const [aboutData, jobsData] = await Promise.all([
    fetchAPI('/about', aboutQuery),
    fetchAPI('/job', jobsQuery),
  ]);

  const { Jobs: jobs, resume } = jobsData.data.attributes;
  const about = aboutData.data.attributes;

  const resumeURL = getStrapiMedia(resume);

  return (
    <>
      <main className='flex w-full min-h-screen '>
        <div className='z-0 inline-block w-full h-full p-32 xl:p-24 lg:p-16 md:p-12 sm:p-8'>
          <AnimatedText
            text='About Me'
            className='mt-8 mb-16 text-center text-8xl lg:text-7xl sm:text-6xl xs:text-4xl sm:mb-8'
          />
          <AboutMe about={about} />

          <Experience jobs={jobs} resume={resumeURL} />
        </div>
      </main>
    </>
  );
};
export default About;
