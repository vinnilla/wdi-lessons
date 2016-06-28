/*
Example 1:
Where it is a global scope variable. These type of variables are a no-no and we try to stay away from them.
*/
var name = 'bob'; //global scope.
console.log('this is the global scope variable name => ' + name);

/*
Example 2:
Where we have a function that has a local variable and then is consoled out. We see that the scope finds the variable that it is looking for within the function, thus not needing to go out to the global scope.
*/
var fullName = function(){
  var name = 'bob marley';
  console.log('this is the local variable from the variable set within function fullName=> ' + name);
}
fullName();

/*
Example 3:
So we can see here that scope looks inner first for that variable reference and then finds it. What happens if you got rid of the var name = 'dan iwao'? What do you think would get console.log ?
*/
var nameAgain = function(){
  var name = 'bob marley';
  (function(){
    var name = 'dan iwao';
    console.log('this is the variable name from the self invoked function => ' + name);
  })();
}
nameAgain();

/*
Example 4:
Wild, Wild Scope! This variable is not console.log as 'dan iwao' because the console.log method is used outside of the Anonymous Function! Thus, it keeps looking up.
*/
function crayCrayScope(){
  var name = 'bob marley';
  (function(){
    var name = 'dan iwao';
  })();
  console.log('this is where we see that the reference for this variable => name is not found in the IFFE, thus => '  +   name);
}
crayCrayScope();