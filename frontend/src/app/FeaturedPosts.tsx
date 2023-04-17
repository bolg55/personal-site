'use client';
import FeaturedProject from './FeaturedProject';
import { motion } from 'framer-motion';

import Project from './Project';
import Link from 'next/link';
import Image from 'next/image';

interface Posts {
  title?: string;

  posts: {
    id: number;
    title: string;
    slug: string;
    excerpt?: string;
    publishedAt?: string;
    cover: string;
    tags: string[];
  }[];
}

const Posts = ({ posts, title }: Posts) => {
  return (
    <main className='flex flex-col items-center justify-center w-full mb-16'>
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: 'spring' }}
        className='w-full mb-16 font-bold text-center text-8xl sm:mb-8 sm:text-6xl lg:text-7xl xs:text-4xl text-dark dark:text-light'
      >
        {title}
      </motion.h2>

      <div className='grid grid-cols-12 gap-12 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
        {posts.map((post) => {
          const { title, slug, cover, excerpt, tags } = post;
          return (
            <div key={slug} className='col-span-4 sm:col-span-12 md:col-span-6'>
              <article className='relative flex flex-col items-center justify-center w-full p-4 border shadow-2xl rounded-2xl border-dark dark:border-light bg-light dark:bg-dark rounded-br-2xl xs:p-2'>
                <div className='absolute top-0 -right-3 -z-10 w-[103%] h-[102%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]' />
                <Link
                  href={`/blog/${slug}`}
                  rel='noopener noreferrer'
                  className='w-full overflow-hidden rounded-lg cursor-pointer'
                >
                  <Image
                    src={cover}
                    alt={title}
                    width={500}
                    height={500}
                    priority
                    sizes='(max-width: 768px) 100vw,(max-width:1200px) 50vw, 50vw'
                    className='w-full h-auto'
                  />
                </Link>
                <div className='flex flex-col items-start justify-between w-full mt-2'>
                  <Link
                    href={`/blog/${slug}`}
                    rel='noopener noreferrer'
                    className='hover:underline underline-offset-2'
                  >
                    <h2 className='w-full my-2 text-xl font-bold text-left lg:text-sm'>
                      {title}
                    </h2>
                  </Link>
                  <span className='space-x-2 text-xs font-medium text-primary dark:text-primaryDark'>
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className='p-1.5 uppercase bg-slate-200 dark:bg-slate-700 rounded-md'
                      >
                        {tag}
                      </span>
                    ))}
                  </span>

                  <div className='my-2 font-medium text-dark dark:text-light lg:text-sm'>
                    <p>{excerpt}</p>
                  </div>
                </div>
              </article>
            </div>
          );
        })}
      </div>
    </main>
  );
};
export default Posts;
