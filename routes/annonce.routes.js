module.exports = (app) => {
    const annonce = require('../controllers/annonce.controller.js');
    
    app.post('/annonce/addAnnonce', annonce.create);

    app.post('/annonce/:_id', annonce.validate);

    app.get('/annonce/addAnnonce', annonce.addAnnonce);

    app.get('/annonce/listAnnonce', annonce.findAll);

    //app.get('/annonce/:annoId', annonce.findOne)

    //app.put('/annonce/:annoId', annonce.update)

    //app.delete('/annonce/:annoId', annonce.delete)

    //app.post('/annonce/:annoId', annonce.validate)
}
