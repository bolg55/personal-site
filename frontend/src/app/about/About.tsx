import Markdown from '@/components/Markdown';
import Image from 'next/image';

interface AboutMeProps {
  about: {
    heading: string;
    description: string;
    image: {
      data: {
        attributes: {
          url: string;
          alternativeText: string;
        };
      };
    };
  };
}

const AboutMe = ({ about }: AboutMeProps) => {
  const { heading, description, image } = about;
  const { url, alternativeText } = image.data.attributes;

  return (
    <div className='grid grid-cols-8 gap-16 px-16 my-16'>
      <div className='col-span-4'>
        <h2 className='text-lg font-bold uppercase'>{heading}</h2>
        <Markdown markdown={description} />
      </div>

      <div className='relative col-span-4 p-8 border h-max rounded-2xl border-dark bg-light dark:border-light dark:bg-dark'>
        <div className='absolute top-0 -right-3 -z-10 w-[103%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl' />
        <Image
          src={url}
          alt={alternativeText}
          width={1000}
          height={1000}
          className='w-full h-auto rounded-2xl bg-gradient-to-r from-gray-700 via-gray-900 to-black'
        />
      </div>
    </div>
  );
};
export default AboutMe;
