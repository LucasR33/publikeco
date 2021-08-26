const annonce = require('../models/annonce.model');
const compte = require('../models/compte.model');
const { body, validationResult } = require('express-validator');

exports.create = (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        const newAnnonce = new Annonce({
            datetime_annonce: new Date(),
            id_annonce: 2,
            libelle: req.body.libelle,
            id_annonceur: req.body.annonceur,
            description: req.body.description,
            cible: [req.body.sexe, req.body.agemin, req.body.agemax, req.body.pays],
            prix_max: req.body.prix_max,
            valide: false
        });
        newAnnonce.save().then(data => res.redirect('listAnnonce'));
    } else {
        compte.find({ "type": "Annonceur" }).then(data => {
            res.render('annonce/addAnnonce', { data: data, errors: errors.array() });
        })
    }
};

exports.addAnnonce = (req, res) => {
    const errors = undefined;
    compte.find({ "type": "Annonceur" }).then(data => {
        res.render('annonce/addAnnonce', { data: data, errors: errors });
    })
};

exports.findAll = (req, res) => {
    annonce.find().then(data => {
        res.render('annonce/listAnnonce', { anno: data });
    });
};

exports.findOne = (req, res) => {
    annonce.findById(req.params.id_annonce)
        .then(anno => {
            res.send(anno);
        });
};

exports.update = (req, res) => {
    annonce.findByIdAndUpdate(req.params.id_annonce, {
        libelle: req.body.libelle,
        id_annonceur: req.body.id_annonceur,
        // media: {
        //     data: fs.readFileSync('./images/affiches/iorigins.jpg'),
        //     contentType: 'image/jpg'
        // },
        description: req.body.description,
        cible: [req.body.sexe, req.body.agemin, req.body.agemax, req.body.pays],
        prix_max: req.body.prix_max
    }, { new: true }).then(anno => {
        res.send(anno);
    });
};

exports.delete = (req, res) => {
    annonce.findByIdAndRemove(req.params.id_annonce)
        .then(anno => {
            res.redirect('/annonce');
        });
};

//TO-DO Faire la requete de validation du jeu
exports.validate = (req, res) => {
    annonce.updateOne({ _id: req.params._id }, {
        valide: true
    }, { new: true }).then(anno => {
        res.redirect('../annonce/listAnnonce');
    });
};