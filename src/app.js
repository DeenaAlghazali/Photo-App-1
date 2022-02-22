const express = require('express');
const helmet = require('helmet');
const path = require('path');
const fetch = require('node-fetch');

const app = express();
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});
app.post('/search', (req, res) => {
  const query = req.body.search;
  const page = 1;
  fetch(
    `https://api.unsplash.com/search/photos?query=${query}&page=${page}&client_id=7hTcanzZHuFtZWDwYJxn_q1NcwLueIkKwBMlqLrnQVM`,
  )
    .then((response) => response.json())
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.send(err);
    });
});
app.set('PORT', 2220);
app.listen(app.get('PORT'), () => {
  console.log(`http://localhost:${app.get('PORT')}`);
});
