import React from 'react';
import './footer.scss';

type UserGitHub = {
  login: string,
  id: number,
};

const usersGitHub: UserGitHub[] = [
  {
    login: 'antonkagakin',
    id: 74297088,
  },
  {
    login: 'ferahar',
    id: 69187061,
  },
  {
    login: 'rade363',
    id: 6594020,
  },
];

const Contributor = (index:number, user: UserGitHub) => (
  <a href={`https://github.com/${user.login}`}>
    <div key={index} className="footer__contributor margin_s-2">
      <img className="footer__avatar" src={`https://avatars.githubusercontent.com/u/${user.id}?s=40&v=4`} alt="" />
      <span className="margin_s-2">{ user.login }</span>
    </div>
  </a>
);

function Footer() {
  return (
    <div className="footer">
      { usersGitHub.map((key, index) => Contributor(index, key)) }
    </div>
  );
}

export default React.memo(Footer);
