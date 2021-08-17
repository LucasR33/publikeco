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
    type: String
  },
  mdp: {
    type:String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  }
});

module.exports = Compte = mongoose.model('Compte', CompteSchema);
