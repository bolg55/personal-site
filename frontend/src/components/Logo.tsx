import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  alt: string;
  src: string;
}

const Logo = ({ alt, src }: LogoProps) => (
  <Link href='/'>
    <Image
      alt={alt}
      src={src}
      width={100}
      height={100}
      priority
      className='items-center justify-center rounded-full p-1.5 border shadow-md bg-green-500/25'
    />
  </Link>
);

export default Logo;
