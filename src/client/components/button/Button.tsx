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
  const className = `button button_${styleType} button_${size} ${props.className ? props.className : ''}`;
  return (
    <button type="button" {...otherProps} className={className}>{children}</button>
  );
};

export default Button;
