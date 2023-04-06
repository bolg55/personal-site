import { fetchAPI } from '@/lib/api';
import { getStrapiMedia } from '@/lib/media';
import { footerQuery, headerQuery } from '@/queries/populate';

interface PageProps {}

const Page: ({}: PageProps) => Promise<JSX.Element> = async () => {
  return (
    <div>
      <h1 className='text-2xl'>Home</h1>
    </div>
  );
};

export default Page;
