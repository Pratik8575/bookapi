var router = require('express').Router();
var Book = require('../models/book');

router.get('/', function(req, res) {

  Book.find(function(err, books){
    if(err){
      throw err;
    }

    res.json(books);
  });

});

router.get('/:id', function(req, res) {

  Book.findById(req.params.id,function(err, book){
    if(err){
      throw err;
    }
    res.json(book);
  });

});

router.post('/', function(req, res) {

  var book = req.body;
  Book.create(book,function(err, book){
    if(err){
      throw err;
    }
    res.json(book);
  })

});

router.put('/:id', function(req, res) {

  var id = req.params._id;
  var book = req.body;
  var query = { _id : id};
  var update = {
    title : book.title,
    genre : book.gener,
    description : book.description,
    author : book.author,
    publisher : book.publisher,
    pages : book.pages,
    image_url : book.image_url,
    buy_url : book.buy_url
  };

  Book.findOneAndUpdate(id, book, {}, function(err, book){
    if(err){
      throw err;
    }
    res.json(book);
  });

});

router.delete('/:id', function(req, res) {

  var id = req.params._id;
  Book.remove(id, function(err, book){
    if(err){
      throw err;
    }

    res.json(book);
  });

});
module.exports = router;

module.exports.updateBook = function(id,book,options,callback){
  var query = { _id : id};
  var update = {
    title : book.title,
    genre : book.gener,
    description : book.description,
    author : book.author,
    publisher : book.publisher,
    pages : book.pages,
    image_url : book.image_url,
    buy_url : book.buy_url
  }
  Book.findOneAndUpdate(query, update, options, callback);
}