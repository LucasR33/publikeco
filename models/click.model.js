const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClickSchema = new Schema({
    id_joueur: {
    type: Number
  },
  datetime_clic: {
    type: Date,
    required: true
  },
  annonceur: {
    type: String,
    required: true
  },
  id_emplacement_annonce: {
    data: Number,
    required: false
  },
  jeu: {
    type: String,
    required: true
  },
  prix_annonce: {
    type: Number,
    required: true
  },
  id_annonce: {
    type: String,
    required: true
  }
});

module.exports = Click = mongoose.model('Click', ClickSchema);
