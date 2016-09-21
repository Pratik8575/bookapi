var mongoose = require('mongoose');

//Genre schema

var bookSchema = mongoose.Schema({
  title:{
    type: String,
    required: true
    //required for validation
  },
  genre:{
    type: String,
//    required: true
  },
  description:{
    type: String,
//    required: true
  },
  author:{
    type: String,
  //  required: true
  },
  pages:{
    type: String,
//    required: true
  },
  publisher:{
    type: String,
//    required: true
  },
  image_url:{
    type: String,
//    required: true
  },
  buy_url:{
    type: String,
  //  required: true
  },
  creatre_date:{
    type: Date,
    default: Date.now
  }
});

var Book = module.exports = mongoose.model('Book', bookSchema);
