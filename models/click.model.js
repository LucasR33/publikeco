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
  id_annonceur: {
    type: Number,
    required: true
  },
  id_emplacement_annonce: {
    data: Number,
    required: true
  },
  id_jeu: {
    type: Number,
    required: true
  },
});

module.exports = Click = mongoose.model('Click', ClickSchema);
