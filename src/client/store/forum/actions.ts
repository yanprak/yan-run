import { ActionCreator } from 'redux';
import { FetchTopicsFailure, FetchTopicsRequest, FetchTopicsSuccess } from './types';
import { TopicEntry } from '../../API/forum';

export const FETCH_TOPICS_REQUEST = 'FETCH_TOPICS_REQUEST';
export const FETCH_TOPICS_SUCCESS = 'FETCH_TOPICS_SUCCESS';
export const FETCH_TOPICS_FAILURE = 'FETCH_TOPICS_FAILURE';

export const topicsRequested: ActionCreator<FetchTopicsRequest> = () => ({
  type: FETCH_TOPICS_REQUEST,
});

export const topicsLoaded: ActionCreator<FetchTopicsSuccess> = (topics: TopicEntry[], total: number) => ({
  type: FETCH_TOPICS_SUCCESS,
  payload: {
    topics,
    total,
  },
});

export const topicsError: ActionCreator<FetchTopicsFailure> = () => ({
  type: FETCH_TOPICS_FAILURE,
});
