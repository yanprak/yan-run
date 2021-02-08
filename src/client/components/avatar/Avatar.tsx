import React from 'react';
import {Props} from './types';
import './avatar.scss';

const Avatar: Props = ({url, size, ...otherProps}) => {
  const avatarStyle = url ? { backgroundImage: `url(${url})` } : {};
  return (
    <div className={`avatar avatar_${size ? size : 'medium'}`} style={avatarStyle} {...otherProps}></div>
  );
};

export default Avatar;
