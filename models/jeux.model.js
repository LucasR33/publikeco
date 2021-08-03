const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JeuxSchema = new Schema({
  id_annonce: {
    type: Number
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
    data: Buffer,
    contentType: String
  },
  emplacements_annonces: {
    type: Array,
    required: true
  }
});

module.exports = Jeux = mongoose.model('jeux', JeuxSchema);