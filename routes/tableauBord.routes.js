module.exports = (app) => {
    const tableauBord = require('../controllers/tableauBord.controller.js');

    
    app.get('/dataViz/powerbi', tableauBord.index);

    app.get('/dataViz/test', tableauBord.nbEnchereParPrix);

    app.get('/dataViz/enchereWon', tableauBord.allWonEnchere);

    app.get('/dataViz/nbEnchere', tableauBord.nbEnchereParPrix);
}