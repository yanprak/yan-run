import { Action } from 'redux';
import { MessageEntry } from '../../API/messages';

export interface FetchMessagesRequest extends Action {
  type: 'FETCH_MESSAGES_REQUEST'
}

export interface FetchMessagesSuccess extends Action {
  type: 'FETCH_MESSAGES_SUCCESS',
  payload: MessageEntry[]
}

export interface FetchMessagesFailure extends Action {
  type: 'FETCH_MESSAGES_FAILURE'
}

export type MessagesActions = FetchMessagesRequest | FetchMessagesSuccess | FetchMessagesFailure;

export interface MessagesState {
  data: MessageEntry[],
  loading: boolean,
  error: boolean
}
