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