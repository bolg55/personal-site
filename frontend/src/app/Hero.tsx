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
    <div className='flex flex-col min-h-screen'>
      <div className='flex'>
        <div className='w-1/2'>
          <Image
            src={heroImage}
            alt={alternativeText}
            width={500}
            height={500}
            priority
            sizes='(max-width: 768px) 100vw,(max-width:1200px) 50vw, 50vw'
            className='w-full h-auto'
          />
        </div>
        <div className='flex flex-col items-center self-center w-1/2'>
          <AnimatedText text={callToAction} className='text-6xl text-left' />
          <p className='my-4 text-base font-medium text-dark dark:text-light'>
            {subheading}
          </p>
          <div className='flex items-center self-start mt-2 space-x-2'>
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
