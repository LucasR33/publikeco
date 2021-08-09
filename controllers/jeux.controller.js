const Jeu = require('../models/jeux.model.js');


exports.index = (req, res) => {
    res.render('/jeux/addJeux');
};

exports.create = (req, res) => {
    const jeux = new Jeu({
        nom_jeu: req.body.nom,
        id_tags: req.body.tags,
        id_editeur: req.body.editeur,
        emplacements_annonces: req.body.empAnno
    });
    jeux.save().then(data => {
        res.send(data);
    });
};