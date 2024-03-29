const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const path = require('path');
const async = require('async');


mongoose.set('useFindAndModify', false);

const app = express();


app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }));

app.use('/public', express.static('public'));
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

//import des models
//const Annonce = require('./models/annonce.model');

// Connect to MongoDB
mongoose.connect(
  'mongodb://127.0.0.1:27017/publikeco',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)
.then(() => console.log('Database Connected'))
.catch(err => console.log(err));

app.get('/', (req, res) => {
  res.render('index')
});

require('./routes/annonce.routes.js')(app);
require('./routes/click.routes.js')(app);
require('./routes/compte.routes.js')(app);
//require('./routes/emplacement.routes.js')(app);
require('./routes/enchere.routes.js')(app);
require('./routes/jeux.routes.js')(app);
require('./routes/joueur.routes.js')(app);
require('./routes/tableauBord.routes.js')(app);
require('./routes/tableauBord.routes')(app);
//require('./routes/tag.routes.js')(app);


const port = 3000;
app.listen(port, () => console.log('Server running...'));
