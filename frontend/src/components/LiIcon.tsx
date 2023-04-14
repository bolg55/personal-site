import { motion, useScroll } from 'framer-motion';

interface LiIconProps {
  reference: React.RefObject<HTMLDivElement>;
}

const LiIcon = ({ reference }: LiIconProps) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ['center end', 'center center'],
    layoutEffect: false,
  });
  return (
    <figure className='absolute left-0 stroke-dark dark:stroke-light'>
      <svg
        className='-rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[60px]'
        width='75'
        height='75'
        viewBox='0 0 100 100'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle
          cx='75'
          cy='50'
          r='20'
          className='stroke-1 stroke-primary dark:stroke-primaryDark fill-none'
        />
        <motion.circle
          style={{ pathLength: scrollYProgress }}
          cx='75'
          cy='50'
          r='20'
          className='stroke-[5px] fill-light dark:fill-dark'
        />
        <circle
          cx='75'
          cy='50'
          r='10'
          className='stroke-1 fill-primary dark:fill-primaryDark animate-pulse'
        />
      </svg>
    </figure>
  );
};
export default LiIcon;
