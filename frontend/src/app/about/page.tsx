import AnimatedText from '@/components/AnimatedText';
import AboutMe from './About';
import Experience from '@/components/Experience';
import { fetchAPI } from '@/lib/api';
import { getStrapiMedia } from '@/lib/media';
import { aboutQuery, jobsQuery } from '@/queries/populate';
import Head from 'next/head';

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
      <Head>
        <title>Kellen Bolger | About Me</title>
      </Head>
      <AnimatedText text='About Me' className='mb-16 text-center text-8xl' />
      <AboutMe about={about} />
      <Experience jobs={jobs} resume={resumeURL} />
    </>
  );
};
export default About;
