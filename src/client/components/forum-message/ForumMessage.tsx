import React, { FC } from 'react';
import { OwnProps } from './types';
import './forum-message.scss';
import Avatar from '../avatar';
import { formatDate, getTime, isDateValid, createShortDate } from '../../utils/datetime';

const ForumMessage: FC<OwnProps> = (props: OwnProps) => {
  const {
    text,
    createdAt,
    user,
    ...otherProps
  } = props;
  const className = `message padding_s-6 ${props.className || ''}`;
  const date = new Date(createdAt);
  const isValidDate = isDateValid(date);
  const shortDate = isValidDate ? createShortDate(date) : '';
  const time = isValidDate ? getTime(date) : '';
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
      <div className="message__post">{text}</div>
    </div>
  );
};

export default ForumMessage;
