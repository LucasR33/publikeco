const click = require('../models/click.model');
const jeux = require('../models/jeux.model');
const enchere = require('../models/enchere.model');

var ObjectId = require('mongodb').ObjectID;

exports.clickJeux = (req, res) => {
    const newClick = new click({
        jeux : req.body.game,
        datetime_clic : new Date()
        });
        newClick.save().then(data => res.redirect('play/'+req.body.game));
};

exports.play = (req, res) => {
    let test = req.params.idJeu;
    jeux.findOne({'_id': ObjectId(test)}, function(err, game){
        if(err){
            console.log(err);
        } else {
            enchere.find({"jeu._id":ObjectId(game._id)}, function(err, enchere){
                if(err){
                    console.log(err);
                } else {
                    var prixMax = [];
                    var prixInf = 0;
                    let annonces = {};
                    enchere.forEach(el => {
                        annonces = el.annonces;
                    });
                    annonces.forEach(element => {
                        prixMax.push(element.prix_max);
                    });
                    var wonBid = prixMax.reduce(function(a,b) {
                        return Math.max(a, b);
                      });
                    var winningBid = prixMax.indexOf(wonBid);
                    var lenPrixMax = prixMax.length;
                    var secondWinner = prixMax[lenPrixMax-1];
                    var firstWinner = prixMax[lenPrixMax];

                    var winningPrice = secondWinner * 1.10;
                    var id_annonce = annonces[winningBid]._id
                    var libelle = annonces[winningBid].libelle
                    var description =  annonces[winningBid].description
                    var id_annonceur = annonces[winningBid].id_annonceur
                    res.render('jeux/play', {
                        game:game,
                        enchere:enchere,
                        winningPrice:winningPrice,
                        id_annonce:id_annonce,
                        libelle:libelle,
                        description:description,
                        id_annonceur:id_annonceur
                    })
                }
            })
            
        }
    });
};