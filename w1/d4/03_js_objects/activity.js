console.log('help! please fix me!');

// Fix it!

// Identify the problems in the following five JavaScript
// Objects and correct them.

var vegetable = {
    name: "Carrot", //missing comma
    color: "orange" //semi colon is in the wrong spot
} //removed comma

var movie = {
    title: "West World", // replaced semi-colon with colon
    genres: ["Drama", "Sci-Fi"], //replaced semi-colon with colon
    directedBy: "Michael Crichton", //missing comma
    cast: ["Yul Brynner"]
}

var pet = { //changed square brackets to curly ones
    name: "Tiny",
    bornOn: new Date('5/21/2001'),
    imageUrl: "http://kitten.me/200/200"
}

var meal = {
    name: "Extra Value Meal",
    contents: [
        "Big Mac", "French Fries", "Soda"
    ],
    price: '$3.99' //made it into a string
} // replaced ) with }

var dwelling = { //added an equal sign
    type: "apartment",
    address: { //replaced square bracket with curly braces
        street: "1520 2nd St",
        city: "Santa Monica",
        state: "California"
    },
    tenants: ["Jack", "Chrissy", "Janet"]
}

// Update it!

// Since the objects above are already declared, 
// we can reference them and manipulate them them 
// by adding more code below

// Reassign the name property of vegetable object to "pumpkin"
vegetable.name = 'pumpkin';
// Add the key "season" and the value "autumn"
vegetable.season = 'autumn';
console.log(vegetable);

// Add the cast member "Richard Benjamin" to the movie object
movie.cast.push('Richard Benjamin');
// Add the key "budget" and the value "$1,250,000"
movie.budget = '$1,250,000';
console.log(movie);

// Use square bracket notation to add the key "type" and the value "cat"
// to the pet object
pet['type'] = 'cat';
console.log(pet);

// Remove the "soda" item from the meal's content's array
meal.contents.splice(2,1);
// Update the price to "$2.99"
meal.price = '$2.99';
console.log(meal);

// Delete the "tenants" property from the dwelling object
delete dwelling.tenants;
console.log(dwelling);

// Make it!

// Create an object representing a 1969 Ford Mustang
var car = {
    year: 1969,
    make: 'Ford',
    model: 'Mustang'
}
console.log(car);

// Create an object representing yourself and assign
// it to a variable called "student"
// include the properties firstName, lastName, bornOn, 
// and interests.
// What datatypes should you use?
var student = {
    firstName: 'Vincent',
    lastName: 'Huang',
    bornOn: new Date('8/20/1994'),
    interests: ['video games',
    'programming',
    'Ultimate Frisbee']
}
console.log(student);

// Create an object for a player of tic-tac-toe, include their
// name, current wins and losses, and points
var player = {
    name: 'Vincent',
    wins: 2,
    losses: 1,
    points: 1
}
console.log(player);

// Create an object representing the Ace of Spades
// How many properties can you break it down into?

var card = {
    suit: 'Spades',
    value: 'Ace',
    color: 'Black'
}
console.log(card);