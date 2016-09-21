var router = require('express').Router();
var Genre = require('../models/genre');

/**
* Get genres
*/
router.get('/', function(req, res) {

  Genre.find(function(err, genres){
    if(err){
      throw err;
    }

    res.json(genres);
  });

});

/**
* Get genre by ID
*/
router.get('/:id', function(req, res) {

  Genre.findById(req.params.id,function(err, genre) {
    if(err){
      throw err;
    }

    res.json(genre);
  });

});

/**
* Add genre
*/
router.post('/', function(req, res) {

  var genre = req.body;
  Genre.create(genre,function(err, genre){
    if(err){
      throw err;
    }

    res.json(genre);
  });

});

/**
* Update genre
*/
router.put('/:id', function(req, res) {

  var id = req.params.id;
  var genre = req.body;
  Genre.findOneAndUpdate(id, genre, {}, function(err, genre){
    if(err){
      throw err;
    }
    res.json(genre);
  });

});

/**
* Delete genre by ID
*/
router.delete('/:id', function(req, res) {
  var id = req.params.id;
  Genre.remove(id, function(err, genre){
    if(err){
      throw err;
    }

    res.json(genre);
  });

});

module.exports = router;
