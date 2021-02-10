import React from 'react';
import {
  Link,
} from 'react-router-dom';

import HeaderMenu from './HeaderMenu';
import Avatar from '../avatar';

import './header.scss';

export default function Header() {
  return (
    <header className="header">
      <div className="container container_center">
        <div className="header__inner">
          <Link className="header__logo" to="/">Yan Run</Link>
          <HeaderMenu />
          <Link to="/profile">
            <Avatar />
          </Link>
        </div>
      </div>
    </header>
  );
}
