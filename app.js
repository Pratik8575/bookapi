var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(cors());

var genre = require('./controllers/genre');
var book = require('./controllers/book');

// Connect to mongoose
mongoose.connect('mongodb://localhost/bms');
//here bms is a database name
var db = mongoose.connection;

// App routes
app.get('/',function(req,res){
  res.end("Please Use the API Endpoint..");
});

app.use('/api/genres', genre);
app.use('/api/books', book);

app.set("PORT", process.env.PORT || 3000);

app.listen(app.get("PORT"),function(){
  console.log("running on 3000");
});
