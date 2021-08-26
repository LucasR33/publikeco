const jeu = require('../models/jeux.model.js');
const compte = require('../models/compte.model');
const { body, validationResult } = require('express-validator');

//TO-DO changer la redirection
exports.index = (req, res) => {
    jeu.find().then(data => {
        res.render('jeux/listJeux', { jeux: data });
    });
};

exports.addJeu = (req, res) => {
    errors = undefined
    compte.find({ "type": "Editeur" }).then(data => {
        res.render('jeux/addJeux', { data: data, errors: errors });
    });
};

exports.create = (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        const jeux = new jeu({
            nom_jeu: req.body.nom,
            id_tags: req.body.tags,
            id_editeur: req.body.editeur,
            emplacements_annonces: req.body.empAnno,
            valide: false
        });
        jeux.save().then(data => {
            res.redirect('../jeux/listJeux');
        });
    } else {
        compte.find({ "type": "Editeur" }).then(data => {
            res.render('jeux/addJeux', { data: data, errors: errors.array() });
        });
    }
};

exports.validationJeux = (req, res) => {
    jeu.updateOne({ _id: req.params._id }, {
        valide: true
    }, { new: true }).then(game => {
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

exports.pickToPlay = (req, res) => {
    jeu.find().then(data => {
        res.render('jeux/pickJeux', { data: data });
    });
};