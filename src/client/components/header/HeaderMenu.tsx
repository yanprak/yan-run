import React from 'react';
import { Link } from 'react-router-dom';

export default function HeaderMenu() {
  return (
    <nav className="header__menu">
      <ul className="header__menu-list">
        <li className="header__menu-list-item">
          <Link className="header__menu-list-link" to="/game">Игра</Link>
        </li>
        <li className="header__menu-list-item">
          <Link className="header__menu-list-link" to="/forum">Форум</Link>
        </li>
        <li className="header__menu-list-item">
          <Link className="header__menu-list-link" to="/leaderboard">Чемпионы</Link>
        </li>
        <li className="header__menu-list-item">
          <Link className="header__menu-list-link" to="/contact">Обратная связь</Link>
        </li>
        <li className="header__menu-list-item">
          <Link className="header__menu-list-link" to="/signin">Enter</Link>
        </li>
      </ul>
    </nav>
  );
}
