import React from 'react';
import { Props } from './types';
import './input.scss';

export default function Input({ title, errorMessage, ...props }: Props) {
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className="input">
      {title && <h6 className="input__title">{title}</h6>}
      <input className="input__control" autoComplete="off" {...props} />
      {errorMessage && <span className="input__error">{errorMessage}</span>}
    </label>
  );
}
