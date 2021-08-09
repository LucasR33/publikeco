module.exports = (app) => {
    const jeux = require('../controllers/jeux.controller.js');

    
    app.post('/jeux/addJeux', jeux.create);

    app.get('/jeux/addJeux', jeux.index);

    //app.get('/jeux/addJeux', jeux.all);

    //app.get('/jeux/:annoId', jeux.findOne)

    //app.put('/jeux/:annoId', jeux.update)

    //app.delete('/jeux/:annoId', jeux.delete)
}