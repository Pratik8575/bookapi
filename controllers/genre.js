var router = require('express').Router();
var Genre = require('../models/genre');

router.get('/', function(req, res) {

  Genre.find(function(err, genres){
    if(err){
      throw err;
    }

    res.json(genres);
  });

});

router.get('/:id', function(req, res) {

  Genre.findById(req.params.id,function(err, genre) {
    if(err){
      throw err;
    }

    res.json(genre);
  });

});

router.post('/', function(req, res) {

  var genre = req.body;
  Genre.create(genre,function(err, genre){
    if(err){
      throw err;
    }

    res.json(genre);
  });

});

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
