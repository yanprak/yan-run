import React from 'react';
import { Props } from './types';
import './input.scss';

function Input({ title, errorMessage, ...props }: Props) {
  return (
    <label className="input">
      {title && <span className="input__title">{title}</span>}
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
