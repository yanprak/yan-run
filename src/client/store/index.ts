import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory, createMemoryHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import isServer from '../utils/isServer';
import { ApplicationState } from './types';
import createRootReducer from './reducers';
import middlewares from './middlewares';

/*
  Initial state can be 'undefined' in case the user visits for the first time (there is no localStorage record yet).
  Second argument (initialState) of 'createStore' can be undefined, [], {} & fn.
*/
export default function configureStore(initialState: ApplicationState | undefined, url = '/') {
  const history = isServer
    ? createMemoryHistory({ initialEntries: [url] })
    : createBrowserHistory();
  const store = createStore(
    createRootReducer(history),
    initialState,
    compose(
      applyMiddleware(
        routerMiddleware(history),
        ...middlewares,
      ),
    ),
  );

  return { store, history };
}

