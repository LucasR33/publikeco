const compte = require('../models/compte.model');
//TO-DO faire les updates annonceurs et editeurs

//creation annonceurs
exports.createAnnonceur = (req, res) => {
    const newCompte = new Compte({
        nom: req.params.nom,
        prenom: req.params.prenom,
        mdp: req.params.mdp,
        email: req.params.email,
        annonce: req.params.annonce,
        type: "annonceur"
    })
}

exports.findAll = (req, res) => {
    coompte.find({type: "annonceur"}).then(comptesAnnonceurs => {
        res.send(comptesAnnonceurs);
    });
};

exports.findOne = (req, res) => {
    coompte.findById(req.params.id_compte)
    .then(annonceur => {
        res.send(annonceur);
    });
};

//TO-DO ajouter la redirection
exports.delete = (req, res) => {
    coompte.findByIdAndRemove(req.params.id_compte)
    .then(annonceur => {
        res.redirect('/');
    });
};

//creation editeur
exports.createEditeur = (req, res) => {
    const newCompte = new Compte({
        nom: req.params.nom,
        prenom: req.params.prenom,
        mdp: req.params.mdp,
        email: req.params.email,
        jeux: req.params.jeux,
        type: editeur
    })
}

exports.findAll = (req, res) => {
    coompte.find({type: "editeur"}).then(comptesEditeurs => {
        res.send(comptesEditeurs);
    });
};

exports.findOne = (req, res) => {
    coompte.findById(req.params.id_compte)
    .then(editeur => {
        res.send(editeur);
    });
};

//TO-DO ajouter la redirection
exports.delete = (req, res) => {
    coompte.findByIdAndRemove(req.params.id_compte)
    .then(editeur => {
        res.redirect('/');
    });
};