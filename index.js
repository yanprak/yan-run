const { app } = require('./dist/server.js');

const PORT = process.env.PORT || 4100;

app.listen(PORT, () => {
  console.log(`Backend server listens on port: ${PORT}`);
});
