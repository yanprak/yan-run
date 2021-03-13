import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { ConnectedRouter } from 'connected-react-router';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './components/error-boundary';
import App from './components/app';
import configureStore, { ApplicationState } from './store';
import { saveState } from './utils/localStorage';
import throttle from './utils/throttle';
import './css/common.scss';

declare global {
  interface Window {
    __INITIAL_STATE__: ApplicationState;
  }
}

const initialState = window.__INITIAL_STATE__;
const { store } = configureStore(initialState);

const state = store.getState();
store.subscribe(throttle(() => {
  saveState(state);
}, 1000));

ReactDOM.hydrate(
  <Provider store={store}>
    <ErrorBoundary>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root'),
);
