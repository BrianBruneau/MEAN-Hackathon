var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var expressJWT = require('express-jwt');
var jwt = require('jsonwebtoken');
var app = express();



var mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/recipes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// app.get('/piano', function(req, res) {
//   res.sendFile(path.join(__dirname, 'public/app/views/piano.html'));
// });

app.listen(3000);
