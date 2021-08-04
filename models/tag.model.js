const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TagsSchema = new Schema({
  id_tag: {
    type: Number
  },
  tag: {
    type: String,
    required: true
  },
});

module.exports = Tags = mongoose.model('Tags', TagsSchema);
