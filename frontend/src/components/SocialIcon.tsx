import Link from 'next/link';
import { IconName, ReactIcon } from '@/components/Icon';

interface SocialIconProps {
  href: string;
  iconName: IconName;
  color?: string;
  width?: string;
  height?: string;
  background?: string;
}

const SocialIcon = ({
  href,
  iconName,
  color,
  width = 'w-6',
  height = 'h-6',
  background,
}: SocialIconProps) => {
  return (
    <Link href={href} target={'_blank'}>
      <ReactIcon
        icon={iconName}
        className={`${color} ${width} ${height} ${background} hover:opacity-80`}
      />
    </Link>
  );
};
export default SocialIcon;
