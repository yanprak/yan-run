import React, { FC } from 'react';
import { OwnProps } from './types';
import './avatar.scss';

const Avatar: FC<OwnProps> = (props: OwnProps) => {
  const { url, size, ...otherProps } = props;
  const avatarStyle = url ? { backgroundImage: `url(${url})` } : {};
  const className = `avatar avatar_${size || 'medium'} ${props.className ? props.className : ''}`;
  return (
    <div {...otherProps} className={className} style={avatarStyle} />
  );
};

export default Avatar;
