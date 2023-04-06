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
    <footer className='flex justify-between  py-4 w-full '>
      <p>
        &copy; {new Date().getFullYear()} {brandName}. All rights reserved.
      </p>
      ¯\_(ツ)_/¯
      <SocialMenu
        socialLinks={socialLinks}
        className='flex space-x-2 w-10 h-10'
      />
    </footer>
  );
};
export default Footer;
