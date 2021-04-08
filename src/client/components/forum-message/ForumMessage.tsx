import React, { FC } from 'react';
import { OwnProps } from './types';
import './forum-message.scss';
import Avatar from '../avatar';
import Reaction from '../reaction';
import { formatDate, getTime, isDateValid, createShortDate } from '../../utils/datetime';
import { ReactionEnum } from '../reaction/types';

const ForumMessage: FC<OwnProps> = (props: OwnProps) => {
  const {
    text,
    createdAt,
    user,
    parentId,
    topicId,
    reactions,
    ...otherProps
  } = props;
  const className = `message padding_s-6 ${props.className || ''}`;
  const date = new Date(createdAt);
  const isValidDate = isDateValid(date);
  const shortDate = isValidDate ? createShortDate(date) : '';
  const time = isValidDate ? getTime(date) : '';
  const reactionsElements = Object.entries(props.reactions)
    .map(keyValue => {
      const [reactionName, userIdsArray] = keyValue;
      const reaction = reactionName as unknown as ReactionEnum;
      return (
        <Reaction
          key={reactionName}
          reaction={reaction}
          users={userIdsArray}
        />
      );
    });
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
      <div className="message__content">
        <div className="message__text">{text}</div>
        <div className="message__reactions">
          {reactionsElements}
        </div>
      </div>
    </div>
  );
};

export default ForumMessage;
