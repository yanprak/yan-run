import React from 'react';
import { Props } from './types';
import './input.scss';

const Input = ({ title, errormessage, ...props }: Props) => (
  <div className="input">
    {(title && title.length > 0)
    && <label className="input-label" htmlFor={props.name}>{title}</label>}
    <input
      className="input-control"
      {...props}
    />
    {(errormessage && errormessage.length > 0)
      && <span className="input-error">{errormessage}</span>}
  </div>
);

export default Input;
