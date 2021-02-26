import React, { FC } from 'react';
import { cn } from '@bem-react/classname';
import { OwnProps } from './types';
import './button.scss';

const Button: FC<OwnProps> = (props: OwnProps) => {
  const {
    children,
    size,
    styleType,
    className,
    ...otherProps
  } = props;
  const button = cn('button');
  const classNameValue = `${button({ style: styleType, size })} ${className || ''}`;
  return (
    <button type="button" {...otherProps} className={classNameValue}>{children}</button>
  );
};

export default Button;
