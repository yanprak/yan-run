import { Dispatch } from 'redux';
import { fetchTopic } from '../../API/forum';
import { topicLoaded, topicRequested, topicError } from './actions';

// eslint-disable-next-line import/prefer-default-export
export const thunkFetchTopic = (id: number) => (dispatch: Dispatch) => {
  dispatch(topicRequested());
  console.log('Fetching topic!!');
  fetchTopic(id)
    .then(response => {
      console.log('Fetching topic response!!', response);
      dispatch(topicLoaded(response.data.result || {}));
    })
    .catch(() => dispatch(topicError()));
};
