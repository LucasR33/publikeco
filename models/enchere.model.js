const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EnchereSchema = new Schema({
  id_enchère: {
    type: Number
  },
  jeu: {
    type: Object,
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
    type: Number,
    required: true
  },
  done: {
    type: Boolean,
    required: true
  },
  datetime_enchere: {
    type: Date,
    required: true
  }
});

module.exports = Enchere = mongoose.model('Enchere', EnchereSchema);
