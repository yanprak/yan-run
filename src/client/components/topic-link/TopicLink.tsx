import React, { FC } from 'react';
import { OwnProps } from './types';
import './topic-link.scss';
import Icon from '../icon';

const TopicLink: FC<OwnProps> = (props: OwnProps) => {
  const {
    title,
    messagesCounter,
    ...otherProps
  } = props;
  const className = `topic-link padding_s-6 ${props.className ? props.className : ''}`;
  return (
    <div className={className} {...otherProps}>
      <h4 className="topic-link__title h4">{title}</h4>
      <div className="topic-link__stats">
        <Icon name="forum" className="topic-link__icon" />
        <span className="topic-link__counter">{messagesCounter}</span>
      </div>
    </div>
  );
};

export default TopicLink;
