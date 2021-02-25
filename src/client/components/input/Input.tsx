import React from 'react';
import { Props } from './types';
import './input.scss';

function Input({ title, errorMessage, ...props }: Props) {
  return (
    <label className="input">
      {title && <h6 className="input__title">{title}</h6>}
      <input
        className="input__control"
        autoComplete="off"
        {...props}
      />
      {errorMessage && <span className="input__error">{errorMessage}</span>}
    </label>
  );
}
export default Input;
