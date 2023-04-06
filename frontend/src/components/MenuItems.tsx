'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MenuItemsProps {
  menuItems: {
    id: number;
    url: string;
    label: string;
  }[];
  className?: string;
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
              className={`h-[1px] inline-block  left-0 -bottom-0.5 bg-dark absolute
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
