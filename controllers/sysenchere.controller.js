const annonce = require('../models/annonce.model');
const enchere = require('../models/enchere.model');


//Trouve un emplacement d'annonce
exports.findOne = (req, res) => {
    empl.findById(req.params.id_emplacement)
    .then(data => {
        res.send(data);
    });
};

//Trouve les annonces correspondantes
//TO-DO changer la requêtes avec le greater than avec la valeur du prix de l'emplacement
exports.findAll = (req, res) => {
    annonce.find({"prix_max":{$gt:3}}).then(annonces => {
        res.send(annonces);
    });
};

function whoswon(data){
    var prixMax = [];
    var prixInf = 0;

    data.forEach(element => {
        prixMax.push(element.prix_max);
    });

    prixMax.sort();

    var lenPrixMax = prixMax.length();
    var secondWinner = prixMax[lenPrixMax-1];
    var firstWinner = prixMax[lenPrixMax];
    var winningPrice = secondWinner * 1.10;

    //retrouve l'annonce gagnante
    exports.findOne = (req, res) => {
        annonce.findById({prix_max:firstwinner})
        .then(anno => {
            res.send(anno);
        });
    };

    //TO-DO envoyer un email au vainqueur
    return anno;
};

//TO-DO update l'annonce pour dire qu'elle a gagner l'enchère

//TO-DO faire la fonction de retour de l'annonce pour l'afficher
