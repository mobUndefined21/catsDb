const mongoose = require('mongoose');

// id: 1,
// name: 'Pawline McFluffy',
// sleeping: true

const CatSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  sleeping: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('Cats', CatSchema);