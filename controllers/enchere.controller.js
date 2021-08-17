const enchere = require('../models/enchere.model');
const annonce = require('../models/annonce.model');
const compte = require('../models/compte.model');
const jeux = require('../models/jeux.model');

const async = require('async');


exports.create = (req, res) => {
    let allAnnonceurs = [];
    let allAnnonces = req.body.libelle;
    allAnnonces.forEach(element => {
        annonce.findById(element, {"id_annonceur": 1}, function(err, annonce){
            if(err){
                console.log(err);
            } else {
                allAnnonceurs.push(annonce.id_annonceur);
            }
        })
    });
    console.log(allAnnonceurs);
    const newEnchere = new Enchere({
        jeu: req.body.nom_jeux,
        annonceurs:allAnnonceurs,
        annonce:allAnnonces,
        done:false
    });
    newEnchere.save().then(data => res.redirect('listEnchere'));
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
        res.render('enchere/listEnchere', {data:data});
    });
}