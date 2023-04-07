'use client';

import { AnimatePresence, motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedText = ({ text, className = '' }: AnimatedTextProps) => {
  return (
    <div className='w-full mx-auto py-2 flex items-center justify-center overflow-hidden'>
      <motion.h1
        className={`inline-block w-full font-bold capitalize text-6xl ${className}`}
        variants={quote}
        initial='initial'
        animate='animate'
      >
        {text.split(' ').map((word, index) => (
          <motion.span
            variants={singleWord}
            key={`${index}-${word}`}
            className={`${
              [2, 4].includes(index)
                ? 'bg-gradient-to-r from-primaryDark to-primary text-transparent bg-clip-text'
                : 'text-dark dark:text-light'
            } inline-block `}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};
export default AnimatedText;
