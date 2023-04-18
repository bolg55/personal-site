import Link from 'next/link';

interface HeroButtonProps {
  links: {
    id: number;
    label: string;
    url: string;
  };
  isPrimary?: boolean;
}

const HeroButton = ({ links }: HeroButtonProps) => {
  const { id, url, label } = links;

  return (
    <button>
      <Link
        key={id}
        href={url}
        className='bg-dark text-light hover:bg-light hover:text-dark border-2 border-transparent hover:border-dark dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light md:p-2 md:px-4 md:text-base capitalize p-2.5 px-6 rounded-lg text-lg font-semibold transition-all duration-300 ease-in-out'
      >
        {label}
      </Link>
    </button>
  );
};
export default HeroButton;
