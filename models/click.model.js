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
    required: false
  },
  id_emplacement_annonce: {
    data: Number,
    required: false
  },
  jeu: {
    type: String,
    required: false
  },
  prix_annonce: {
    type: Number,
    required: false
  },
  id_annonce: {
    type: String,
    required: false
  }
});

module.exports = Click = mongoose.model('Click', ClickSchema);
