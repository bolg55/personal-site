import Markdown from '@/components/Markdown';

interface Job {
  job: {
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
  };
}

const Details = ({ job }: Job) => {
  const { title, company, fromDate, toDate, location, overview } = job;

  return (
    <li className='my-8 first:mt-0 last:mb-0  mx-auto flex flex-col items-center justify-between'>
      <div>
        <h3 className=' font-bold text-2xl'>
          {title}&nbsp;
          <span>@ {company}</span>
        </h3>
        <span className='capitalize font-medium text-dark/75'>
          {fromDate}-{toDate} | {location}
        </span>
        <Markdown markdown={overview!} />
      </div>
    </li>
  );
};

export default Details;
