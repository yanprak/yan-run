import React, { useEffect } from 'react';
// import { useSelector } from 'react-redux';
import { useAuth } from '../../hooks';
import getRoutes from '../../routes';
import Header from '../header';
// import { ThemeState } from '../../store/theme/types';
// import { ApplicationState } from '../../store/types';
import changeTheme from '../../utils/theme';
import useTheme from '../../hooks/useTheme';

export default function App() {
  const isAuthenticated = useAuth();
  const { current } = useTheme();
  const routes = getRoutes(isAuthenticated);

  // const theme = useSelector<ApplicationState, ThemeState>(
  //   state => state.theme,
  // );

  useEffect(() => {

    if (current) {
      console.log('-= Change theme = ', current.id);
      changeTheme(current);
    }

    // if (isAuthenticated) {
    //   console.log('getThemes');
    //   getThemes();
    // }
  }, [isAuthenticated]);

  return (
    <div className="main">
      <Header />
      {routes}
    </div>
  );
}
