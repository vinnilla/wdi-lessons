var weekdays = require('./utilities/days-of-week');
var random = require('./utilities/random');
var circle = require('./utilities/circle');
var request = require('request');

// var fives = [];

// for (var i=1; i<=100; i++) {
// 	if (i%5 == 0) {
// 		fives.push(i)
// 	}
// }

// console.log(fives)

// console.log(weekdays.getWeekday(0))

// for (var i=0; i<10; i++) {
// 	console.log(random(100,200));
// }

// console.log(circle.area(50));
// console.log(circle.circumference(75));

var request = require('request');
request('http://jsonplaceholder.typicode.com/users', function(err, res, body) {
    console.log(body);
});