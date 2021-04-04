const https = require('https');
const { readFileSync } = require('fs');
const { resolve } = require('path');
const mongoose = require('mongoose');
const { server } = require('./dist/feedback-server.js');

const IS_DEV = process.env.NODE_ENV !== 'production';
const PORT = Number(process.env.FEEDBACK_PORT || 3600);

if (process.env.MONGO_URI) {
  const connectionOptions = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
  };
  mongoose.connect(process.env.MONGO_URI, connectionOptions)
    .then(() => console.log(`[MongoDB] Connection established`))
    .catch(error => {
      console.error("[MongoDB] Could not establish connection", error);
      process.exit(1);
    });
} else {
  console.error("[MongoDB] Could not establish connection: no URI provided");
}

if (IS_DEV) {
  const key = readFileSync(resolve('cert', 'key.pem'), 'utf8');
  const cert = readFileSync(resolve('cert', 'cert.pem'), 'utf8');

  https
    .createServer({key, cert}, server)
    .listen(PORT, '0.0.0.0', () => {
      console.info(`Feedback server listens on port: ${PORT} - https://localhost:${PORT}`);
    });
  return;
}

server.listen(PORT, () => {
  console.log(`Feedback server listens on port: ${PORT}`);
});

