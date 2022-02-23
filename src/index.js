const app = require('./app');
require('env2')('.env');

app.set('port', 2220 || process.env.PORT);

app.listen(app.get('port'), () => {
  console.log(`http://localhost:${app.get('port')}`);
});
