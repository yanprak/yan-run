import React from 'react';
import { Props } from './types';
import './input.scss';

const Input: React.FunctionComponent = ({ title, errormessage, ...props }: Props) => (
  <div className="input">
    {title && <label className="input-label" htmlFor={props.name}>{title}</label>}
    <input className="input-control" {...props} />
    {errormessage && <span className="input-error">{errormessage}</span>}
  </div>
);

export default Input;
