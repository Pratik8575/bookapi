var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());

Genre = require('./models/genre.js');
Book = require('./models/book.js');
// Connect to mongoose

app.set("PORT", process.env.PORT || 3000);

mongoose.connect('mongodb://localhost/bms');
//here bms is a database name
var db = mongoose.connection;

app.get('/',function(req,res){
  res.end("Please Use the API Endpoint..");
});

//get genres
app.get('/api/genres',function(req,res){
  Genre.getGenres(function(err, genres){
    if(err){
      throw err;
    }
    res.json(genres);
  })
});

//get genres by ID
app.get('/api/genres/:_id',function(req,res){
  Genre.getGenreById(req.params._id,function(err, genre){
    if(err){
      throw err;
    }
    res.json(genre);
  })
});

//Add genre
app.post('/api/genres',function(req,res){
  var genre = req.body;
  Genre.addGenre(genre,function(err, genre){
    if(err){
      throw err;
    }
    res.json(genre);
  })
}); // app.use(body-parser);


//Update genres by id
app.put('/api/genres/:_id',function(req,res){
  var id = req.params._id;
  var genre = req.body;
  Genre.updateGenre(id, genre, {}, function(err, genre){
    if(err){
      throw err;
    }
    res.json(genre);
  })
});

//Delete genre
app.delete('/api/genres/:_id',function(req,res){
  var id = req.params._id;
  Genre.deleteGenre(id, function(err, genre){
    if(err){
      throw err;
    }
    res.json(genre);
  })
});

//get books
app.get('/api/books',function(req,res){
  Book.getBooks(function(err, books){
    if(err){
      throw err;
    }
    res.json(books);
  })
});

//get books by ID
app.get('/api/books/:_id',function(req,res){
  Book.getBookById(req.params._id,function(err, book){
    if(err){
      throw err;
    }
    res.json(book);
  })
});

//Add book
app.post('/api/books',function(req,res){
  var book = req.body;
  Book.addBook(book,function(err, book){
    if(err){
      throw err;
    }
    res.json(book);
  })
});

//get books by ID
app.put('/api/books/:_id',function(req,res){
  var id = req.params._id;
  var book = req.body;
  Book.updateBook(id, book, {}, function(err, book){
    if(err){
      throw err;
    }
    res.json(book);
  })
});

//delete book

app.delete('/api/books/:_id',function(req,res){
  var id = req.params._id;
  Book.deleteBook(id, function(err, book){
    if(err){
      throw err;
    }
    res.json(book);
  })
});




app.listen(app.get("PORT"),function(){
  console.log("running on 3000");
});
