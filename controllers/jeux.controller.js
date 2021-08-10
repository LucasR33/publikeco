const jeu = require('../models/jeux.model.js');


exports.index = (req, res) => {
    res.render('jeux/addJeux');
};

exports.create = (req, res) => {
    const jeux = new jeu({
        nom_jeu: req.body.nom,
        id_tags: req.body.tags,
        id_editeur: req.body.editeur,
        emplacements_annonces: req.body.empAnno,
        valide: false
    });
    jeux.save().then(data => {
        res.send(data);
    });
};

exports.validationJeux = (req, res) => {
    jeu.findByIdAndUpdate(req.params.id_jeu, {
        valide: true
    }, {new: true}).then(game => {
        res.send(game);
    });
};

//TO-DO faire la redirection
exports.delete = (req, res) => {
    jeu.findByIdAndRemove(req.params.id_jeu)
    .then(jeu => {
        res.redirect('/');
    });
};