const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


app.use('/public', express.static('public'));
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

//import des models
const Annonce = require('./models/Annonce');

// Connect to MongoDB
mongoose.connect(
  'mongodb://127.0.0.1:27017/publikeco',
  { useNewUrlParser: true },
  { useUnifiedTopology: true }
)
.then(() => console.log('Database Connected'))
.catch(err => console.log(err));

app.get('/', (req, res) => {
  res.render('index')
});


app.get('/gestion', (req, res) => {
  res.render('gestion')
});

app.get('/encheres', (req, res) => {
  res.render('encheres')
});

app.get('/jeux', (req, res) => {
  res.render('pubs')
});

app.get('/annonces/add', (req, res) => {
  const newAnnonce = new Annonce({
    libelle: "I origins",
    id_annonceur: "2014",
    media: {
        data: fs.readFileSync('./images/affiches/iorigins.jpg'),
        contentType: 'image/jpg'
    },
    description: "",
    cible: "",
    prix_max: 10
  });
  newAnnonce.save().then(annonce => res.redirect('/'));
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
