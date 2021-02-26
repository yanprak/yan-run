import React, { FC } from 'react';
import { OwnProps } from './types';
import './icon.scss';

const Icon: FC<OwnProps> = (props: OwnProps) => {
  const {
    name,
    size,
    ...otherProps
  } = props;
  const iconSize = props.size ? `icon_size-${props.size}` : '';
  const className = `icon material-icons ${iconSize} ${props.className || ''}`;
  return (
    <span {...otherProps} className={className}>{name}</span>
  );
};

export default Icon;
