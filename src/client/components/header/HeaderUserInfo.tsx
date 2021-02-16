import React from 'react';
import Avatar from '../avatar';

type HeaderUser = {
  url: string,
  name: string,
  score: string | number,
};

function HeaderUserInfo(props: HeaderUser) {
  const { url, name, score } = props;
  return (
    <div className="container">
      <Avatar size="small" url={url} />
      <div className="container container_is-column h4 padding_s-1 header__menu-list-link">
        {name}
        <span className="text">
          { `Лучший результат: ${score}` }
        </span>
      </div>
    </div>
  );
}

export default React.memo<HeaderUser>(HeaderUserInfo);
