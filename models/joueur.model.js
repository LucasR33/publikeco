const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JoueurSchema = new Schema({
  id_joueur: {
    type: Number
  },
  pseudo: {
    type: String,
    required: true
  },
  sexe: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  pays: {
    type: String,
    required: true
  },
  plateformes_jeu: {
    type: Array,
    required: true
  },
});

module.exports = Joueur = mongoose.model('Joueur', JoueurSchema);
