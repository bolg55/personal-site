import AnimatedText from '@/components/AnimatedText';
import Experience from '@/components/Experience';
import { fetchAPI } from '@/lib/api';
import { getStrapiMedia } from '@/lib/media';
import Head from 'next/head';

const About = async () => {
  const jobsData = await fetchAPI('/job', {
    populate: {
      Jobs: {
        populate: {
          logo: {
            fields: ['url'],
          },
          fields: [
            'title',
            'company',
            'fromDate',
            'toDate',
            'location',
            'overview',
          ],
        },
      },
      resume: {
        fields: ['name', 'url'],
      },
    },
  });

  const { Jobs: jobs, resume } = jobsData.data.attributes;

  const resumeURL = getStrapiMedia(resume);

  return (
    <>
      <Head>
        <title>Kellen Bolger | About Me</title>
      </Head>
      <AnimatedText text='About Me' className='text-center text-8xl' />
      <Experience jobs={jobs} resume={resumeURL} />
    </>
  );
};
export default About;
