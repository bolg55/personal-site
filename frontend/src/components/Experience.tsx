'use client';

import Details from '@/app/about/JobDetails';
import { Media } from '@/lib/media';
import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import Button from './Button';
import { HiOutlineBriefcase, HiOutlineCloudArrowDown } from 'react-icons/hi2';
import Link from 'next/link';

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
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: 'spring' }}
        className='font-bold text-6xl mb-32 w-full text-center text-dark dark:text-light'
      >
        Experience
      </motion.h2>
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
      <div className='my-16 mx-auto items-center align-middle justify-center flex w-3/5 space-x-6'>
        <Button>
          <a
            href={resume}
            download={true}
            target='_blank'
            className='flex items-center space-x-1'
          >
            <span>Download Resume</span>
            <span className='text-2xl '>
              <HiOutlineCloudArrowDown />
            </span>
          </a>
        </Button>
        <Link
          href='/contact'
          className='underline underline-offset-2 hover:text-primary dark:hover:text-primaryDark capitalize p-2.5 px-6 rounded-lg text-lg font-semibold transition-all duration-300 ease-in-out'
        >
          Contact
        </Link>
      </div>
    </div>
  );
};
export default Experience;
