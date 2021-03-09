import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { useAuth } from '../../hooks';
import getRoutes from './routes';
import Header from '../header';

export default function App() {
  const isAuthenticated = useAuth();
  const routes = getRoutes(isAuthenticated);
  return (
    <Router>
      <div className="main">
        <Header />
        {routes}
      </div>
    </Router>
  );
}
