import Logo from '@/components/Logo';

interface HeaderProps {
  logoUrl: string;
  link: string;
  alt: string;
  showLogo: boolean;
  menu: any[];
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
  return (
    <header>
      <div>{showLogo && <Logo src={logoUrl} alt={alt} />}</div>
    </header>
  );
};
export default Header;
