import { TopicActions, SelectedTopicState } from './types';
import { FETCH_TOPIC_FAILURE, FETCH_TOPIC_REQUEST, FETCH_TOPIC_SUCCESS } from './actions';

const initialState: SelectedTopicState = {
  error: false,
  loading: true,
  data: {
    id: 0,
    name: 'Title',
    messagesCount: 0,
    user: {
      id: 0,
      login: 'Username',
    },
    createdAt: '2021-04-13 14:14:49.605+00',
  },
};

export default function reducer(state = initialState, action: TopicActions) {
  switch (action.type) {
    case FETCH_TOPIC_REQUEST:
      return {
        ...state,
        error: false,
        loading: true,
      };
    case FETCH_TOPIC_FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case FETCH_TOPIC_SUCCESS:
      return {
        data: action.payload,
        error: false,
        loading: false,
      };
    default:
      return state;
  }
}
