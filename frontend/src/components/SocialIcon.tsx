import Image from 'next/image';
import Link from 'next/link';

interface SocialIconProps {
  href: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

const SocialIcon = ({ href, src, alt, width, height }: SocialIconProps) => {
  return (
    <Link href={href}>
      <Image src={src} alt={alt} width={width} height={height} />
    </Link>
  );
};
export default SocialIcon;
