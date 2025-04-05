const express = require('express');
const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use('/api/articles/:name', require('./routes/comments'));
app.listen(port, () => {
  console.log(` app listening on port ${port}`);
});
