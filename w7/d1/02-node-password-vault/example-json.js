var person = {
	name: 'vincent',
	age: 21
}

//object to JSON
var personJSON = JSON.stringify(person);
console.log(personJSON);

//JSON to object
var personObject = JSON.parse(personJSON);
console.log(personObject);
