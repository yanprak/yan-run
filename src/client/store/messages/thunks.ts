import { Action, Dispatch } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import {
  fetchMessages,
  createMessage,
  updateMessage,
  deleteMessage,
  toggleReaction,
  CreateMessageRequestData,
  UpdateMessageRequestData,
  ToggleReactionRequestData,
} from '../../API/messages';
import { messagesError, messagesLoaded, messagesRequested } from './actions';
import { MessagesState } from './types';

export const thunkFetchMessages = (topicId: number, page?: number) => (dispatch: Dispatch) => {
  dispatch(messagesRequested());
  fetchMessages(topicId, page)
    .then(response => {
      dispatch(messagesLoaded(response.data.result || []));
    })
    .catch(() => dispatch(messagesError()));
};

type MyThunkDispatch = ThunkDispatch<MessagesState, unknown, Action<string>>;

export const thunkCreateMessage = (
  topicId: number,
  data: CreateMessageRequestData,
  page?: number,
) => (dispatch: MyThunkDispatch) => {
  createMessage(topicId, data)
    .then(() => dispatch(thunkFetchMessages(topicId, page)))
    .catch(() => {});
};

export const thunkUpdateMessage = (
  topicId: number,
  messageId: number,
  data: UpdateMessageRequestData,
  page?: number,
) => (dispatch: MyThunkDispatch) => {
  updateMessage(topicId, messageId, data)
    .then(() => dispatch(thunkFetchMessages(topicId, page)))
    .catch(() => {});
};

export const thunkDeleteMessage = (
  topicId: number,
  messageId: number,
  page?: number,
) => (dispatch: MyThunkDispatch) => {
  deleteMessage(topicId, messageId)
    .catch(() => {});
};

export const thunkToggleReaction = (
  topicId: number,
  messageId: number,
  data: ToggleReactionRequestData,
  page?: number,
) => (dispatch: MyThunkDispatch) => {
  toggleReaction(topicId, messageId, data)
    .then(() => dispatch(thunkFetchMessages(topicId, page)))
    .catch(() => {});
};
