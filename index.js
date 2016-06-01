var express = require('express');
var less = require('less')
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'static')));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname,'index.html'))
})


app.listen(3000);