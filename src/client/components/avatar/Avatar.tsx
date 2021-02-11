import React, { FC } from 'react';
import { OwnProps } from './types';
import './avatar.scss';

const Avatar: FC<OwnProps> = (props: OwnProps) => {
  const { url, size, ...otherProps } = props;
  const avatarStyle = url ? { backgroundImage: `url(${url})` } : {};
  return (
    <div className={`avatar avatar_${size || 'medium'}`} style={avatarStyle} {...otherProps} />
  );
};

export default Avatar;
