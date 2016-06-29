var bondFilms = [
  { 'title' : 'Skyfall', 'year' : 2012, 'actor' : 'Daniel Craig', 'gross' : '$1,108,561,008' },
  { 'title' : 'Thunderball', 'year' : 1965, 'actor' : 'Sean Connery', 'gross' : '$1,014,941,117' },
  { 'title' : 'Goldfinger', 'year' : 1964, 'actor' : 'Sean Connery', 'gross' : '$912,257,512' },
  { 'title' : 'Live and Let Die', 'year' : 1973, 'actor' : 'Roger Moore', 'gross' : '$825,110,761' },
  { 'title' : 'You Only Live Twice', 'year' : 1967, 'actor' : 'Sean Connery', 'gross' : '$756,544,419' },
  { 'title' : 'The Spy Who Loved Me', 'year' : 1977, 'actor' : 'Roger Moore', 'gross' : '$692,713,752' },
  { 'title' : 'Casino Royale', 'year' : 2006, 'actor' : 'Daniel Craig', 'gross' : '$669,789,482' },
  { 'title' : 'Moonraker', 'year' : 1979, 'actor' : 'Roger Moore', 'gross' : '$655,872,400' },
  { 'title' : 'Diamonds Are Forever', 'year' : 1971, 'actor' : 'Sean Connery', 'gross' : '$648,514,469' },
  { 'title' : 'Quantum of Solace', 'year' : 2008, 'actor' : 'Daniel Craig', 'gross' : '$622,246,378' },
  { 'title' : 'From Russia with Love', 'year' : 1963, 'actor' : 'Sean Connery', 'gross' : '$576,277,964' },
  { 'title' : 'Die Another Day', 'year' : 2002, 'actor' : 'Pierce Brosnan', 'gross' : '$543,639,638' },
  { 'title' : 'Goldeneye', 'year' : 1995, 'actor' : 'Pierce Brosnan', 'gross' : '$529,548,711' },
  { 'title' : 'On Her Majesty\'s Secret Service', 'year' : 1969, 'actor' : 'George Lazenby', 'gross' : '$505,899,782' },
  { 'title' : 'The World is Not Enough', 'year' : 1999, 'actor' : 'Pierce Brosnan', 'gross' : '$491,617,153' },
  { 'title' : 'For Your Eyes Only', 'year' : 1981, 'actor' : 'Roger Moore', 'gross' : '$486,468,881' },
  { 'title' : 'Tomorrow Never Dies', 'year' : 1997, 'actor' : 'Pierce Brosnan', 'gross' : '$478,946,402' },
  { 'title' : 'The Man with the Golden Gun', 'year' : 1974, 'actor' : 'Roger Moore', 'gross' : '$448,249,281' },
  { 'title' : 'Dr. No', 'year' : 1962, 'actor' : 'Sean Connery', 'gross' : '$440,759,072' },
  { 'title' : 'Octopussy', 'year' : 1983, 'actor' : 'Roger Moore', 'gross' : '$426,244,352' },
  { 'title' : 'The Living Daylights', 'year' : 1987, 'actor' : 'Timothy Dalton', 'gross' : '$381,088,866' },
  { 'title' : 'A View to a Kill', 'year' : 1985, 'actor' : 'Roger Moore', 'gross' : '$321,172,633' },
  { 'title' : 'License to Kill', 'year' : 1989, 'actor' : 'Timothy Dalton', 'gross' : '$285,157,191' }
];

var answerArray=[];
// Create a new array with the names of the Bond films.
var titles = bondFilms.map(function(bondFilm){
  return bondFilm.title;
});
console.log(titles);
answerArray.push(titles);

// Create a new array with the names of the all actors who have ever played Bond,
// but with no duplicates!
// (One Roger Moore is more than enough.) Save it to a sensibly-named variable.
var actors = bondFilms.map(function(bondFilm) {
  return bondFilm.actor;  
});

var uniqueActors = actors.filter(function(element, position) {
  return actors.indexOf(element) == position;
});

console.log(uniqueActors);
answerArray.push(uniqueActors);

// Create a new array `oddBonds`, of only the Bond films released on odd-numbered years.
var oddBonds = bondFilms.filter(function(bondFilm) {
  return bondFilm.year%2 !=0;
});
console.log(oddBonds);
answerArray.push(oddBonds);

// Create a new array `newBonds` of all Bond films released after 1980
var newBonds = bondFilms.filter(function(bondFilm) {
  return bondFilm.year > 1980;
})
console.log(newBonds);
answerArray.push(newBonds);

// Determine the total cumulative gross of the Bond franchise.

// Save it to a sensibly-named variable.
// var totalGross=0;
// bondFilms.map(function(bondFilm) {
//   var string = bondFilm.gross;
//   var array = string.split(',');
//   var firstString = '';
//   var money = '';
//   //first index in array contains $
//   var firstArray = array[0].split('');
//   var newArray = firstArray.filter(function(x) {
//     return x!='$';
//   })
//   for (var i=0; i<newArray.length; i++) {
//     firstString += newArray[i];
//   }
//   array[0] = firstString;
//   console.log(array);
//   //iterate through the array
//   for (var i=0; i<array.length; i++) {
//     money += array[i];
//   }
//   totalGross += parseInt(money);
// });
// console.log(totalGross);

var totalGross = 0;
var arrayGross = bondFilms.map(function(bondFilm) {
  //get rid of $ sign
  var no$ = bondFilm.gross.replace('$','');
  //get rid of all commas
  while (no$.search(',') != -1) {
    no$ = no$.replace(',','');
  }
  //return string converted to int
  return parseInt(no$);
})
for (var i=0; i<arrayGross.length; i++) {
  totalGross += arrayGross[i];
}
console.log(totalGross);
answerArray.push(totalGross);

// #### Bonus






// 1. Find the movie object that contains the actor who starred in the least number of films.
//store actors in array
var actors = bondFilms.map(function(bondFilm) {
  return bondFilm.actor;  
});

var uniqueActors = actors.filter(function(element, position) {
  return actors.indexOf(element) == position;
});
//create array to hold appearances (same index as uniqueActors)
var appearances = [];
for (var i=0; i<uniqueActors.length; i++) {
  appearances.push(0);
}

bondFilms.map(function(film) {
  //loop through uniqueActors
  for (var i=0; i<uniqueActors.length; i++) {
    if (film.actor == uniqueActors[i]) {
      appearances[i]++;
    }
  }
});
//now appearances should have the number of appearances of each actor
//find the smallest number in the appearance array
var smallest= Infinity;
for (var i=0; i<appearances.length; i++) {
  if (appearances[i] < smallest) {
    smallest = appearances[i];
  }
}
var index = appearances.indexOf(smallest)
var leastBond = bondFilms.filter(function(film) {
  return film.actor == uniqueActors[index];
});
console.log(leastBond);
answerArray.push(leastBond);



// 2. Create a variable called `highestGrossingBond` and use your programming powers to return the highest grossing film, storing it to `highestGrossingBond`.
var highestGross=0;
bondFilms.map(function(film) {
  //get rid of $ sign
  var no$ = film.gross.replace('$','');
  //get rid of all commas
  while (no$.search(',') != -1) {
    no$ = no$.replace(',','');
  }
  var int = parseInt(no$);
  if (int > highestGross) {
    highestGross = int;
  }
});

var highestGrossingBond = bondFilms.filter(function(film) {
  //get rid of $ sign
  var no$ = film.gross.replace('$','');
  //get rid of all commas
  while (no$.search(',') != -1) {
    no$ = no$.replace(',','');
  }
  var int = parseInt(no$);
  return int == highestGross;
})
console.log(highestGrossingBond);
answerArray.push(highestGrossingBond);




// 3. Create a variable called `worstGrossingBond`. Use all the tools at your disposal (and perhaps one or two you have yet to discover) to iterate through all the films and return the film with the lowest gross. Store the returned film in the variable `worstGrossingBond`.
var lowest = Infinity;
bondFilms.map(function(film) {
  //get rid of $ sign
  var no$ = film.gross.replace('$','');
  //get rid of all commas
  while (no$.search(',') != -1) {
    no$ = no$.replace(',','');
  }
  var int = parseInt(no$);
  if (int < lowest) {
    lowest = int;
  }
})

var worstGrossingBond = bondFilms.filter(function(film) {
  //get rid of $ sign
  var no$ = film.gross.replace('$','');
  //get rid of all commas
  while (no$.search(',') != -1) {
    no$ = no$.replace(',','');
  }
  var int = parseInt(no$);
  return int == lowest;
});
console.log(worstGrossingBond);
answerArray.push(worstGrossingBond);





// 4. Create a new array, `moviesPerActor`, where each value in the array is an object formatted like so: `{ Daniel Craig : 3 }`
moviesPerActor = [];
//uniqueActors holds each actor and appearances holds the appearances of each
for (var i=0; i<uniqueActors.length; i++) {
  var object = {};
  object[uniqueActors[i]] = appearances[i];
  moviesPerActor.push(object);
}
console.log(moviesPerActor);
answerArray.push(moviesPerActor);

// 5. Use forEach to append each answer to the DOM
var answers = document.getElementById('answers');
answerArray.forEach(function(x) {
  li = document.createElement('p');
  li.innerHTML = x;
  console.log(li);
  answers.appendChild(li);
});
