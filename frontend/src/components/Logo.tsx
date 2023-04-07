'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
interface LogoProps {
  alt: string;
  src: string;
}

const MotionImage = motion(Image);

const Logo = ({ alt, src }: LogoProps) => (
  <Link href='/'>
    <MotionImage
      alt={alt}
      src={src}
      width={80}
      height={80}
      priority
      className='items-center bg-dark justify-center w-16 h-16 rounded-full p-0.5 border dark:border-2 dark:border-light shadow-md'
      whileHover={{
        backgroundColor: [
          '#1b1b1b',
          'rgba(131,58,180,1)',
          'rgba(253,29,29,1)',
          'rgba(252,176,69,1)',
          'rgba(131,58,180,1)',
          '#1b1b1b',
        ],
        transition: { duration: 2, repeat: Infinity },
      }}
    />
  </Link>
);

export default Logo;
