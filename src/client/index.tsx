import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { hot } from 'react-hot-loader/root';
import ErrorBoundary from './components/error-boundary';
import App from './components/app';
import configureStore from './store';
import { saveState, loadState } from './utils/localStorage';
import throttle from './utils/throttle';
import './css/common.scss';

// const initialState = window.__INITIAL_STATE__;
// delete window.__INITIAL_STATE__;
// const { store, history } = configureStore(initialState);

let configuredStore;
if (window.__INITIAL_STATE__) {
  configuredStore = configureStore(window.__INITIAL_STATE__);
  delete window.__INITIAL_STATE__;
} else {
  configuredStore = configureStore(loadState());
}

const { store, history } = configuredStore;
console.log('-= STATE = ', store.getState());

store.subscribe(throttle(() => {
  const state = store.getState();
  saveState(state);
}, 1000));

/*
  Here we are trying to fetch user info from auth server, if we have access
  we will put user into redux store. We need this specifically for SSR+HMR,
  because with help of this other YaPraStudents will be authenticated automatically
  in our project if they logged in theirs. And it looks not like something secure
  for real prod projects.
 */
// (store.dispatch as ThunkDispatch<unknown, unknown, Action<string>>)(thunkCheckLogin());

// Makes application hot-reloadable
const HotApp = hot(() => (
  <Provider store={store}>
    <ErrorBoundary>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </ErrorBoundary>
  </Provider>
));

ReactDOM.hydrate(
  <HotApp />,
  document.getElementById('root'),
);
