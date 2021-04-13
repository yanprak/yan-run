import { BACKEND_API } from './index';
import { Nullable } from '../types';

type UserEntry = {
  id: number;
  login: string;
  avatar: Nullable<string>;
};

type ReactionsEntry = {
  like: number[];
  dislike: number[];
  laugh: number[];
  hooray: number[];
  confused: number[];
  heart: number[];
  rocket: number[];
  eyes: number[];
};

export type MessageEntry = {
  id: number;
  text: string;
  topicId: number;
  parentId: Nullable<number>;
  user: UserEntry;
  userId: number;
  reactions: ReactionsEntry;
  createdAt: string;
  updatedAt: string;
};

export interface CreateMessageRequestData {
  text: string;
  userId: number;
  parentId?: number;
}

export interface UpdateMessageRequestData {
  text: string;
}

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

export interface ToggleReactionRequestData {
  reaction: ReactionEnum;
  userId: number;
}

interface FetchMessagesResponse {
  message: string;
  result: MessageEntry[];
}

interface CreateMessageResponse {
  message: string;
  result: MessageEntry;
}

interface UpdateMessageResponse {
  message: string;
}

interface DeleteMessageResponse {
  message: string;
}

interface ToggleReactionResponse {
  message: string;
}

function fetchMessages(topicId: number, page = 0) {
  return BACKEND_API.get<FetchMessagesResponse>(`/forum/topics/${topicId}/messages?page=${page}`);
}

function createMessage(topicId: number, data: CreateMessageRequestData) {
  return BACKEND_API.post<CreateMessageResponse>(
    `/forum/topics/${topicId}/messages`,
    JSON.stringify(data),
  );
}

function updateMessage(topicId: number, messageId: number, data: UpdateMessageRequestData) {
  return BACKEND_API.put<UpdateMessageResponse>(
    `/forum/topics/${topicId}/messages/${messageId}`,
    JSON.stringify(data),
  );
}

function deleteMessage(topicId: number, messageId: number) {
  return BACKEND_API.delete<DeleteMessageResponse>(`/forum/topics/${topicId}/messages/${messageId}`);
}

function toggleReaction(topicId: number, messageId: number, data: ToggleReactionRequestData) {
  return BACKEND_API.post<ToggleReactionResponse>(
    `/forum/topics/${topicId}/messages/${messageId}/reactions`,
    JSON.stringify(data),
  );
}

// eslint-disable-next-line import/prefer-default-export
export { fetchMessages, createMessage, updateMessage, deleteMessage, toggleReaction };
