import React from 'react';
import {Props} from './types';
import './button.scss';

const Button: Props = ({children, size, styleType, ...otherProps}) => {
  return (
    <button className={`button button-${styleType} button-${size}`} {...otherProps}>{children}</button>
  );
};

export default Button;
