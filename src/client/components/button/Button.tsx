import React, { FC } from 'react';
import { OwnProps } from './types';
import './button.scss';

const Button: FC<OwnProps> = (props: OwnProps) => {
  const {
    children,
    size,
    styleType,
    ...otherProps
  } = props;
  return (
    <button type="button" className={`button button_${styleType} button_${size}`} {...otherProps}>{children}</button>
  );
};

export default Button;
