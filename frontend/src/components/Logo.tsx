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
      className='items-center justify-center w-18 h-18 rounded-full p-0.5 border shadow-md'
      whileHover={{
        backgroundColor: [
          '#fff',
          'rgba(131,58,180,1)',
          'rgba(253,29,29,1)',
          'rgba(252,176,69,1)',
          'rgba(131,58,180,1)',
          '#fff',
        ],
        transition: { duration: 2, repeat: Infinity },
      }}
    />
  </Link>
);

export default Logo;
