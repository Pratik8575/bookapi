var mongoose = require('mongoose');

//Genre schema

var genreSchema = mongoose.Schema({
  name:{
    type: String,
    required: true
    //required for validation
  },
  creatre_date:{
    type: Date,
    default: Date.now
  }
});

var Genre = module.exports = mongoose.model('Genre', genreSchema);
