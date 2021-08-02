const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnnonceSchema = new Schema({
  id_annonce: {
    type: integer,
    required: true
  },
  libelle: {
    type: String,
    required: true
  },
  id_annonceur: {
    type: integer,
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
    type: Double,
    required: true
  },
});

module.exports = Annonce = mongoose.model('annonce', AnnonceSchema);