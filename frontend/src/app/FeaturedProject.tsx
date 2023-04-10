import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

interface FeaturedProjectProps {
  type: string;
  title: string;
  summary: string;
  img: string;
  link: string;
  github: string;
}

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  github,
}: FeaturedProjectProps) => {
  return (
    <div className='col-span-12'>
      <article className='relative flex items-center justify-between w-full p-12 border shadow-2xl rounded-3xl border-dark dark:border-light bg-light dark:bg-dark rounded-br-2xl'>
        <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl' />
        <Link
          href={link}
          target='_blank'
          rel='noopener noreferrer'
          className='w-1/2 overflow-hidden rounded-lg cursor-pointer bg-gradient-to-r from-green-300 via-blue-500 to-purple-600'
        >
          <Image
            src={img}
            alt={title}
            width={1000}
            height={1000}
            className='w-full h-auto'
          />
        </Link>
        <div className='flex flex-col items-start justify-between w-1/2 pl-6'>
          <span className='text-xl font-medium text-primary dark:text-primaryDark'>
            {type}
          </span>
          <Link
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            className='hover:underline underline-offset-2'
          >
            <h2 className='w-full my-2 text-4xl font-bold text-left'>
              {title}
            </h2>
          </Link>
          <p className='my-2 font-medium text-dark dark:text-light'>
            {summary}
          </p>
          <div className='flex items-center mt-2'>
            <Link href={github} target='_blank' rel='noopener noreferrer'>
              <FaGithub className='w-10 h-10' />
            </Link>
            <Link
              href={link}
              target='_blank'
              rel='noopener noreferrer'
              className='p-2 px-6 ml-4 text-lg font-semibold rounded-lg bg-dark text-light dark:bg-light dark:text-dark'
            >
              Visit Project
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};
export default FeaturedProject;
