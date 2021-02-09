import React from 'react';
import { Props } from './types';
import './input.scss';

const Input: React.FC<Props> = ({ title, errormessage, ...props }: Props) => (
  <label className="input">
    {title && <h6 className="input-title">{title}</h6>}
    <input className="input-control" {...props} />
    {errormessage && <span className="input-error">{errormessage}</span>}
  </label>
);

export default Input;
