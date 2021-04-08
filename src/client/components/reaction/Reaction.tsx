import React, { FC } from 'react';
import { OwnProps, ReactionEnum, EmojiLib } from './types';
import './reaction.scss';

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

const Reaction: FC<OwnProps> = ({ reaction, users }: OwnProps) => {
  const emoji = setEmoji(reaction);
  const total = users.length;
  return (
    <div className="reaction">
      <span className="reaction__emoji" role="img" aria-label={reaction}>{emoji}</span>
      <span className="reaction__counter">{total}</span>
    </div>
  );
};

export default Reaction;
