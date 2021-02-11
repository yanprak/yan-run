import React, { FC } from 'react';
import { OwnProps } from './types';
import './forum-message.scss';
import Avatar from '../avatar';
import { formatDate, getTime } from '../../utils';

const ForumMessage: FC<OwnProps> = (props: OwnProps) => {
  const {
    message,
    createdAt,
    user,
    ...otherProps
  } = props;
  const className = `message padding_s-6 ${props.className ? props.className : ''}`;
  const date = new Date(createdAt);
  const shortDate = date.toLocaleString('ru', {
    month: 'long',
    day: 'numeric',
  });
  const time = getTime(date);
  return (
    <div {...otherProps} className={className}>
      <div className="message__user-info user-info">
        <h4 className="user-info__username">{user.username}</h4>
        <Avatar url={user.avatar} className="user-info__avatar margin_tb_s-4" />
        <time dateTime={`${formatDate(date)} ${time}`} className="user-info__datetime">
          <span className="user-info__date">{shortDate}</span>
          <span className="user-info__time margin_tb_s-1">{time}</span>
        </time>
        <div />
        <time />
      </div>
      <div className="message__post">{message}</div>
    </div>
  );
};

export default ForumMessage;
