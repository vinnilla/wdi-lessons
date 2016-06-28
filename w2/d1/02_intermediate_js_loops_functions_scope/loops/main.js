// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

//http://stackoverflow.com/questions/9329446/for-each-over-an-array-in-javascript
/* Example 1
Here is a bare bones example of a forEach loop.
*/

var a = ["a", "b", "c"];
a.forEach(function(entry) {
    console.log(entry);
});

/* Example 2
Here is an example with a function that uses a forEach loop to loop through an array with objects.
*/
function basketballStats(stats){
  var numbers = []; //creating an empty array

  stats.forEach(function(stat){     //stats is the array name. Can you explain why?

  numbers.push(stat.name);    //empty array and pushing the index of stat.name into numbers.
  });
  return numbers;
}

var numbers = basketballStats([
  {points: 25, name: 'Lebron'},
  {points: 15, name: 'Kevin Love'}

]);

console.log(JSON.stringify(numbers));

//Make a forEach loop like example one that console.log's 3 strings.
