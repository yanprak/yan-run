export enum ReactionEnum {
  like = 'like',
  dislike = 'dislike',
  laugh = 'laugh',
  hooray = 'hooray',
  confused = 'confused',
  heart = 'heart',
  rocket = 'rocket',
  eyes = 'eyes',
}

export type EmojiLib = {
  [key in ReactionEnum]: string;
};

export type OwnProps = {
  reaction: ReactionEnum;
  users: number[];
};
