import React from 'react';
import {Props} from './types';
import './avatar.scss';

const Avatar: Props = ({url, ...otherProps}) => {
  const avatarStyle = url ? { backgroundImage: `url(${url})` } : {};
  return (
    <div className="avatar" style={avatarStyle} {...otherProps}></div>
  );
};

export default Avatar;
