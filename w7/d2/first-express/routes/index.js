var express = require('express');
var app = express();

app.locals.title = 'First Express';

var route = app.get('/', function(request, response) {
  response.render('home');
});

module.exports = route;