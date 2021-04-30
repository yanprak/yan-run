const https = require('https');
const dotenv = require('dotenv');
const { readFileSync } = require('fs');
const { resolve } = require('path');

dotenv.config();

const { app } = require('./dist/server.js');

const IS_DEV = process.env.NODE_ENV !== 'production';
const PORT = Number(process.env.WEB_PORT || 5000);

if (IS_DEV) {
  // should not reject unauthorized self-signed certificates in DEV mode.
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
  const key = readFileSync(resolve('cert', 'key.pem'), 'utf8');
  const cert = readFileSync(resolve('cert', 'cert.pem'), 'utf8');

  https
    .createServer({ key, cert }, app)
    .listen(PORT, '0.0.0.0', () => {
      console.info(`Web server listens on port: ${PORT} - https://local.ya-praktikum.tech:${PORT}`);
    });
  return;
}

app.listen(PORT, () => {
  console.log(`Web server listens on port: ${PORT}`);
});
