import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { OwnProps } from './types';
import Icon from '../icon';
import './topic-link.scss';

const TopicLink: FC<OwnProps> = (props: OwnProps) => {
  const {
    uid,
    title,
    messagesCounter,
    ...otherProps
  } = props;
  const className = `topic-link padding_s-6 ${props.className || ''}`;
  return (
    <Link to={`/forum/topics/${uid}`}>
      <div className={className} {...otherProps}>
        <h4 className="topic-link__title h4">{title}</h4>
        <div className="topic-link__stats">
          <Icon name="forum" className="topic-link__icon" />
          <span className="topic-link__counter">{messagesCounter}</span>
        </div>
      </div>
    </Link>
  );
};

export default TopicLink;
