import React from 'react';
import { useSelector } from 'react-redux';
import Avatar from '../avatar';
import { selectUser } from '../../store/user/selectors';

function HeaderUserInfo() {
  const user = useSelector(selectUser);
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { avatar, login, first_name } = user;
  return (
    <div className="container">
      <Avatar size="small" url={avatar} />
      <div className="container container_is-column h4 padding_s-1 header__menu-list-link">
        {first_name}
        <span className="text">
          { `Логин: ${login}` }
        </span>
      </div>
    </div>
  );
}

export default React.memo(HeaderUserInfo);
