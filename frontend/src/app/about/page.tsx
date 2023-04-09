import Experience from '@/components/Experience';
import Markdown from '@/components/Markdown';
import { fetchAPI } from '@/lib/api';
import { getStrapiMedia } from '@/lib/media';

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
    <div>
      <h1 className='my-64'>About</h1>
      <Experience jobs={jobs} resume={resumeURL} />
    </div>
  );
};
export default About;
