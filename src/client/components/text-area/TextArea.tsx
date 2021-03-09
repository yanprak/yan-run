import React, { FC } from 'react';
import { OwnProps } from './types';
import './text-area.scss';

const TextArea: FC<OwnProps> = (props: OwnProps) => {
  const {
    resizable,
    children,
    ...otherProps
  } = props;
  const resizableClass = resizable ? 'text-area_resizable' : '';
  const className = `text-area ${resizableClass} ${props.className || ''}`;
  return (
    <textarea {...otherProps} className={className}>{children}</textarea>
  );
};

export default TextArea;
