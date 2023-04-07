'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

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
    <select value={theme} onChange={(e) => setTheme(e.target.value)}>
      <option value='system'>System</option>
      <option value='dark'>Dark</option>
      <option value='light'>Light</option>
    </select>
  );
};
export default ThemeSwitcher;
