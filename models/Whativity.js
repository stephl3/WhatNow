const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WhativitySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  photoUrl: {
    type: String,
    // required: true
  },
  rating: {
    type: Number,
    // required: true
  },
  address: {
    type: String,
    required: true
  }
});

const Whativity = mongoose.model('whativity', WhativitySchema);

module.exports = Whativity;