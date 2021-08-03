module.exports = (app) => {
    const annonce = require('../controllers/annonce.controller.js');

    //Ajoute une annonce
    app.post('/annonce', annonce.create);

    //app.get('/annonce', annonce.all);

}