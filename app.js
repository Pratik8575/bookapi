var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());

var genre = require('./controllers/genre');
var book = require('./controllers/book');

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

app.use('/api/genres', genre);
app.use('/api/books', book);

app.listen(app.get("PORT"),function(){
  console.log("running on 3000");
});
