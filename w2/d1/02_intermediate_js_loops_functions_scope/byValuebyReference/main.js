//variables passed by value, these are primative data types such as Strings, Numbers, Booleans

var foo = 'bar';
var doo; //no data attached to var doo.

doo = foo;  //doo is now foo

foo = 'foo foo';  //foo changes data type from 'bar' to 'foo foo'

console.log(foo);   //what will this be?
console.log(doo);   //what will this be?

//Explain in the comments below here what you think happened.
/*
console.log(foo) --> foo foo
console.log(doo) --> bar
when foo was changed, doo was not affected
*/

//variables passed by reference for all objects.
var person = {
  name: 'dan',
  gender: 'male'
};

var newPerson;

newPerson = person;
person.name = 'kedar';

console.log(person.name); //what will this be?
console.log(newPerson.name); //what will this be?

//Explain in the comments below here what you think happened.
/*
the object's property name is changed to 'kedar'
both newPerson and person are pointing to the same object
*/
