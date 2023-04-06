import * as ReactIcons from 'react-icons/fa';

export type IconName = keyof typeof ReactIcons;

interface Props {
  icon: IconName;
  className?: string;
}

export const ReactIcon = (props: Props): JSX.Element => {
  const { icon, className = 'w-6 h-6 text-gray-600' } = props;
  const Icon = ReactIcons[icon];
  return <Icon className={className} />;
};
