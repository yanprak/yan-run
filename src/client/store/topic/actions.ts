import { ActionCreator } from 'redux';
import { FetchTopicFailure, FetchTopicRequest, FetchTopicSuccess } from './types';
import { TopicEntry } from '../../API/forum';

export const FETCH_TOPIC_REQUEST = 'FETCH_TOPIC_REQUEST';
export const FETCH_TOPIC_SUCCESS = 'FETCH_TOPIC_SUCCESS';
export const FETCH_TOPIC_FAILURE = 'FETCH_TOPIC_FAILURE';

export const topicRequested: ActionCreator<FetchTopicRequest> = () => ({
  type: FETCH_TOPIC_REQUEST,
});

export const topicLoaded: ActionCreator<FetchTopicSuccess> = (topic: TopicEntry) => ({
  type: FETCH_TOPIC_SUCCESS,
  payload: topic,
});

export const topicError: ActionCreator<FetchTopicFailure> = () => ({
  type: FETCH_TOPIC_FAILURE,
});
