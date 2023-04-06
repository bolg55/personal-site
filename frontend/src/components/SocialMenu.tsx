import Link from 'next/link';
import { IconName, ReactIcon } from './Icon';

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
      <li key={item.id}>
        <Link href={item.link} target={'_blank'}>
          <ReactIcon icon={item.iconName} className={className} />
        </Link>
      </li>
    ))}
  </ul>
);
export default SocialMenu;
