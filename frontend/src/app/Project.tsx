import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

interface ProjectProps {
  type: string;
  title: string;
  img: string;
  link: string;
  github: string;
}

const Project = ({ title, type, img, link, github }: ProjectProps) => {
  return (
    <div className='col-span-6'>
      <article className='relative flex flex-col items-center justify-center w-full p-6 border shadow-2xl rounded-2xl border-dark dark:border-light bg-light dark:bg-dark rounded-br-2xl'>
        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl' />
        <Link
          href={link}
          target='_blank'
          rel='noopener noreferrer'
          className='w-full overflow-hidden rounded-lg cursor-pointer bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500'
        >
          <Image
            src={img}
            alt={title}
            width={1000}
            height={1000}
            className='w-full h-auto'
          />
        </Link>
        <div className='flex flex-col items-start justify-between w-full mt-4'>
          <span className='text-xl font-medium text-primary dark:text-primaryDark'>
            {type}
          </span>
          <Link
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            className='hover:underline underline-offset-2'
          >
            <h2 className='w-full my-2 text-3xl font-bold text-left'>
              {title}
            </h2>
          </Link>
          <div className='flex items-center justify-between w-full mt-2'>
            <Link
              href={link}
              target='_blank'
              rel='noopener noreferrer'
              className='text-lg font-semibold underline'
            >
              Visit
            </Link>
            <Link href={github} target='_blank' rel='noopener noreferrer'>
              <FaGithub className='w-6 h-6' />
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};
export default Project;
