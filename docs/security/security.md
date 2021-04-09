# Security

## API server
- Disabled header `'x-powered-by'`.
- Installed [helmet](https://www.npmjs.com/package/helmet) middleware.
- Sequelize ORM is used in order to prevent SQL injections - no SQL queries are created separately in the project.

## App server
- React by default is quite protected from XSS - it automatically escapes/serializes code by default.
- However, one of the few conditions allowing XSS is usage of the `dangerouslySetInnerHTML`, which is used for SSR in current project. 
  To prevent this, the initial state stored in `window` is serialized using the [serialize-javascript](https://www.npmjs.com/package/serialize-javascript) package + the opening `<` symbol is escaped/replaced with unicode alternative.
