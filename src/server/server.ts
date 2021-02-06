import express from 'express';

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(PORT, () => {
  global.console.log(`Backend server listens on port: ${PORT}`);
});
