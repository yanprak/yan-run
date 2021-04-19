import { ActionCreator } from 'redux';
import { FetchMessagesFailure, FetchMessagesRequest, FetchMessagesSuccess } from './types';
import { MessageEntry } from '../../API/messages';

export const FETCH_MESSAGES_REQUEST = 'FETCH_MESSAGES_REQUEST';
export const FETCH_MESSAGES_SUCCESS = 'FETCH_MESSAGES_SUCCESS';
export const FETCH_MESSAGES_FAILURE = 'FETCH_MESSAGES_FAILURE';

export const messagesRequested: ActionCreator<FetchMessagesRequest> = () => ({
  type: FETCH_MESSAGES_REQUEST,
});

export const messagesLoaded: ActionCreator<FetchMessagesSuccess> = (messages: MessageEntry[]) => ({
  type: FETCH_MESSAGES_SUCCESS,
  payload: messages,
});

export const messagesError: ActionCreator<FetchMessagesFailure> = () => ({
  type: FETCH_MESSAGES_FAILURE,
});
