const enchere = require('../models/enchere.model');
const annonce = require('../models/annonce.model');
const compte = require('../models/compte.model');
const jeux = require('../models/jeux.model');
var ObjectId = require('mongodb').ObjectID;

const async = require('async');


exports.create = (req, res) => {
    // let idAnnoArray = [];
    let idJeu = req.body.nom_jeux;
    let test = idJeu;
    var hex = /[0-9A-Fa-f]{6}/g;
    test = (hex.test(test))? ObjectId(test) : test;
    jeux.findOne({'_id': ObjectId(test)}, function(err, game) {
        if(err){
            console.log(err);
        }else {
            let list = req.body.libelle.map(e => ObjectId(e));
            annonce.find({"_id":{"$in":list}}, (err, ann) => {
                ann = list.map(e => ann.find(s => s._id.equals(e)));
                const newEnchere = new enchere({
                    datetime_enchere: new Date(),
                    jeu: game,
                    annonces: ann,
                    emplacement_annonce: req.body.emp,
                    prix_vainqueur: 0,
                    done: false
                })
                newEnchere.save().then(data => res.redirect('listEnchere'));
                
                });
        }
    });
};

exports.addEnchere = (req, res) => {
    annonce.find({}, function(err, annonces){
        if(err){
            console.log(err);
        }else {
            jeux.find({}, function(err, jeux){
                if(err){
                    console.log(err);
                }else {
                    res.render('enchere/addEnchere', {jeux:jeux, annonces:annonces});
                }
            });
        }
    });
};

exports.findAll = (req, res) => {
    enchere.find().then(data => {
        res.render('enchere/listEnchere', {data: data});
        })   
}; 