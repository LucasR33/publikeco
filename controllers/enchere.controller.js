const enchere = require('../models/enchere.model');
const annonce = require('../models/annonce.model');
const compte = require('../models/compte.model');
const jeux = require('../models/jeux.model');
var ObjectId = require('mongodb').ObjectID;

const async = require('async');


exports.create = (req, res) => {
    let list = req.body.libelle.map(e => ObjectId(e));
    annonce.find({"_id":{"$in":list}}, (err, data) => {
        data = list.map(e => data.find(s => s._id.equals(e)));
        console.log(data)
            const newEnchere = new enchere({
                jeu:req.body.nom_jeux,
                annonces: data,
                emplacement_annonce: req.body.emp,
                done: false
            })
            newEnchere.save();
        res.redirect('listEnchere');
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
    }); 
};