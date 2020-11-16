const express = require('express');

const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello World!');
})

// Health endpoint
app.get('/health', (req, res) => {
  res.status(200).send("Healthy");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});