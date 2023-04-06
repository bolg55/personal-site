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
    <header className='bg-gray-700'>
      <div className='flex justify-between mx-8 py-4'>
        {showLogo && <Logo src={logoUrl} alt={alt} />}
        <nav className='flex items-center space-x-10'>
          <div>
            <MenuItems
              menuItems={menuItems}
              className='flex space-x-2 capitalize'
            />
          </div>
          <div>
            <SocialMenu
              socialLinks={socialLinks}
              className='flex space-x-2'
              color='text-green-500'
            />
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Header;
