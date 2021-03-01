import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app';
import configureStore from './store';
import './css/common.scss';
import { saveState, loadState } from './utils/localStorage';
import throttle from './utils/throttle';

const initialState = loadState();
const store = configureStore(initialState);

store.subscribe(throttle(() => {
  saveState({
    user: store.getState().user,
  });
}, 1000));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
