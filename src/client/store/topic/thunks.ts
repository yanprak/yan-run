import { Action, Dispatch } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { fetchTopic, updateTopic, deleteTopic, UpdateTopicRequestData } from '../../API/forum';
import { topicLoaded, topicRequested, topicError } from './actions';
import { SelectedTopicState } from './types';

export const thunkFetchTopic = (topicId: number) => (dispatch: Dispatch) => {
  dispatch(topicRequested());
  fetchTopic(topicId)
    .then(response => {
      dispatch(topicLoaded(response.data.result || {}));
    })
    .catch(() => dispatch(topicError()));
};

type MyThunkDispatch = ThunkDispatch<SelectedTopicState, unknown, Action<string>>;

export const thunkUpdateTopic = (topicId: number, data: UpdateTopicRequestData) => (dispatch: MyThunkDispatch) => {
  updateTopic(topicId, data)
    .then(() => dispatch(thunkFetchTopic(topicId)))
    .catch(() => {});
};

export const thunkDeleteTopic = (topicId: number) => () => {
  deleteTopic(topicId)
    .catch(() => {});
};
