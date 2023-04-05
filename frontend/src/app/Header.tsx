import Logo from '@/components/Logo';
import SocialIcon from '@/components/SocialIcon';
import Link from 'next/link';

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
    icon: string;
    link: string;
    socialMedia: string;
  }[];
}

const Header = ({ logoUrl, alt, showLogo, menu, socialLinks }: HeaderProps) => {
  const { menuItems } = menu.data.attributes;

  return (
    <header className='bg-white text-black'>
      <div className='flex justify-between mx-8 py-4'>
        {showLogo && <Logo src={logoUrl} alt={alt} />}
        <nav className='flex items-center space-x-10'>
          <div>
            <ul className='flex space-x-2 capitalize'>
              {menuItems.map((item) => (
                <li key={item.id}>
                  <Link href={item.url}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul className='flex space-x-2'>
              {socialLinks.map((item) => (
                <li key={item.id}>
                  <SocialIcon
                    href={item.link}
                    src={item.icon}
                    alt={item.socialMedia}
                    width={25}
                    height={25}
                  />
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Header;
