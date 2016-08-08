//connect to mongo
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/embedded-docs')
//load model
// var User = require('./user')

// var joe = new User({
//    name: "Joe Bookreader",
//    addresses: [
//     {
//       street: "123 Fake Street",
//       city: "Faketon",
//       state: "MA",
//       zip: "12345"
//     },
//     {
//       street: "1 Some Other Street",
//       city: "Boston",
//       state: "MA",
//       zip: "12345"
//     }
//   ]
// })

// joe.save(err => console.log(err))

// User.findOne(function(err,user) {
// 	user.addresses[0].remove()
// 	user.addresses[1].remove()
// 	user.save()
// })

// User.find(function(err,users) {
// 	console.log(users)
// })

var Author = require('./author')

var jim = new Author({
	name: "Bob",
	age: 50,
	books: [
		{
			title: "Harry Potter",
			year: new Date(1979, 1, 1)
		},
		{
			title: "Lord of the Rings",
			year: new Date(1982, 1, 1)
		}
	]
})
// jim.save(err => console.log(err));

// Author.find(function(err,authors) {
// 	console.log(authors)
// })

Author.findOne({name: "Bob"}, function(err, author) {
	console.log(author)
})