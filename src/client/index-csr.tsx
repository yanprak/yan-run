import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

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
    topics: store.getState().topics,
    theme: store.getState().theme,
    messages: store.getState().messages,
    selectedTopic: store.getState().selectedTopic,
  });
}, 1000));

const HotApp = hot(() => (
  <ErrorBoundary>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </ErrorBoundary>
));

ReactDOM.render(
  <HotApp />,
  document.getElementById('root'),
);
