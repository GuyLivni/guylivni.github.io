import { Dispatch, SetStateAction } from 'react';
import { useLocalStorage } from './';

const windowExists = typeof window !== 'undefined';
const prefersDarkMode =
  windowExists && window.matchMedia('(prefers-color-scheme: dark)').matches;

function useDarkMode(): [boolean, Dispatch<SetStateAction<boolean>>] {
  const [isDark, setDark] = useLocalStorage('isDark', prefersDarkMode);

  return [isDark, setDark];
}

export default useDarkMode;
