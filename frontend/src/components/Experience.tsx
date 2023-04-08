import Details from '@/app/about/JobDetails';

interface Job {
  jobs: {
    id: string;
    title: string;
    company: string;
    fromDate: string;
    toDate: string;
    location: string;
    overview?: string;
    logo?: {
      url: string;
    };
  }[];
}

const Experience = ({ jobs }: Job) => {
  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center text-dark dark:text-light'>
        Experience
      </h2>
      <div className='w-[75%] mx-auto relative'>
        <ul>
          {jobs.map((job) => (
            <Details key={`${job.id}-${job.company}`} job={job} />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Experience;
