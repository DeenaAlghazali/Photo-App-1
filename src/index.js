const app = require('./app');

app.set('port', 2220 || process.env.PORT);

app.listen(app.get('port'), () => {
  console.log(`http://localhost:${app.get('port')}`);
});
