import Experience from '@/components/Experience';
import { fetchAPI } from '@/lib/api';

const About = async () => {
  const jobsData = await fetchAPI('/job', {
    populate: {
      Jobs: {
        fields: [
          'id',
          'title',
          'company',
          'fromDate',
          'toDate',
          'location',
          'overview',
          'logo',
        ],
        logo: {
          populate: '*',
        },
      },
      resume: {
        fields: ['name', 'url'],
      },
    },
  });

  const { Jobs: jobs, resume } = jobsData.data.attributes;

  return (
    <div>
      <h1>About</h1>
      <Experience jobs={jobs} />
    </div>
  );
};
export default About;
