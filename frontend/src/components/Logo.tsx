import Image from 'next/image';

interface LogoProps {
  alt: string;
  src: string;
}

const Logo = ({ alt, src }: LogoProps) => (
  <Image alt={alt} src={src} width={100} height={100} />
);

export default Logo;
