const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnnonceSchema = new Schema({
  id_annonce: {
    type: Number
  },
  libelle: {
    type: String,
    required: true
  },
  id_annonceur: {
    type: Number,
    contentType: String
  },
  media: {
    data: Buffer,
    contentType: String
  },
  description: {
    type: String,
    required: true
  },
  cible: {
    type: Array,
    required: true
  },
  prix_max: {
    type: Number,
    required: true
  },
});

module.exports = Annonce = mongoose.model('annonce', AnnonceSchema);