import { Action, Dispatch } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { createTopic, CreateTopicRequestData, fetchTopics } from '../../API/forum';
import { topicsError, topicsLoaded, topicsRequested } from './actions';
import { TopicsState } from './types';

export const thunkFetchTopics = (page?: number) => (dispatch: Dispatch) => {
  dispatch(topicsRequested());
  fetchTopics(page)
    .then(response => {
      dispatch(topicsLoaded(response.data.result || []));
    })
    .catch(() => dispatch(topicsError()));
};

export const thunkFetchTopic = (id: number) => (/* dispatch */) => {
  window.console.log(id);
};

type MyThunkDispatch = ThunkDispatch<TopicsState, unknown, Action<string>>;

export const thunkCreateTopic = (data: CreateTopicRequestData) => (dispatch: MyThunkDispatch) => {
  createTopic(data)
    .then(() => dispatch(thunkFetchTopics()))
    .catch(() => {});
};
