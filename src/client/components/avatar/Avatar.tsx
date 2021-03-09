import React, { FC } from 'react';
import { cn } from '@bem-react/classname';
import { OwnProps } from './types';
import './avatar.scss';

const Avatar: FC<OwnProps> = ({ url, size, className, ...otherProps }: OwnProps) => {
  const avatarStyle = url ? { backgroundImage: `url(${url})` } : {};
  const avatar = cn('avatar');
  const classNameValue = `${avatar({ size: size || 'medium' })} ${className || ''}`;
  return (
    <div {...otherProps} className={classNameValue} style={avatarStyle} />
  );
};

export default Avatar;
