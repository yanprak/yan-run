import 'dotenv/config';
import clientConfig from './webpack/client.config';
import serverConfig from './webpack/server.config';
import apiServerConfig from './webpack/api-server.config';

export default [
  clientConfig,
  serverConfig,
  apiServerConfig,
];
