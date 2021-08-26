const { body, validationResult } = require('express-validator');

module.exports = (app) => {
    const compte = require('../controllers/compte.controller.js');

    app.post(
        '/compte/addCompte',
        body('nom').notEmpty(),
        body('prenom').notEmpty(),
        body('email').isEmail(),
        body('mdp').isLength({ min: 6 }).matches('[0-9]').matches('[A-Z]'),
        compte.create
    );


    app.get('/compte/addCompte', compte.addCompte);

    app.get('/compte/listCompte', compte.findAll);
}