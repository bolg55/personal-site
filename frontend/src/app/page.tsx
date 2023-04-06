import { fetchAPI } from '@/lib/api';
import { getStrapiMedia } from '@/lib/media';
import { headerQuery } from '@/queries/populate';

interface PageProps {}

const Page: ({}: PageProps) => Promise<JSX.Element> = async () => {
  const data = await fetchAPI('/header', headerQuery);

  const { menu, showLogo, Logo: logo, socialLinks } = data.data.attributes;
  const logoUrl = getStrapiMedia(logo.image);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Page;
