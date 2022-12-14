import RawApp from '../App';
import { useTheme } from '../hooks/useTheme';
import { ChooseAvatar } from '../pages/ChooseAvatar';
import { setGlobalDataThemeHTML } from '../utils/setters';
import { Routes as Switch, Route, BrowserRouter } from 'react-router-dom';

export const Routes = () => {
  const App = RawApp as any;

  const { theme } = useTheme();
  setGlobalDataThemeHTML(theme);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/choose-avatar" element={<ChooseAvatar />} />
        <Route path="/" element={<App />} />
      </Switch>
    </BrowserRouter>
  );
};
