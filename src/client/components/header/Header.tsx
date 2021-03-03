import React from 'react';
import { Link } from 'react-router-dom';
import HeaderMenu from './HeaderMenu';
import HeaderUserInfo from './HeaderUserInfo';

import './header.scss';
import { useAuth } from '../../hooks';

export default function Header() {
  const isAuthenticated = useAuth();
  return (
    <header className="header">
      <div className="container container_center">
        <div className="header__inner">
          <Link className="header__logo" to="/">Yan Run</Link>
          {isAuthenticated && (
            <>
              <HeaderMenu />
              <HeaderUserInfo />
            </>
          )}
        </div>
      </div>
    </header>
  );
}
