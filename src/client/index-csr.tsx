import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import ErrorBoundary from './components/error-boundary';
import App from './components/app';

import configureStore from './store';

import { saveState, loadState } from './utils/localStorage';
import throttle from './utils/throttle';

import './css/common.scss';

const initialState = loadState();
const { store } = configureStore(initialState);

store.subscribe(throttle(() => {
  saveState({
    user: store.getState().user,
    leaderboard: store.getState().leaderboard,
    router: store.getState().router,
  });
}, 1000));

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <Router>
        <App />
      </Router>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root'),
);
