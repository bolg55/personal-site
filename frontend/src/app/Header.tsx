import { IconName } from '@/components/Icon';
import Logo from '@/components/Logo';
import MenuItems from '@/components/MenuItems';
import SocialMenu from '@/components/SocialMenu';
import ThemeSwitcher from '@/components/ThemeSwitcher';

interface HeaderProps {
  logoUrl: string;
  alt: string;
  showLogo: boolean;
  menu: {
    data: {
      attributes: {
        menuItems: {
          id: number;
          url: string;
          label: string;
        }[];
      };
    };
  };
  socialLinks: {
    id: number;
    iconName: IconName;
    link: string;
    socialMedia: string;
  }[];
}

const Header = ({ logoUrl, alt, showLogo, menu, socialLinks }: HeaderProps) => {
  const { menuItems } = menu.data.attributes;

  return (
    <header className='flex items-center justify-between w-full px-32 py-8 font-medium'>
      <MenuItems menuItems={menuItems} className='flex space-x-4 capitalize' />

      {showLogo && (
        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
          <Logo src={logoUrl} alt={alt} />
        </div>
      )}
      <div className='flex space-x-10'>
        <SocialMenu
          socialLinks={socialLinks}
          className='w-6 h-6 text-dark dark:text-light'
        />
        <ThemeSwitcher />
      </div>
    </header>
  );
};
export default Header;
