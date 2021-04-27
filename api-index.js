const https = require('https');
const { readFileSync } = require('fs');
const { resolve } = require('path');
const dotenv = require('dotenv');
dotenv.config();

const { server } = require('./dist/api-server.js');

const IS_DEV = process.env.NODE_ENV !== 'production';
const PORT = Number(process.env.API_PORT || 3500);

if (IS_DEV) {
  const key = readFileSync(resolve('cert', 'key.pem'), 'utf8');
  const cert = readFileSync(resolve('cert', 'cert.pem'), 'utf8');

  https
    .createServer({ key, cert }, server)
    .listen(PORT, '0.0.0.0', () => {
      console.info(`API server listens on port: ${PORT} - https://localhost:${PORT}`);
    });
  return;
}

server.listen(PORT, () => {
  console.log(`API server listens on port: ${PORT}`);
});
