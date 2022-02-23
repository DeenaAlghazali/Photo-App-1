const fetch = require('node-fetch');
require('dotenv').config();

const apiKey = process.env.API_KEY;

const search = (req, res) => {
  fetch(
    `https://api.unsplash.com/search/photos?query=${req.body.search}&page=1&client_id=${apiKey}`,
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data)

      res.json(data);
    })
    .catch((err) => {
      res.send(err);
    });
};
module.exports = search;
