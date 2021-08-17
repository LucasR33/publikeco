const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EnchereSchema = new Schema({
  id_enchère: {
    type: Number
  },
  jeu: {
    type: String,
    required: true
  },
  annonceurs: {
    type: Array,
    required: true
  },
  annonces: {
    type: Array,
    required: true
  },
  annonceur_vainqueur: {
    type: String
  },
  prix_vainqueur: {
    type: Number
  },
  emplacement_annonce: {
    type: Number
  },
  done: {
    type: Boolean,
    required: true
  }
});

module.exports = Enchere = mongoose.model('Enchere', EnchereSchema);
