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
        className='w-full mb-32 text-6xl font-bold text-center text-dark dark:text-light md:text-6xl xs:text-4xl md:mb-16'
      >
        Experience
      </motion.h2>
      <div ref={ref} className='relative w-3/4 mx-auto lg:w-[90%] md:w-full'>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='absolute top-0 w-1 h-full origin-top left-9 bg-dark dark:bg-light md:w-0.5 md:left-[30px] xs:left-5'
        />

        <ul className='flex flex-col items-start justify-between w-full ml-4 xs:ml-2'>
          {jobs.map((job) => (
            <Details key={`${job.id}-${job.company}`} job={job} />
          ))}
        </ul>
      </div>
      <div className='flex items-center justify-center w-3/5 mx-auto my-16 space-x-6 align-middle'>
        <Button>
          <a
            href={resume}
            download={true}
            target='_blank'
            className='flex items-center space-x-3'
          >
            <span>Download Resume</span>
            <span className='text-2xl md:hidden'>
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
