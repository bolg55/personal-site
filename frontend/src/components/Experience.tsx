'use client';

import Details from '@/app/about/JobDetails';
import { Media } from '@/lib/media';
import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import Button from './Button';
import { HiOutlineBriefcase, HiOutlineCloudArrowDown } from 'react-icons/hi2';

interface Job {
  jobs: {
    id: string;
    title: string;
    company: string;
    fromDate: string;
    toDate: string;
    location: string;
    overview?: string;
    logo?: Media;
  }[];
  resume: string;
}

const Experience = ({ jobs, resume }: Job) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });

  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center text-dark dark:text-light'>
        Experience
      </h2>
      <div ref={ref} className='relative w-3/4 mx-auto'>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='absolute left-9 top-0 w-1 h-full bg-dark dark:bg-light origin-top'
        />

        <ul className='w-full flex flex-col items-start justify-between ml-4'>
          {jobs.map((job) => (
            <Details key={`${job.id}-${job.company}`} job={job} />
          ))}
        </ul>
      </div>
      <div className='my-16  mx-auto items-center justify-between flex flex-col w-3/5'>
        <Button>
          <a
            href={resume}
            download={true}
            target='_blank'
            className='flex items-center'
          >
            <span className='mr-2'>Resume</span>
            <HiOutlineCloudArrowDown className='font-medium' />
          </a>
        </Button>
      </div>
    </div>
  );
};
export default Experience;
