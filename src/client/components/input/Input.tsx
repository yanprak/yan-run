import React, { useState } from 'react';
import { Props } from './types';
import './input.scss';

export default function Input({ title, errorMessage, ...props }: Props) {
  const [focus, setFocus] = useState<boolean>(false);

  return (
    <label className="input">
      {title && <h6 className="input__title">{title}</h6>}
      <input
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        className={
          focus ? 'input__control input__control_focus' : 'input__control'
        }
        autoComplete="off"
        {...props}
      />
      {errorMessage && <span className="input__error">{errorMessage}</span>}
    </label>
  );
}
