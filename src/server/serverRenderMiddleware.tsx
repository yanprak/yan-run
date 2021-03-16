import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { Request, Response } from 'express';
import { CookiesProvider } from 'react-cookie';
import { StaticRouter } from 'react-router-dom';
import { StaticRouterContext } from 'react-router';
import { Provider } from 'react-redux';
import App from '../client/components/app';
import { loadState } from '../client/utils/localStorage';
import configureStore from '../client/store';
import safelyRenderObject from '../client/utils/safelyRenderObject';

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
            __html: `window.__PRELOADED_STATE__ = ${safelyRenderObject(reduxState)}`,
          }}
        />
        <script src="./bundle.js" />
      </body>
    </html>,
  );

  return `<!doctype html>${html}`;
}

export default (req: Request, res: Response) => {
  const location = req.url;
  const context: StaticRouterContext = {};
  const initialState = loadState();
  const { store } = configureStore(initialState, location);
  const reduxState = store.getState();

  const jsx = (
    <CookiesProvider cookies={req.cookies}>
      <Provider store={store}>
        <StaticRouter context={context} location={location}>
          <App />
        </StaticRouter>
      </Provider>
    </CookiesProvider>
  );
  const reactHtml = renderToString(jsx);

  if (context.url) {
    res.redirect(context.url);
    return;
  }

  res.send(getHtml(reactHtml, reduxState));
};
