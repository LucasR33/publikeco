module.exports = (app) => {
    const annonce = require('../controllers/annonce.controller.js');

    
    app.post('/annonces', annonce.create);

    app.get('/annonce', annonce.findAll);

    //app.get('/annonce/:annoId', annonce.findOne)

    //app.put('/annonce/:annoId', annonce.update)

    //app.delete('/annonce/:annoId', annonce.delete)
}