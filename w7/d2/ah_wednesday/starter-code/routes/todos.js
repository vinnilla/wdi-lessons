var express = require('express');
var router = express.Router();
var todos = require('../data/todos');

module.exports = function(app) {

  router.route('/')
    .all(function(req, res, next) {
      next();
    })
    .get(function(req,res) {
      res.render('todos/index');
    })
    .post(function(req,res) {
      todos.push({
        todo: req.body.newTodo,
        done: false
      });
      res.render('todos/index');
    })
  router.route('/:id')
    .all(function(req,res,next) {
      next();
    })
    .get(function(req,res) {
      app.locals.index = req.params.id;
      res.render('todos/show');
    })
    .put(function(req,res) {
      app.locals.index = req.params.id;
      var todo = todos[req.params.id];
      todo.todo = req.body.editTodo;
      res.render('todos/show');
    });

  return router;
};