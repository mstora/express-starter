var express = require('express');
var cors = require('cors');
var app = express();
const port = 3001;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello Worm')
})

app.get('/:message', (req, res) => {
  console.log(req.params);
  res.send(req.params);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
