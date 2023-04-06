import { IconName } from './Icon';
import SocialIcon from './SocialIcon';

interface SocialMenuProps {
  socialLinks: {
    id: number;
    iconName: IconName;
    link: string;
  }[];
  className?: string;
  color?: string;
}

const SocialMenu = ({ socialLinks, className, color }: SocialMenuProps) => (
  <ul className={className}>
    {socialLinks.map((item) => (
      <li key={item.id}>
        <SocialIcon iconName={item.iconName} href={item.link} color={color} />
      </li>
    ))}
  </ul>
);
export default SocialMenu;
