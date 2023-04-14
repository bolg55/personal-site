'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

interface MenuItemsProps {
  menuItems: {
    id: number;
    url: string;
    label: string;
  }[];
  className?: string;
  toggleMenu?: () => void;
}

const MenuItems = ({ menuItems, className }: MenuItemsProps) => {
  const path = usePathname();

  return (
    <ul className={className}>
      {menuItems.map((item) => (
        <li key={item.id}>
          <Link href={item.url} className='relative group'>
            {item.label}
            <span
              className={`h-[1px]  inline-block  left-0 -bottom-0.5 bg-dark dark:bg-light absolute
              group-hover:w-full transition-[width] duration-300 ease
              ${path === item.url ? 'w-full' : 'w-0'}
              `}
            >
              &nbsp;
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuItems;

export const MobileMenuItems = ({
  menuItems,
  className,
  toggleMenu,
}: MenuItemsProps) => {
  const router = useRouter();

  const handleRouteChange = (url: string) => {
    toggleMenu && toggleMenu();
    router.push(url);
  };

  return (
    <ul className={className}>
      {menuItems.map((item) => (
        <li key={item.id}>
          <button
            onClick={() => handleRouteChange(item.url)}
            className='relative capitalize group'
          >
            {item.label}
          </button>
        </li>
      ))}
    </ul>
  );
};
