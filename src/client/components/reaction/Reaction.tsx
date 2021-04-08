import React, { FC, MouseEvent } from 'react';
import { OwnProps, EmojiLib } from './types';
import { ReactionEnum, ToggleReactionRequestData } from '../../API/messages';
import './reaction.scss';
import { useApiMessages } from '../../hooks';

function setEmoji(reaction: ReactionEnum): string {
  const emojiLib: EmojiLib = {
    [ReactionEnum.like]: '👍', // &#128077;
    [ReactionEnum.dislike]: '👎', // &#128078;
    [ReactionEnum.laugh]: '😄', // &#128516;
    [ReactionEnum.hooray]: '🎉', // &#127881;
    [ReactionEnum.confused]: '😕', // &#128533;
    [ReactionEnum.heart]: '❤️', // &#10084; // Don't delete the space symbol
    [ReactionEnum.rocket]: '🚀', // &#128640;
    [ReactionEnum.eyes]: '👀', // &#128064;
  };

  return emojiLib[reaction];
}

const Reaction: FC<OwnProps> = ({ reaction, users, topicId, messageId, userId }: OwnProps) => {
  const { toggleReaction } = useApiMessages();
  const emoji = setEmoji(reaction);
  const total = users.length;

  function handleClick(event: MouseEvent) {
    event.preventDefault();
    const data: ToggleReactionRequestData = {
      reaction,
      userId,
    };
    toggleReaction(topicId, messageId, data);
  }

  return (
    <button className="reaction" type="button" onClick={handleClick}>
      <span className="reaction__emoji" role="img" aria-label={reaction}>{emoji}</span>
      <span className="reaction__counter">{total}</span>
    </button>
  );
};

export default Reaction;
