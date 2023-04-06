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
  <ul className='flex space-x-2 items-center justify-center'>
    {socialLinks.map((item) => (
      <motion.li key={item.id} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
        <a href={item.link} target={'_blank'}>
          <ReactIcon icon={item.iconName} className={className} />
        </a>
      </motion.li>
    ))}
  </ul>
);
export default SocialMenu;
