const fetch = require('node-fetch');
require('dotenv').config();

const apiKey = process.env.API_KEY;
let page = 1;
const home = (req, res) => {
  fetch(
    `https://api.unsplash.com/photos?page=${page}&client_id=${apiKey}`,
  )
    .then((response) => response.json())
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.send(err);
    }).finally (() => {
      page++;
    });
};

module.exports = home;
