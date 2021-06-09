import { ReactionEnum } from '../../API/messages';

export type EmojiLib = {
  [key in ReactionEnum]: string;
};

export type OwnProps = {
  reaction: ReactionEnum;
  users: number[];
  topicId: number;
  messageId: number;
  userId: number;
  currentPage: number;
};

export type stateToggle = {
  classname: string,
  total: number,
};
