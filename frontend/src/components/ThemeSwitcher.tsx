'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import {
  HiOutlineSun,
  HiOutlineMoon,
  HiOutlineSparkles,
} from 'react-icons/hi2';

const useThemeSwitcher = (): [string, (theme: string) => void] => {
  const [mode, setMode] = useState('');
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMode(theme!);
  }, [theme]);

  return [mode, setTheme];
};

const ThemeSwitcher: React.FC = () => {
  const [theme, setTheme] = useThemeSwitcher();

  return (
    <button
      aria-label='Toggle Dark Mode'
      type='button'
      className='shadow p-1 dark:bg-dark bg-light rounded-md shadow-primary dark:shadow-primaryDark hover:shadow-primaryDark dark:hover:shadow-primary transition-all duration-150 ease-in-out'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {!theme ? (
        <HiOutlineSparkles className='h-6 w-6 text-dark dark:text-light' />
      ) : theme === 'dark' ? (
        <HiOutlineSun className='h-6 w-6 text-dark dark:text-light dark:hover:text-light/80' />
      ) : (
        <HiOutlineMoon className='h-6 w-6 text-dark dark:text-light hover:text-dark/40' />
      )}
    </button>
  );
};
export default ThemeSwitcher;
