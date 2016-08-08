
// Require modules
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
// var todosR = require('./routes/todo');

// Create the Express app
var app = express();

// Configure the app (app.set)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// new code below
app.locals.title = 'First Express';
app.locals.todos = require('./data/todos');


// Mount middleware (app.use)
app.use(function(req, res, next) {
  console.log(req.headers['user-agent']);
  next();
});
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// require and mount (app.use) routes
app.use('/', routes);
// app.use('/todos', todosR);

// Define a root route directly on app
// Later, we will use the router object
app.get('/goodbye', function(request, response) {
	response.json({msg: 'Goodbye World o7'});
});

app.get('/goodbye/:name', function(request, response) {
	response.send('Goodbye ' + request.params.name);
});

app.get('/todos', function(req, res) {
  res.render('todos/index');
});

app.post('/todos', function(req, res) {
	app.locals.todos.push({
		todo: req.body.newTodo,
		done: false
	});
  res.render('todos/index');
});

// Tell the app to listen on port 3000
app.listen(3000, function() {
  console.log('Listening on port 3000');
});