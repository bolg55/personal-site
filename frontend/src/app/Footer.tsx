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
    <footer className='w-full px-32 py-8 font-medium flex items-center justify-between capitalize border-t-2 border-dark'>
      <p>
        &copy; {new Date().getFullYear()} {brandName}. All rights reserved.
      </p>

      <span className='font-bold'>¯\_(ツ)_/¯</span>

      <SocialMenu
        socialLinks={socialLinks}
        className='flex space-x-2 w-8 h-8 text-gray-500'
      />
    </footer>
  );
};
export default Footer;
