module.exports = (app) => {
    const annonce = require('../controllers/annonce.controller.js');

    
    app.post('/annonce', annonce.create);

    //app.get('/annonce', annonce.all);

    //app.get('/annonce/:annoId', annonce.findOne)

    //app.put('/annonce/:annoId', annonce.update)

    //app.delete('/annonce/:annoId', annonce.delete)
}