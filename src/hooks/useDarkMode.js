import { useLocalStorage } from './';

const windowExists = typeof window !== 'undefined';
const prefersDarkMode =
  windowExists && window.matchMedia('(prefers-color-scheme: dark)').matches;

function useDarkMode() {
  const [isDark, setDark] = useLocalStorage('isDark', prefersDarkMode);

  return [isDark, setDark];
}

export default useDarkMode;
