import { useTheme } from 'next-themes';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi2';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      aria-label='Toggle Dark Mode'
      type='button'
      className='p-1 transition-all duration-150 ease-in-out rounded-md shadow dark:bg-dark bg-light dark:hover:bg-primary/20 hover:bg-primaryDark/10 shadow-primary dark:shadow-primaryDark hover:shadow-primaryDark dark:hover:shadow-primary'
      onClick={changeTheme}
    >
      {theme === 'dark' ? (
        <HiOutlineSun className='w-6 h-6 text-dark dark:text-light' />
      ) : (
        <HiOutlineMoon className='w-6 h-6 text-dark dark:text-light' />
      )}
    </button>
  );
};
export default ThemeSwitcher;
