import React from 'react';

import './header.scss';

export default function Header() {
  return (
    <header className="header">
      <div className="container container_center">
        <div className="header__inner">
          <a className="header__logo" href="/">Yan Run</a>

          <nav className="header__menu">
            <ul className="header__menu-list">
              <li className="header__menu-list-item">
                <a className="header__menu-list-link" href="/game">Игра</a>
              </li>
              <li className="header__menu-list-item">
                <a className="header__menu-list-link" href="/forum">Форум</a>
              </li>
              <li className="header__menu-list-item">
                <a className="header__menu-list-link" href="/leaderboard">Чемпионы</a>
              </li>
              <li className="header__menu-list-item">
                <a className="header__menu-list-link" href="/contact">Обратная связь</a>
              </li>
            </ul>
          </nav>

          <div className="header__user-nav">
            <a className="header__user-nav-link" href="/signin">Sign In</a>
            <a className="header__user-nav-link" href="/signup">Sign Up</a>
          </div>
        </div>
      </div>
    </header>
  );
}
