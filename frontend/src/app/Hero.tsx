import AnimatedText from '@/components/AnimatedText';
import Image from 'next/image';
import HeroButton from './HeroButton';

interface HeroProps {
  heroImage: string;
  hero: {
    callToAction: string;
    subheading?: string;
    image: {
      data: {
        attributes: {
          alternativeText: string;
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

const Hero = ({ heroImage, hero }: HeroProps) => {
  const { callToAction, subheading, buttons } = hero;
  const { alternativeText } = hero.image.data.attributes;
  return (
    <div className='flex my-32'>
      <div className='w-1/2'>
        <Image
          src={heroImage}
          alt={alternativeText}
          width={1000}
          height={1000}
          priority
        />
      </div>
      <div className='w-1/2 flex flex-col items-center self-center'>
        <AnimatedText text={callToAction} className='text-left text-6xl' />
        <p className='my-4 text-base font-medium text-dark dark:text-light'>
          {subheading}
        </p>
        <div className='flex items-center self-start mt-2 space-x-2'>
          {buttons.map((link) => (
            <HeroButton key={link.id} links={link} isPrimary={link.isPrimary} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Hero;
