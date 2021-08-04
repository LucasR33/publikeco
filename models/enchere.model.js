const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EnchereSchema = new Schema({
  id_enchère: {
    type: Number
  },
  id_editeur: {
    type: Number,
    required: true
  },
  id_annonceurs: {
    type: Array,
    required: true
  },
  id_annonceur_vainqueur: {
    type: Number,
    required: true
  },
  prix_vainqueur: {
    type: Number,
    required: true
  },
  id_emplacement_annonce: {
    type: Number,
    required: true
  },
});

module.exports = Enchere = mongoose.model('Enchere', EnchereSchema);
