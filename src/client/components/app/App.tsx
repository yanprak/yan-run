import React, { useEffect } from 'react';
import { useAuth } from '../../hooks';
import getRoutes from '../../routes';
import Header from '../header';
import changeTheme from '../../utils/theme';
import useTheme from '../../hooks/useTheme';
import Footer from '../footer/Footer';

export default function App() {
  const isAuthenticated = useAuth();
  const { current } = useTheme();
  const routes = getRoutes(isAuthenticated);

  useEffect(() => {
    if (current) {
      changeTheme(current);
    }
  }, [isAuthenticated, current]);

  return (
    <div className="main">
      <Header />
      {routes}
      <Footer />
    </div>
  );
}
