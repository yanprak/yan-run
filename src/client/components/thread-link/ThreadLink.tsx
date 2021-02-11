import React, { FC } from 'react';
import { OwnProps } from './types';
import './thread-link.scss';
import Icon from '../icon';

const ThreadLink: FC<OwnProps> = (props: OwnProps) => {
  const {
    title,
    messagesCounter,
    ...otherProps
  } = props;
  const className = `thread-link padding_s-6 ${props.className ? props.className : ''}`;
  return (
    <div className={className} {...otherProps}>
      <h4 className="thread-link__title h4">{title}</h4>
      <div className="thread-link__stats">
        <Icon name="forum" className="thread-link__icon" />
        <span className="thread-link__counter">{messagesCounter}</span>
      </div>
    </div>
  );
};

export default ThreadLink;
