import { IconName } from '@/components/Icon';
import Logo from '@/components/Logo';
import MenuItems from '@/components/MenuItems';
import SocialMenu from '@/components/SocialMenu';

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
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
      <nav className=''>
        <MenuItems
          menuItems={menuItems}
          className='flex space-x-4 capitalize'
        />
      </nav>

      {showLogo && (
        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
          <Logo src={logoUrl} alt={alt} />
        </div>
      )}

      <nav>
        <SocialMenu
          socialLinks={socialLinks}
          className='h-8 w-8 text-primaryDark bg-white shadow-lg items-center justify-center p-0.5 rounded-full'
        />
      </nav>
    </header>
  );
};
export default Header;
