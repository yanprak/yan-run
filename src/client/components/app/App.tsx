import React from 'react';
import { useAuth } from '../../hooks';
import getRoutes from '../../routes';
import Header from '../header';

export default function App() {
  const isAuthenticated = useAuth();
  const routes = getRoutes(isAuthenticated);
  return (
    <div className="main">
      <Header />
      {routes}
    </div>
  );
}
