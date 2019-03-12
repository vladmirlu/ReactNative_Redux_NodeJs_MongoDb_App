const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  title: {type: String},
  comments: {type: Array}
});

module.exports = mongoose.model('item', ItemSchema, 'items');