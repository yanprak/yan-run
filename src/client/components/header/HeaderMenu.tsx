import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuthApi } from '../../hooks';
import { setUser } from '../../store/user/actions';

export default function HeaderMenu() {
  const { signout } = useAuthApi();
  const dispath = useDispatch();
  const handleSignOut = () => {
    signout()
      .then(r => {
        window.console.log('Successful signout');
        window.console.dir(r);
        const emptyUser = setUser({});
        dispath(emptyUser);
      })
      .catch((e: Error) => {
        const error = JSON.parse(e.message) as { status: string, message: string };
        window.console.log(error.status, error.message);
      });
  };
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
            onClick={handleSignOut}
          >
            Logout
          </span>
        </li>
      </ul>
    </nav>
  );
}
