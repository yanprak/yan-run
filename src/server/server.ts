const express = require('express')
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4100;

type Res = ReturnType<typeof app.response>
type Req = ReturnType<typeof app.request>

app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', (request: Req, response: Res) => {
  response.sendFile(`${__dirname}/dist/index.html`);
});

app.listen(PORT, () => {
  global.console.log(`Backend server listens on port: ${PORT}`);
});
