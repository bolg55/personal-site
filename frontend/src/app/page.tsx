import { fetchAPI } from '@/lib/api';
import { getStrapiMedia } from '@/lib/media';
import { headerQuery } from '@/queries/populate';
import Header from './Header';

interface PageProps {}

interface SocialLink {
  id: number;
  icon: any;
  link: string;
  socialMedia: string;
}
[];

const Page: ({}: PageProps) => Promise<JSX.Element> = async () => {
  const data = await fetchAPI('/header', headerQuery);

  const { menu, showLogo, Logo: logo, socialLinks } = data.data.attributes;
  const logoUrl = getStrapiMedia(logo.image);
  const social = socialLinks.map((socialLink: SocialLink) => {
    const { icon, ...rest } = socialLink;
    return {
      ...rest,
      icon: getStrapiMedia(icon),
    };
  });

  return (
    <div>
      <Header
        logoUrl={logoUrl}
        link={logo.link}
        alt={logo.alt}
        showLogo={showLogo}
        socialLinks={social}
        menu={menu}
      />
    </div>
  );
};

export default Page;
