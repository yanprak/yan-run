import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { Request, Response } from 'express';
import { StaticRouter } from 'react-router-dom';
import { StaticRouterContext } from 'react-router';
import { Action, Dispatch } from 'redux';
import { Provider } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import App from '../../client/components/app';
import configureStore from '../../client/store';
import safelyRenderObject from '../../client/utils/safelyRenderObject';
import { thunkFetchUser, thunkSignout } from '../../client/store/user/thunks';
import { ApplicationState } from '../../client/store/types';

function getHtml(reactHtml: string, reduxState = {}): string {
  const html = renderToStaticMarkup(
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="icon" href="data:;base64,iVBORw0KGgo=" />
        <title>Yan Run</title>
      </head>
      <body>
        <div id="root" dangerouslySetInnerHTML={{ __html: reactHtml }} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__INITIAL_STATE__ = ${safelyRenderObject(reduxState)}`,
          }}
        />
        <script src="./bundle.js" />
      </body>
    </html>,
  );

  return `<!doctype html>${html}`;
}

type Cookies = {
  [key: string]: string;
};

function selectAuthThunk(cookies: Cookies): (dispatch: Dispatch) => Promise<unknown> {
  if (cookies) {
    const cookiesString = Object
      .entries(cookies)
      .map(([key, value]) => `${key}=${value}`)
      .join(';');
    return thunkFetchUser(cookiesString);
  }
  return thunkSignout();
}

export default function serverRenderMiddleware(req: Request, res: Response) {
  const location = req.url;
  const context: StaticRouterContext = {};
  const initialState = {} as ApplicationState;
  const { store } = configureStore(initialState, location);

  function renderApp() {
    const jsx = (
      <Provider store={store}>
        <StaticRouter context={context} location={location}>
          <App />
        </StaticRouter>
      </Provider>
    );
    const reactHtml = renderToString(jsx);
    const reduxState = store.getState();

    if (context.url) {
      res.redirect(context.url);
      return;
    }

    res
      .status(context.statusCode || 200)
      .send(getHtml(reactHtml, reduxState));
  }

  const thunk = selectAuthThunk(req.cookies);
  const thunkDispatch = store.dispatch as ThunkDispatch<unknown, unknown, Action<string>>;
  thunkDispatch(thunk)
    .then(() => renderApp())
    .catch(() => {});
}
