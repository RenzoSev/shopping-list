import RawApp from '../App';
import { ChooseAvatar } from '../pages/ChooseAvatar';
import { Routes as Switch, Route, BrowserRouter } from 'react-router-dom';

export const Routes = () => {
  const App = RawApp as any;

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/choose-avatar" element={<ChooseAvatar />} />
        <Route path="/" element={<App />} />
      </Switch>
    </BrowserRouter>
  );
};
