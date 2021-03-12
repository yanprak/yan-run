import React from 'react';
import { renderToString } from 'react-dom/server';
import { Request, Response } from 'express';

function getHtml(reactHtml: string) {
  return `
    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport"
            content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Yan Run</title>
    </head>
    <body>
        <div id="root">${reactHtml}</div>
<!--        uncomment when full SSR would be implemented -->
<!--        <script src="./bundle.js"></script> -->
    </body>
    </html>
  `;
}

export default (req: Request, res: Response) => {
  const jsx = <div>Hello world</div>;
  const reactHtml = renderToString(jsx);

  res.send(getHtml(reactHtml));
};
