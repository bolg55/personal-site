import Image from 'next/image';

interface LogoProps {
  alt: string;
  src: string;
}

const Logo = ({ alt, src }: LogoProps) => (
  <Image alt={alt} src={src} width={80} height={80} priority />
);

export default Logo;
