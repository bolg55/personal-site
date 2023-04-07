import Link from 'next/link';

interface HeroButtonProps {
  links: {
    id: number;
    label: string;
    url: string;
  };
  isPrimary?: boolean;
}

const HeroButton = ({ links, isPrimary }: HeroButtonProps) => {
  const { id, url, label } = links;

  const buttonClass = isPrimary
    ? 'bg-dark text-light hover:bg-light hover:text-dark border-2 border-transparent hover:border-dark dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light'
    : 'text-dark underline';

  return (
    <button>
      <Link
        key={id}
        href={url}
        className={`${buttonClass} capitalize p-2.5 px-6 rounded-lg text-lg font-semibold transition-all duration-300 ease-in-out`}
      >
        {label}
      </Link>
    </button>
  );
};
export default HeroButton;
