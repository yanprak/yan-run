import React from 'react';
import { Link } from 'react-router-dom';
import HeaderMenu from './HeaderMenu';
import HeaderUserInfo from './HeaderUserInfo';

import './header.scss';

// remove sample
const user = {
  url: 'https://randomuser.me/api/portraits/women/44.jpg',
  name: 'Радмила Григорьева',
  score: 77,
};

export default function Header() {
  return (
    <header className="header">
      <div className="container container_center">
        <div className="header__inner">
          <Link className="header__logo" to="/">Yan Run</Link>
          <HeaderMenu />
          <Link to="/profile">
            <div className="container">
              <HeaderUserInfo {...user} />
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
