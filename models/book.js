<<<<<<< HEAD
var mongoose = require('mongoose');

//Genre schema

var bookSchema = mongoose.Schema({
  title:{
    type: String,
    required: true
    //required for validation
  },
  gener:{
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

//Get Genre
//module.exports for access from any where
module.exports.getBooks = function(callback, limit){
  Book.find(callback).limit(limit);
}


//this is for search book by ID:
module.exports.getBookById = function(id,callback){
  Book.findById(id,callback);
}

//Add book
module.exports.addBook = function(book,callback){
  Book.create(book,callback);
}

module.exports.updateBook = function(id,book,options,callback){
  var query = { _id : id};
  var update = {
    title : book.title,
    gener : book.gener,
    description : book.description,
    author : book.author,
    publisher : book.publisher,
    pages : book.pages,
    image_url : book.image_url,
    buy_url : book.buy_url
  }
  Book.findOneAndUpdate(query, update, options, callback);
}

//Delete Book
module.exports.deleteBook = function(id, callback){
    var query = { _id : id };
  Book.remove(query, callback);
}
=======
var mongoose = require('mongoose');

//Genre schema

var bookSchema = mongoose.Schema({
  title:{
    type: String,
    required: true
    //required for validation
  },
  gener:{
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

//Get Genre
//module.exports for access from any where
module.exports.getBooks = function(callback, limit){
  Book.find(callback).limit(limit);
}


//this is for search book by ID:
module.exports.getBookById = function(id,callback){
  Book.findById(id,callback);
}

//Add book
module.exports.addBook = function(book,callback){
  Book.create(book,callback);
}

module.exports.updateBook = function(id,book,options,callback){
  var query = { _id : id};
  var update = {
    title : book.title,
    gener : book.gener,
    description : book.description,
    author : book.author,
    publisher : book.publisher,
    pages : book.pages,
    image_url : book.image_url,
    buy_url : book.buy_url
  }
  Book.findOneAndUpdate(query, update, options, callback);
}

//Delete Book
module.exports.deleteBook = function(id, callback){
    var query = { _id : id };
  Book.remove(query, callback);
}
>>>>>>> ece20ebbc2dd20aa19f19d87d886f6bedca0f919
