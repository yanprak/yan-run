import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAuth } from '../../hooks';
import getRoutes from '../../routes';
import Header from '../header';
import { ThemeState } from '../../store/theme/types';
import { ApplicationState } from '../../store/types';
import themeChange from '../../utils/themeChange';

export default function App() {
  const isAuthenticated = useAuth();
  const routes = getRoutes(isAuthenticated);

  const theme = useSelector<ApplicationState, ThemeState>(
    state => state.theme,
  );

  useEffect(() => {
    themeChange(theme.current);
  }, [isAuthenticated]);

  return (
    <div className="main">
      <Header />
      {routes}
    </div>
  );
}
