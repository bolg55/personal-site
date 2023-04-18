import AnimatedText from '@/components/AnimatedText';
import Image from 'next/image';
import HeroButton from './HeroButton';

interface HeroProps {
  hero: {
    callToAction: string;
    subheading?: string;
    image: {
      data: {
        attributes: {
          alternativeText: string;
          url: string;
        };
      };
    };
    buttons: {
      id: number;
      label: string;
      url: string;
      isPrimary?: boolean;
    }[];
  };
}

const Hero = ({ hero }: HeroProps) => {
  const { callToAction, subheading, buttons } = hero;
  const { url: heroImage, alternativeText } = hero.image.data.attributes;
  return (
    <div className='flex flex-col min-h-screen pt-0 lg:min-h-fit lg:mb-32 md:pt-16 sm:pt-8'>
      <div className='flex items-center justify-between w-full lg:flex-col'>
        <div className='w-1/2 md:w-full'>
          <Image
            src={heroImage}
            alt={alternativeText}
            width={500}
            height={500}
            priority
            sizes='(max-width: 768px) 100vw,(max-width:1200px) 50vw, 50vw'
            className='w-full h-auto lg:hidden md:inline-block md:w-full'
          />
        </div>
        <div className='flex flex-col items-center self-center w-1/2 lg:w-full lg:text-center'>
          <AnimatedText
            text={callToAction}
            className='text-6xl text-left xl:text-5xl lg:text-center lg:text-6xl md:text-5xl sm:text-3xl'
          />
          <p className='my-4 text-base font-medium text-dark dark:text-light md:text-sm sm:text-xs'>
            {subheading}
          </p>
          <div className='flex items-center self-start mt-4 lg:self-center'>
            {buttons.map((link) => (
              <HeroButton
                key={link.id}
                links={link}
                isPrimary={link.isPrimary}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
