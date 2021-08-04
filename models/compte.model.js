const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompteSchema = new Schema({
  id_compte: {
    type: Number
  },
  nom: {
    type: String,
    required: true
  },
  prenom: {
    type: String,
    required: true
  },
  mdp: {
    type:String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  annonces: {
    type: Array,
    required: true
  },
  jeux: {
    type: Array,
    required: true
  },
  type:{
    type:String,
    required: true
  }
});

module.exports = Compte = mongoose.model('Compte', CompteSchema);
