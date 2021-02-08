import React from 'react';
import { Props, OwnProps } from './types';
import './button.scss';

const Button: Props = (props: OwnProps) => {
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
