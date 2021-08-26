const { body, validationResult } = require('express-validator');
module.exports = (app) => {
    const enchere = require('../controllers/enchere.controller.js');

    app.post(
        '/enchere/addEnchere',
        body("libelle").notEmpty(),
        enchere.create
    );

    app.get('/enchere/addEnchere', enchere.addEnchere);

    app.get('/enchere/listEnchere', enchere.findAll);
}