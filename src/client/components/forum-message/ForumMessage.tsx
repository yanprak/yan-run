import React, { FC } from 'react';
import { OwnProps } from './types';
import './forum-message.scss';
import Avatar from '../avatar';
import { formatDate, getTime } from '../../utils/datetime';

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
      <div className="message__user">
        <h4 className="message__username">{user.login}</h4>
        <Avatar url={user.avatar} className="message__avatar margin_tb_s-4" />
        <time dateTime={`${formatDate(date)} ${time}`} className="message__datetime">
          <span className="message__date">{shortDate}</span>
          <span className="message__time margin_tb_s-1">{time}</span>
        </time>
      </div>
      <div className="message__post">{message}</div>
    </div>
  );
};

export default ForumMessage;
