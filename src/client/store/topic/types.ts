import { Action } from 'redux';
import { TopicEntry } from '../../API/forum';

export interface FetchTopicRequest extends Action {
  type: 'FETCH_TOPIC_REQUEST'
}

export interface FetchTopicSuccess extends Action {
  type: 'FETCH_TOPIC_SUCCESS',
  payload: TopicEntry
}

export interface FetchTopicFailure extends Action {
  type: 'FETCH_TOPIC_FAILURE'
}

export type TopicActions = FetchTopicRequest | FetchTopicFailure | FetchTopicSuccess;

export interface SelectedTopicState {
  data: TopicEntry,
  loading: boolean,
  error: boolean
}
