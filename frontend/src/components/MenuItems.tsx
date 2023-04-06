import Link from 'next/link';

interface MenuItemsProps {
  menuItems: {
    id: number;
    url: string;
    label: string;
  }[];
  className?: string;
}

const MenuItems = ({ menuItems, className }: MenuItemsProps) => (
  <ul className={className}>
    {menuItems.map((item) => (
      <li key={item.id}>
        <Link href={item.url}>{item.label}</Link>
      </li>
    ))}
  </ul>
);

export default MenuItems;
