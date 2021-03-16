import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { CookiesProvider } from 'react-cookie';
import ErrorBoundary from './components/error-boundary';
import App from './components/app';
import configureStore from './store';
import { saveState } from './utils/localStorage';
import throttle from './utils/throttle';
import './css/common.scss';

const initialState = window.__INITIAL_STATE__;
delete window.__INITIAL_STATE__;
const { store, history } = configureStore(initialState);

store.subscribe(throttle(() => {
  const state = store.getState();
  saveState(state);
}, 1000));

ReactDOM.hydrate(
  <CookiesProvider>
    <Provider store={store}>
      <ErrorBoundary>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </ErrorBoundary>
    </Provider>
  </CookiesProvider>,
  document.getElementById('root'),
);
