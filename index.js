const express = require('express');
const app = express();

// //connexion to the hbase database on local env
// const hbase = require('hbase')
// const client = hbase({
//   host: '127.0.0.1',
//   port: 8080
// })

app.use('/public', express.static('public'));
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

app.get('/gestion', (req, res) => {
  res.render('gestion')
});

app.get('/encheres', (req, res) => {
  res.render('encheres')
});

app.get('/pubs', (req, res) => {
  res.render('pubs')
});

app.get('/jeux', (req, res) => {
  res.render('jeux')
});

app.get('/jouer', (req, res) => {
  res.render('jouer')
});

app.get('/', (req, res) => {
  res.render('index')
});


const port = 3000;
app.listen(port, () => console.log('Server running...'));
