const { body, validationResult } = require('express-validator');

module.exports = (app) => {
    const jeux = require('../controllers/jeux.controller.js');


    app.post(
        '/jeux/addJeux',
        body('nom').notEmpty(),
        body('tags').notEmpty(),
        jeux.create
    );

    app.post('/jeux/:_id', jeux.validationJeux)

    app.get('/jeux/listJeux', jeux.index);

    app.get('/jeux/addJeux', jeux.addJeu);

    app.get('/jeux/pickJeux', jeux.pickToPlay);

    //app.get('/jeux/addJeux', jeux.all);

    //app.get('/jeux/:annoId', jeux.findOne)

    //app.put('/jeux/:annoId', jeux.update)

    //app.delete('/jeux/:annoId', jeux.delete)
}