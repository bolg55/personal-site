'use client';

import { IconName, ReactIcon } from './Icon';
import { motion } from 'framer-motion';

interface SocialMenuProps {
  socialLinks: {
    id: number;
    iconName: IconName;
    link: string;
  }[];
  className?: string;
  color?: string;
}

const SocialMenu = ({ socialLinks, className }: SocialMenuProps) => (
  <ul className='flex space-x-3 items-center align-middle justify-center'>
    {socialLinks.map((item) => (
      <motion.li
        key={item.id}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
        className='shadow p-1 dark:bg-dark bg-light rounded-full shadow-primary dark:shadow-primaryDark'
      >
        <a href={item.link} target={'_blank'}>
          <ReactIcon icon={item.iconName} className={className} />
        </a>
      </motion.li>
    ))}
  </ul>
);
export default SocialMenu;
