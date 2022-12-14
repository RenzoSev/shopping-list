import { setGlobalDataThemeHTML } from '../utils/setters';
import { usePersistedState } from './usePersistedState';

export enum THEME {
  LIGHT = 'winter',
  DARK = 'halloween',
}

export function useTheme() {
  const [theme, setTheme] = usePersistedState('theme', THEME.LIGHT);

  function toggleTheme(theme: THEME) {
    return theme === THEME.DARK ? THEME.LIGHT : THEME.DARK;
  }

  function setGlobalTheme(t: THEME) {
    setTheme(t);
    setGlobalDataThemeHTML(t);
  }

  return { theme, setTheme, toggleTheme, setGlobalTheme };
}
