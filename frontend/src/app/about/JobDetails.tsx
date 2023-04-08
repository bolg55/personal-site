import Markdown from '@/components/Markdown';

interface Job {
  job: {
    id: string;
    title: string;
    company: string;
    fromDate: string;
    toDate: string;
    overview?: string;
    logo?: {
      url: string;
    };
  };
}

const Details = ({ job }: Job) => {
  const { title, company, fromDate, toDate, overview } = job;

  return (
    <li>
      <div className='flex justify-between'>
        <h3>
          {title}&nbsp;
          <span className='text-gray-500'>@ {company}</span>
        </h3>
        <span>
          {fromDate} | {toDate}
        </span>
      </div>
      <Markdown markdown={overview!} />
    </li>
  );
};

export default Details;
