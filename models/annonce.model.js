const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnnonceSchema = new Schema({
  id_annonce: {
    type: Number
  },
  datetime_annonce: {
    type: Date,
    required: true
  },
  libelle: {
    type: String,
    required: true
  },
  id_annonceur: {
    type: String,
    required: true
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
  valide: {
    type: Boolean,
    required: true
  }
});

module.exports = Annonce = mongoose.model('annonce', AnnonceSchema);