const annonce = require('../models/annonce.model');

exports.create = (req, res) => {
    const newAnnonce = new Annonce({
        id_annonce: 2,
        libelle: req.body.libelle,
        id_annonceur: 1,
        // media: {
        //     data: fs.readFileSync('./images/affiches/iorigins.jpg'),
        //     contentType: 'image/jpg'
        // },
        description: req.body.description,
        cible: [req.body.sexe, req.body.agemin, req.body.agemax, req.body.pays],
        prix_max: req.body.prix_max
      });
      console.log(req.body.libelle);
      newAnnonce.save().then(data => res.redirect('/pubs'));
};

exports.findAll = (req, res) => {
    annonce.find().then(annonces => {
        res.send(annonces);
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
    }, {new: true}).then(anno => {
        res.send(anno);
    });
};

exports.delete = (req, res) => {
    annonce.findByIdAndRemove(req.params.id_annonce)
    .then(anno => {
        res.redirect('/pubs');
    });
};