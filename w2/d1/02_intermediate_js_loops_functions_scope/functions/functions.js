/*
Big Idea to come away with!
Functions are first-class objects. This gives us the ability to treat them the same way that you treat other data types! You can pass them around, assign them to variables and create them.
*/

/*
Example 1:
Funtions are just OBJECTS! This funky code here shows us that just like with other objects, we can attach a property to it.
*/
function hello(){
  console.log('hi');
}
hello.nightGreeting = 'hey, what up!';
console.log(hello.nightGreeting);
//Big Idea to Connect to your future.
//This is a super important idea to understand. That functions are just objects and that we can add properties, this is seen in React.js.
function aFunction() {};
aFunction.thing1 = 'thing1';
aFunction.thing2 = 'thing2';
console.log(aFunction.thing1);
console.log(aFunction.thing2);
/*
Example 2:
Functions are either statements or expressions.
*/
//Function Statement/Declarative
function foo(){
  console.log('bar');
}
foo();

//Function Expression. This function is an anonymous function.
var anonymousFoo = function(){
  console.log('bar')
}
anonymousFoo();

//Passing a function into a function
function pass(a){
  console.log(a)
}
//UnComment each invoke.
pass(3);
pass('hello');
pass(true);
// You Do Section
//  create a function called hello and pass it into function pass and then invoke it and see what you get.
function hello() {
	console.log('hello');
}

pass(hello);