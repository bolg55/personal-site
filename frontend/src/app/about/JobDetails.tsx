import LiIcon from '@/components/LiIcon';
import Markdown from '@/components/Markdown';
import { Media } from '@/lib/media';
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
      className='flex flex-col items-start justify-between w-3/5 mx-auto my-8 first:mt-0 last:mb-0 md:w-4/5'
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className='text-2xl font-bold sm:text-xl xs:text-lg'>
          {title}&nbsp;
          <span className='text-primary dark:text-primaryDark'>
            @ {company}
          </span>
        </h3>
        <span className='font-medium capitalize text-dark/75 dark:text-light/50 xs:text-sm'>
          {fromDate}-{toDate} | {location}
        </span>
        <Markdown markdown={overview!} />
      </motion.div>
    </li>
  );
};

export default Details;
