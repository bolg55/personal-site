import AnimatedText from '@/components/AnimatedText';
import Image from 'next/image';
import Link from 'next/link';
import HeroButton from './HeroButton';

interface HeroProps {
  heroImage: string;
  hero: {
    callToAction: string;
    subheading?: string;
    buttons: {
      id: number;
      label: string;
      url: string;
      isPrimary?: boolean;
    }[];
  };
}

const Hero = ({ heroImage, hero }: HeroProps) => {
  return (
    <>
      <div className='w-1/2'>
        <Image
          src={heroImage}
          alt='hero image'
          width={1000}
          height={1000}
          priority
        />
      </div>
      <div className='w-1/2 flex flex-col items-center self-center'>
        <AnimatedText text={hero.callToAction} className='text-left' />
        <p className='my-4 text-base font-medium'>{hero.subheading}</p>
        <div className='flex items-center self-start mt-2 space-x-2'>
          {hero.buttons.map((link) => (
            <HeroButton key={link.id} links={link} isPrimary={link.isPrimary} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Hero;
