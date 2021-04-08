import { Action } from 'redux';
import { TopicEntry } from '../../API/forum';

export interface FetchTopicsRequest extends Action {
  type: 'FETCH_TOPICS_REQUEST'
}

export interface FetchTopicsSuccess extends Action {
  type: 'FETCH_TOPICS_SUCCESS',
  payload: TopicEntry[]
}

export interface FetchTopicsFailure extends Action {
  type: 'FETCH_TOPICS_FAILURE'
}

export type TopicsActions = FetchTopicsRequest | FetchTopicsSuccess | FetchTopicsFailure;

export interface TopicsState {
  data: TopicEntry[],
  loading: boolean,
  error: boolean
}
