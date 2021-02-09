import React, { PureComponent } from 'react';
import { Props } from './types';
import './input.scss';

class Input extends PureComponent<Props> {
  render() {
    const {
      title,
      errormessage,
      name,
      ...otherProps
    } = this.props;
    return (
      <label htmlFor={name} className="input">
        {title && <h6 className="input-title">{title}</h6>}
        <input className="input-control" id={name} {...otherProps} />
        {errormessage && <span className="input-error">{errormessage}</span>}
      </label>
    );
  }
}

export default Input;
