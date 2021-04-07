import { Action } from 'redux';
// import { ThunkAction } from 'redux-thunk';
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

// TODO (ilya): do we need this?
// export type FetchMessages = ThunkAction<void, MessagesState, unknown, Action<string>>;

export type MessagesActions = FetchMessagesRequest | FetchMessagesSuccess | FetchMessagesFailure;

export interface MessagesState {
  data: MessageEntry[],
  loading: boolean,
  error: boolean
}
