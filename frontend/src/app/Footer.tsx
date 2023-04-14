import { IconName } from '@/components/Icon';
import SocialMenu from '@/components/SocialMenu';

interface FooterProps {
  brandName?: string;
  brandEmail?: string;
  socialLinks: {
    id: number;
    iconName: IconName;
    link: string;
    socialMedia: string;
  }[];
}

const Footer = ({ brandName, socialLinks }: FooterProps) => {
  return (
    <footer className='flex items-center justify-between w-full px-32 py-8 font-medium capitalize border-t-2 sm:px-8 sm:font-normal sm:text-sm lg:justify-center lg:flex-col lg:px-8 border-dark dark:border-light'>
      <p className='lg:text-center lg:mb-2'>
        &copy; {new Date().getFullYear()} {brandName}. All rights reserved.
      </p>

      <span className='font-bold lg:hidden'>¯\_(ツ)_/¯</span>

      <SocialMenu
        socialLinks={socialLinks}
        className='w-6 h-6 text-dark dark:text-light'
      />
    </footer>
  );
};
export default Footer;
