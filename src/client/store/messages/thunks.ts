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

export const thunkFetchMessages = (topicId: number) => (dispatch: Dispatch) => {
  dispatch(messagesRequested());
  fetchMessages(topicId)
    .then(response => {
      dispatch(messagesLoaded(response.data.result || []));
    })
    .catch(() => dispatch(messagesError()));
};

type MyThunkDispatch = ThunkDispatch<MessagesState, unknown, Action<string>>;

export const thunkCreateMessage = (topicId: number, data: CreateMessageRequestData) => (dispatch: MyThunkDispatch) => {
  createMessage(topicId, data)
    .then(() => dispatch(thunkFetchMessages(topicId)))
    .catch(() => {});
};

export const thunkUpdateMessage = (
  topicId: number,
  messageId: number,
  data: UpdateMessageRequestData,
) => (dispatch: MyThunkDispatch) => {
  updateMessage(topicId, messageId, data)
    .then(() => dispatch(thunkFetchMessages(topicId)))
    .catch(() => {});
};

export const thunkDeleteMessage = (topicId: number, messageId: number) => (dispatch: MyThunkDispatch) => {
  deleteMessage(topicId, messageId)
    .then(() => dispatch(thunkFetchMessages(topicId)))
    .catch(() => {});
};

export const thunkToggleReaction = (
  topicId: number,
  messageId: number,
  data: ToggleReactionRequestData,
) => (dispatch: MyThunkDispatch) => {
  toggleReaction(topicId, messageId, data)
    .then(() => dispatch(thunkFetchMessages(topicId)))
    .catch(() => {});
};
