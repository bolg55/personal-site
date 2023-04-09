import LiIcon from '@/components/LiIcon';
import Markdown from '@/components/Markdown';
import { Media, getStrapiMedia } from '@/lib/media';
import { motion } from 'framer-motion';
import { useRef } from 'react';

interface Job {
  job: {
    id: string;
    title: string;
    company: string;
    fromDate: string;
    toDate: string;
    location: string;
    overview?: string;
    logo?: Media;
  };
}

const Details = ({ job }: Job) => {
  const ref = useRef(null);
  const { title, company, fromDate, toDate, location, overview } = job;

  return (
    <li
      ref={ref}
      className='my-8 first:mt-0 last:mb-0 mx-auto w-3/5 flex flex-col items-start justify-between'
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className=' font-bold text-2xl'>
          {title}&nbsp;
          <span className='text-primary dark:text-primaryDark'>
            @ {company}
          </span>
        </h3>
        <span className='capitalize font-medium text-dark/75 dark:text-light/50'>
          {fromDate}-{toDate} | {location}
        </span>
        <Markdown markdown={overview!} />
      </motion.div>
    </li>
  );
};

export default Details;
