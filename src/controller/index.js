const search = require('./search');
const home = require('./home');
const { error404, error500 } = require('./error');

module.exports = {
  search, home, error404, error500,
};
