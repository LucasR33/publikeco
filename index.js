const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');
// const multer = require('multer');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }));

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

app.get('/pubs', (req, res) => {
  res.render('pubs')
});

app.post('/annonce/add', (req, res) => {
  const newAnnonce = new Annonce({
    id_annonce: 2,
    libelle: req.body.libelle,
    id_annonceur: 1,
    // media: {
    //     data: fs.readFileSync('./images/affiches/iorigins.jpg'),
    //     contentType: 'image/jpg'
    // },
    description: req.body.description,
    cible: [req.body.sexe, req.body.agemin, req.body.agemax, req.body.pays],
    prix_max: req.body.prix_max
  });
  console.log(req.body.libelle);
  newAnnonce.save().then(annonce => res.redirect('/pubs'));
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
