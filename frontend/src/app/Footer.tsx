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
    <footer className='w-full px-32 py-8 font-medium flex items-center justify-between capitalize border-t-2 border-dark dark:border-light'>
      <p>
        &copy; {new Date().getFullYear()} {brandName}. All rights reserved.
      </p>

      <span className='font-bold'>¯\_(ツ)_/¯</span>

      <SocialMenu
        socialLinks={socialLinks}
        className='h-6 w-6 text-dark dark:text-light'
      />
    </footer>
  );
};
export default Footer;
