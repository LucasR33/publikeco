const compte = require('../models/compte.model');
const { body, validationResult } = require('express-validator');
//TO-DO faire les updates annonceurs et editeurs

exports.create = (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        // Création compte
        const newCompte = new Compte({
            nom: req.body.nom,
            prenom: req.body.prenom,
            mdp: req.body.mdp,
            email: req.body.email,
            type: req.body.type
        });
        newCompte.save().then(data => res.redirect('listCompte'));
    } else {
        res.render('compte/addCompte', { errors: errors.array() });
    }
};

exports.addCompte = (req, res) => {
    const errors = undefined
    res.render('compte/addCompte', { errors: errors });
};

exports.findAll = (req, res) => {
    compte.find().then(data => {
        res.render('compte/listCompte', { compte: data });
    });
};