const annonce = require('../models/annonce.model');
const compte = require('../models/compte.model');
const click = require('../models/click.model');
const enchere = require('../models/enchere.model');
const jeux = require('../models/jeux.model');
const { emit } = require('../models/annonce.model');



exports.index = (req, res) => {
    res.render('dataViz/powerbi');
}

//retourne le prix de toutes les enchères gagnées
exports.allWonEnchere = (req, res) => {
    var o = {},
    self = this;
    o.map = function () {
        if(this.prix_vainqueur > 0 && this.done === true){
            emit({annonceur: this.annonceur_vainqueur.id_annonceur, prix: this.prix_vainqueur}, 1)
        }
        
    };
    o.reduce = function (k, vals) {
        return vals.length
    };

    enchere.mapReduce(o, function (err, results) {
        if(err) throw err;
        res.json(results)
        console.log(results)
    });
}

//Retourne l'annonce vendu la plus chère
exports.maxWonEnchere = (req, res) => {
    var o = {},
    self = this;
    o.map = function () {
        if(this.prix_vainqueur > 0 && this.done === true){
            emit({annonceur: this.annonceur_vainqueur.id_annonceur, prix: this.prix_vainqueur}, 1)
        }
        
    };
    o.reduce = function (k, vals) {
        return vals.length
    };

    enchere.mapReduce(o, function (err, results) {
        if(err) throw err;
        res.json(results)
        console.log(results)
    });
}