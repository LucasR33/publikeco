const compte = require('../models/compte.model');
//TO-DO faire les updates annonceurs et editeurs

exports.create = (req, res) => {
    const newCompte = new Compte({
        nom:req.body.nom,
        prenom:req.body.prenom,
        mdp:req.body.mdp,
        email:req.body.email,
        type:req.body.type
    });
    newCompte.save().then(data => res.redirect('listCompte'));
};

exports.addCompte = (req, res) => {
    res.render('compte/addCompte');
};

exports.findAll = (req, res) => {
    compte.find().then(data => {
        res.render('compte/listCompte', {compte:data});
    });
};

