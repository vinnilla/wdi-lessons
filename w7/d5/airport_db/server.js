var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/airport_db')

var Airport = require('./models/airport');
var Flight = require('./models/flight');
var Passenger = require('./models/passenger');

var JFK = new Airport({
  name:"JFK",
  country:"USA",
  terminals:[],
  opened: new Date(1990, 1, 1)
})

var CDG = new Airport({
  name:"CDG",
  country:"France",
  terminals:[]
})

var flight1 = new Flight({
  from:"CDG",
  to:"JFK",
  airline:"American Airlines"
})

var Heathrow = new Airport({
  name:"Heathrow",
  country:"UK",
  terminals:[]
})

var flight2 = new Flight({
  from:"Heathrow",
  to:"JFK",
  airline:"British Airways"
})

JFK.terminals.push({
  name:"Terminal 1",
  flights:[flight1.id, flight2.id],
  capacity: 234324
})

// JFK.save(err => console.log(err));
// CDG.save(err => console.log(err));
// flight1.save(err => console.log(err));
// flight2.save(err => console.log(err));
// Heathrow.save(err => console.log(err));

Airport.findOne({name:"JFK"},function(err, airport) {
  console.log("AIRPORT")
  console.log("name: "+airport.name)
  console.log("country: "+airport.country)
  console.log("opened: "+ airport.opened)
  console.log("TERMINALS: ")
  console.log(airport.terminals)
})

Flight.find(function(err, flights) {
  console.log("FLIGHTS: ")
  console.log(flights)
})
// var routes = require('./routes/index');

var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// // uncomment after placing your favicon in /public
// //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', routes);

module.exports = app;
