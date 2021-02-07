import React, { PureComponent, ChangeEvent, InputHTMLAttributes } from 'react';

import './input.scss';

interface OwnProps extends InputHTMLAttributes<HTMLInputElement>{
  handleChange?: (event: ChangeEvent) => void
  errormessage?: string
  title?: string
}

type Props = OwnProps;

export default class Input extends PureComponent<Props> {
  public render() {
    const { ...props } = this.props;
    return (
      <div className="input">
        <label className="input-label" htmlFor={props.name}>
          {props.title}
        </label>
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
  }
}
