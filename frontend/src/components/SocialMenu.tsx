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
  <ul className='flex items-center justify-center space-x-3 align-middle xs:space-x-1'>
    {socialLinks.map((item) => (
      <motion.li
        key={item.id}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
        className='p-1 rounded-full shadow dark:bg-dark bg-light shadow-primary dark:shadow-primaryDark'
      >
        <a href={item.link} target={'_blank'}>
          <ReactIcon icon={item.iconName} className={className} />
        </a>
      </motion.li>
    ))}
  </ul>
);
export default SocialMenu;
