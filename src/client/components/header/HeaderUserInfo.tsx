import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Avatar from '../avatar';
import { User, UserState } from '../../store/user/types';
import { HOST_URL } from '../../API';

function HeaderUserInfo() {
  const user = useSelector<UserState, User>(
    state => state.user!,
  );
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { avatar, login, first_name } = user;
  return (
    <Link to="/profile">
      <div className="container">
        <Avatar size="small" url={avatar ? `${HOST_URL}${avatar}` : avatar} />
        <div className="container container_is-column h4 padding_s-1 header__menu-list-link">
          {first_name}
          <span className="text">
            { `Логин: ${login}` }
          </span>
        </div>
      </div>
    </Link>
  );
}

export default React.memo(HeaderUserInfo);
