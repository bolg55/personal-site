import Logo from '@/components/Logo';
import Link from 'next/link';

interface HeaderProps {
  logoUrl: string;
  link: string;
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
  socialLinks: any[];
}

const Header = ({
  logoUrl,
  link,
  alt,
  showLogo,
  menu,
  socialLinks,
}: HeaderProps) => {
  const { menuItems } = menu.data.attributes;

  return (
    <header>
      <div>
        {showLogo && <Logo src={logoUrl} alt={alt} />}
        <nav>
          <ul>
            {menuItems.map((item) => (
              <li key={item.id}>
                <Link href={item.url}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
