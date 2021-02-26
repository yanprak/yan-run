import express from 'express';
import path from 'path';

const PORT = process.env.PORT || 4100;

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  global.console.log(`Backend server listens on port: ${PORT}`);
});
