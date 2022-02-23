const fetch = require('node-fetch');
require('dotenv').config();

const apiKey = process.env.API_KEY;

const home = (req, res) => {
  fetch(
    `https://api.unsplash.com/photos?page=1&client_id=${apiKey}`,
  )
    .then((response) => response.json())
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = home;
