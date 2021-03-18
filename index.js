const https = require('https');
const { readFileSync } = require('fs');
const { resolve } = require('path');
const { app } = require('./dist/server.js');

const IS_DEV = process.env.NODE_ENV === 'development';
const PORT = Number(process.env.PORT || 4100);

if (IS_DEV) {
  const key = readFileSync(resolve('cert', 'key.pem'), 'utf8');
  const cert = readFileSync(resolve('cert', 'cert.pem'), 'utf8');

  https
    .createServer({key, cert}, app)
    .listen(PORT, '0.0.0.0', () => {
        console.info(`Backend server listens on port: ${PORT} - https://localhost:${PORT}`);
    });
  return;
}

app.listen(PORT, () => {
  console.log(`Backend server listens on port: ${PORT}`);
});
