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
    <main className='flex flex-col items-center justify-center w-full mx-32'>
      <div className='grid w-full grid-cols-8 gap-16'>
        <div className='flex flex-col items-start justify-start col-span-3'>
          <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>
            {heading}
          </h2>
          <Markdown markdown={description} />
        </div>
        <div>
          <Image
            src={url}
            alt={alternativeText}
            width={1000}
            height={1000}
            className='w-full h-auto rounded-2xl'
          />
        </div>
      </div>
    </main>
  );
};
export default AboutMe;
