console.log("script linked");

//||||||||||||||||||||||||||||
// 1. INTRODUCTION
//||||||||||||||||||||||||||||

console.log("hello"); //corrected conosole

//||||||||||||||||||||||||||||
// 2. VARIABLES
//||||||||||||||||||||||||||||

var example = "some string";
console.log(example); //replaced examples w/ example

//||||||||||||||||||||||||||||
// 3. STRINGS
//||||||||||||||||||||||||||||

var someString = "this is a string";
console.log(someString);

//||||||||||||||||||||||||||||
// 4. STRING LENGTH
//||||||||||||||||||||||||||||

var example = "example string"; console.log(example.length); //added semi-colon

//||||||||||||||||||||||||||||
// 5. REVISING STRINGS
//||||||||||||||||||||||||||||

var pizza = "pizza is alright";
pizza = pizza.replace("alright", "wonderful"); //corrected allright spelling
console.log(pizza);

//||||||||||||||||||||||||||||
// 6. NUMBERS
//||||||||||||||||||||||||||||

var number = 900719925474099222;
console.log(number);

//||||||||||||||||||||||||||||
// 7. ROUNDING NUMBERS
//||||||||||||||||||||||||||||

var roundUp = 1.5;
console.log(Math.floor(roundUp+1)); //added 1 to value so that it'll round up

//||||||||||||||||||||||||||||
// 8. NUMBER TO STRING
//||||||||||||||||||||||||||||

var n = 128; //made n = a number instead of a string ('128' -> 128)
console.log(n.toString()); 

//||||||||||||||||||||||||||||
// 9. IF STATEMENT
//||||||||||||||||||||||||||||

var fruit = "orange";
if (fruit.length > 5) {
  console.log("The fruit name has more than five characters.");
}
else {
  console.log("The fruit name has five characters or less.");
}

//||||||||||||||||||||||||||||
// 10. FOR LOOP
//||||||||||||||||||||||||||||

var total = 0;
var limit = 10;

for (var i = 0; i < limit; i++) { // replaced <= with <
  total++; // made total++ instead of total += i
}

console.log(total);

//||||||||||||||||||||||||||||
// 11. ARRAYS
//||||||||||||||||||||||||||||

var pizzaToppings = ["tomato sauce", "cheese", "pepperoni"];
console.log(pizzaToppings); //added another p to Topings

//||||||||||||||||||||||||||||
// 12. ARRAY FILTERING
//||||||||||||||||||||||||||||

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers.filter(n => {
  if (n % 2 == 0) {return n;} //replaced || with == and put return n; in {}
}));

//||||||||||||||||||||||||||||
// 13. ACCESSING ARRAY VALUES
//||||||||||||||||||||||||||||

var food = ['apple', 'pizza', 'pear'];
console.log(food[2]); //changed 2

//||||||||||||||||||||||||||||
// 14. LOOPING THROUGH ARRAYS
//||||||||||||||||||||||||||||

var pets = ["cat", "dog", "rat"];

for (var i = 0; i < pets.length; i++) {
  pets[i] = pets[i] + "s"; //replaced pets[k] w/ pets[i]
}

console.log(pets);

//||||||||||||||||||||||||||||
// 15. OBJECTS
//||||||||||||||||||||||||||||

var pizza = {
  toppings: ['cheese', 'sauce', 'pepperoni'],
  crust: 'deep dish', //added a comma after 'deep dish'
  serves: 2
};

console.log(pizza);

//||||||||||||||||||||||||||||
// 16. OBJECT PROPERTIES
//||||||||||||||||||||||||||||

var food = {
  types: "only pizza" //replaced = w/ : after types
}

console.log(food.types);
