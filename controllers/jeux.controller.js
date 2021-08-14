const jeu = require('../models/jeux.model.js');


//TO-DO changer la redirection
exports.index = (req, res) => {
    jeu.find().then(data => {
        res.render('jeux/listJeux', { jeux: data });
    });
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
    jeu.updateOne({_id: req.params._id}, {
        valide: true
    }, {new: true}).then(game => {
        res.redirect('../jeux/listJeux')
    });
};

//TO-DO faire la redirection
exports.delete = (req, res) => {
    jeu.findByIdAndRemove(req.params.id_jeu)
    .then(jeu => {
        res.redirect('/');
    });
};