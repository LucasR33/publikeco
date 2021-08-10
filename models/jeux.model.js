const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JeuxSchema = new Schema({
  id_jeu: {
    type: Number,
  },
  nom_jeu: {
    type: String,
    required: true
  },
  id_tags: {
    type: Number,
    contentType: String
  },
  id_editeur: {
    data: Number,
    contentType: String
  },
  emplacements_annonces: {
    type: Number,
    required: true
  },
  valide: {
    type: Boolean, 
    required: true
  }
});

module.exports = Jeux = mongoose.model('jeux', JeuxSchema);