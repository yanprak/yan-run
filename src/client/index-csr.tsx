import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import ErrorBoundary from './components/error-boundary';
import App from './components/app';

import configureStore from './store';

import { saveState, loadState } from './utils/localStorage';
import throttle from './utils/throttle';

import './css/common.scss';

const initialState = loadState();
const { store } = configureStore(initialState);

const state = store.getState();
store.subscribe(throttle(() => {
  saveState(state);
}, 1000));

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root'),
);
