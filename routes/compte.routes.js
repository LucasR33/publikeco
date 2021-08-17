module.exports = (app) => {
    const compte = require('../controllers/compte.controller.js');

    app.post('/compte/addCompte', compte.create);

    app.get('/compte/addCompte', compte.addCompte);

    app.get('/compte/listCompte', compte.findAll);

}