<<<<<<< HEAD
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

//Get Genre
//module.exports for access from any where
module.exports.getGenres = function(callback, limit){
  Genre.find(callback).limit(limit);
}

//Get genre by id
module.exports.getGenreById = function(id, callback){
  Genre.findById(id, callback);
}

//Add genre
module.exports.addGenre = function(genre, callback){
  Genre.create(genre, callback);
}

//Update genre
module.exports.updateGenre = function(id, genre, options, callback){
  var query = { _id : id };
  var update = {
    name: genre.name
  }
  Genre.findOneAndUpdate(query, update, options, callback);
}


//Delete Genre
module.exports.deleteGenre = function(id, callback){
    var query = { _id : id };
  Genre.remove(query, callback);
}
=======
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

//Get Genre
//module.exports for access from any where
module.exports.getGenres = function(callback, limit){
  Genre.find(callback).limit(limit);
}

//Get genre by id
module.exports.getGenreById = function(id, callback){
  Genre.findById(id, callback);
}

//Add genre
module.exports.addGenre = function(genre, callback){
  Genre.create(genre, callback);
}

//Update genre
module.exports.updateGenre = function(id, genre, options, callback){
  var query = { _id : id };
  var update = {
    name: genre.name
  }
  Genre.findOneAndUpdate(query, update, options, callback);
}


//Delete Genre
module.exports.deleteGenre = function(id, callback){
    var query = { _id : id };
  Genre.remove(query, callback);
}
>>>>>>> ece20ebbc2dd20aa19f19d87d886f6bedca0f919
