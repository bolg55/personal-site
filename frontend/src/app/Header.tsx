'use client';

import { IconName } from '@/components/Icon';
import Logo from '@/components/Logo';
import MenuItems from '@/components/MenuItems';
import SocialMenu from '@/components/SocialMenu';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import { Dialog } from '@headlessui/react';
import { useState } from 'react';
import { HiBars3, HiXMark } from 'react-icons/hi2';

interface HeaderProps {
  logoUrl: string;
  alt: string;
  showLogo: boolean;
  menu: {
    data: {
      attributes: {
        menuItems: {
          id: number;
          url: string;
          label: string;
        }[];
      };
    };
  };
  socialLinks: {
    id: number;
    iconName: IconName;
    link: string;
    socialMedia: string;
  }[];
}

const Header = ({ logoUrl, alt, showLogo, menu, socialLinks }: HeaderProps) => {
  const { menuItems } = menu.data.attributes;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className='flex items-center justify-between w-full px-32 py-8 font-medium'>
      <button
        onClick={() => setMobileMenuOpen(true)}
        className='hidden lg:flex'
      >
        <HiBars3 className='w-8 h-8 text-dark dark:text-light' />
      </button>

      <Dialog
        as='div'
        className='hidden lg:flex'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className='fixed inset-0 z-50' />
        <Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <Logo src={logoUrl} alt={alt} />
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <HiXMark className='w-6 h-6' aria-hidden='true' />
            </button>
          </div>
          <div className='flow-root mt-6'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='py-6 space-y-2'>
                <MenuItems
                  menuItems={menuItems}
                  className='flex-col hidden capitalize lg:flex'
                />
              </div>
              <div className='flex items-start justify-start space-x-4'>
                <SocialMenu
                  socialLinks={socialLinks}
                  className='w-6 h-6 text-dark dark:text-light'
                />
                <ThemeSwitcher />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>

      <MenuItems
        menuItems={menuItems}
        className='flex space-x-4 capitalize lg:hidden'
      />

      {showLogo && (
        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
          <Logo src={logoUrl} alt={alt} />
        </div>
      )}
      <div className='flex space-x-10'>
        <SocialMenu
          socialLinks={socialLinks}
          className='w-6 h-6 text-dark dark:text-light'
        />
        <ThemeSwitcher />
      </div>
    </header>
  );
};
export default Header;
