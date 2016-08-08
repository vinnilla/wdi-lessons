var express = require('express');
var app = express();

app.locals.todos = require('../data/todos');


var route = app.get('/todos', function(req, res) {
  res.render('todos/index');
});

module.exports = route;