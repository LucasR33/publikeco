const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmplacementSchema = new Schema({
  id_emplacement_annonce: {
    type: Number
  },
  prix_min: {
    type: Number,
    required: true
  },
  description_emplacement: {
    type: String,
    required: true
  },
});

module.exports = Emplacement = mongoose.model('emplacement', EmplacementSchema);
