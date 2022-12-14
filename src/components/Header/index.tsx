import { IconType } from 'react-icons';
import { THEME, useTheme } from '../../hooks/useTheme';
import { Component } from '../../types/Component';
import { Avatar } from '../Avatar';
import { FilterIcon } from '../Icons/Filter';
import { MoonIcon } from '../Icons/Moon';
import { SunIcon } from '../Icons/Sun';

export interface IHeader {
  img: string;
  name: string;
}

// TODO: THEME HAS TO BE A CONTEXT/PERSISTED STATE

export const Header: Component<IHeader> = (props) => {
  const { img, name } = props;
  const { theme, toggleTheme, setGlobalTheme } = useTheme();

  function handleFilterProducts() {
    return;
  }

  function handleChangeThemeMode() {
    const t = toggleTheme(theme);
    setGlobalTheme(t);
  }

  function renderIcons() {
    const ThemeIcon = theme === THEME.DARK ? MoonIcon : SunIcon;

    const handles = [
      [handleChangeThemeMode, ThemeIcon],
      [handleFilterProducts, FilterIcon],
    ] as [() => void, IconType][];

    return handles.map(([handleClick, Icon], index) => {
      return (
        <div onClick={handleClick} key={index}>
          <Icon size={24} />
        </div>
      );
    });
  }

  return (
    <header className="flex py-8 justify-between">
      <div className="flex items-center gap-4">
        <Avatar src={img} className="w-20 h-20" />

        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <span className="text-xl font-light">Boas vindas,</span>

            <span className="text-2xl">
              <b>{name}</b>
            </span>
          </div>

          <span className="text-sm font-light">
            {/* TODO: HAS TO BE DYNAMIC */}
            Itens adicionados: <span className="font-bold">3</span>
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-between">{renderIcons()}</div>
    </header>
  );
};
