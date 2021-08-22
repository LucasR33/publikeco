module.exports = (app) => {
    const click = require('../controllers/click.controller.js');

    
    app.post('/jeux/clickJeux', click.clickJeux);

    app.post('/click/clicked', click.clicked);

    app.get("/jeux/play/:idJeu", click.play);

    //app.get('/annonce/:annoId', annonce.findOne)

    //app.put('/annonce/:annoId', annonce.update)

    //app.delete('/annonce/:annoId', annonce.delete)

    //app.post('/annonce/:annoId', annonce.validate)
}
