import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { Request, Response } from 'express';
import { StaticRouter } from 'react-router-dom';
import { StaticRouterContext } from 'react-router';
import { Provider } from 'react-redux';
import { ThunkAction } from 'redux-thunk';
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

function getRelevantThunk(cookies: Cookies): ThunkAction<any, any, any, any> {
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
      console.log('Context URL', context.url);
      res.redirect(context.url);
      return;
    }

    res
      .status(context.statusCode || 200)
      .send(getHtml(reactHtml, reduxState));
  }

  const relevantThunk = getRelevantThunk(req.cookies);
  store.dispatch(relevantThunk)
    .then(() => renderApp());

  // TODO (Ilya): Pre-requisites need to be collected for Leaderboard and Forum here
  // const dataRequirements: (Promise<void> | void)[] = [];
  //
  // routes.some(route => {
  //   const { fetchData: fetchMethod } = route;
  //   const match = matchPath<{ slug: string }>(location, route);
  //
  //   if (match && fetchMethod) {
  //     dataRequirements.push(
  //       fetchMethod(store.dispatch, cookies),
  //     );
  //   }
  //
  //   return Boolean(match);
  // });
  //
  // return Promise.all(dataRequirements)
  //   .then(() => console.info('[SUCCESS] Requirements collected'))
  //   .catch(error => console.error('[ERROR] Server render prerequisites collection error', error));
}
