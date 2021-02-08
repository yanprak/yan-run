import React from 'react';
import { Props } from './types';
import './input.scss';

const Input = (props: Props) => (
  <div className="input">
    {(props.title && props.title.length > 0)
    && <label className="input-label" htmlFor={props.name}>{props.title}</label>}
    <input
      id={props.name}
      name={props.name}
      type={props.type}
      value={props.value}
      onChange={props.handleChange}
      placeholder={props.placeholder}
    />
    {(props.errormessage && props.errormessage.length > 0)
      && <span className="input-error">{props.errormessage}</span>}
  </div>
);

export default Input;
