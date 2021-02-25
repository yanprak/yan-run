import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthApi } from '../../hooks';

export default function HeaderMenu() {
  const { signout } = useAuthApi();
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
        <li className="header__menu-list-item">
          <Link className="header__menu-list-link" to="/signup">Reg</Link>
        </li>
        <li className="header__menu-list-item">
          <span
            aria-hidden
            className="header__menu-list-link"
            onClick={() => {
              signout()
                .then(r => {
                  window.console.log('Successful signout');
                  window.console.dir(r);
                })
                .catch((e: Error) => {
                  const error = JSON.parse(e.message) as { status: string, message: string };
                  window.console.log(error.status, error.message);
                });
            }}
          >
            Logout
          </span>
        </li>
      </ul>
    </nav>
  );
}
