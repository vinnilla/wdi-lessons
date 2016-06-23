// |||||||||||||||||||||||||||||||||
// ||||||||| SBC JS Drills |||||||||
// |||||||||||||||||||||||||||||||||

// A. ||||||| ARRAY PLAY! |||||||

// 1. Make a roster variable and set it to an array of the players.
console.log("1. The Roster\n");

var roster = ['Judy Kim', 
'Sam Fishinbottom',
'Mike Pittz',
'Amy Vlor',
'Greg Craig',
'Craig Greg',
'Lex Luger',
'Klempt Klarc',
'Amit Patel',
'Joanne Fabric',
'Margaret Kalanchoe',
'Lucy Bascetta'];

for (var i=0; i<roster.length; i++) {
	console.log(roster[i]);
}

console.log("\n");
// 2. Set the batting lineup to the last 9 people on the roster.
console.log("2. The Lineup\n");

var batting = []; //initialize empty batting array
var start = roster.length - 9; //find the start of the last 9 people on the roster
for (var i=0; i<9; i++){
	batting[i] = roster[i+start];
}

for (var i=0; i<batting.length; i++) {
	console.log(batting[i]);
}

console.log('\n');
// 3. Make a var batterUp and set it to the first member in the lineup.
//    Then, print to the console the batter's name append with " is up
//    to bat!".
console.log("3. Batter Up!\n");

var batterUp = batting[0];
console.log(batterUp + ' is up to bat!');

// B. ||||||| CONDITIONAL POSITIONAL! |||||||

console.log('\n');
// 4. Select "Lex Luger" from the lineup and set him to the var slugger.
//    Then, create a variable onBase and set it to a number between 0
//    and 3. If the value of onBase is 2 or greater, print to the
//    console, "Lex take us home!", otherwise, print "Get us on base
//    Lex!"
console.log('4. Take Us Home, Slugger\n');

var slugger = 'Lex Luger';
var onBase = (Math.random()*3) +1;

if (onBase >= 2) {
	console.log('Lex take us home!');
}
else {
	console.log('Get us on base Lex!');
}



console.log('\n');
// 5. Below is an undefined variable, warmingUp. Create a variable
//    leadingBy and set it to a number. Then, if leadingBy is less than
//    2, set warmingUp to "Sam Fishinbottom". Finally, create a variable
//    pitcher, and set it to the warmingUp var OR the first spot in the
//    roster.
console.log('5. Pitcher or Closer?\n');

var warmingUp = '';
var leadingBy = (Math.random()*4)+1;

if (leadingBy<2) {
	warmingUp = 'Sam Fishinbottom';
}

var pitcher = '';
if (warmingUp.length > 0) {
	pitcher = warmingUp;
}
else {
	pitcher = roster[0];
}

//console.log(pitcher);

console.log('\n');
// 6. Create a variable downBy. If the pitcher is Sam Fishinbottom AND
//    downBy is greater than 2, tell Sam to go for the knees. Otherwise,
//    just tell her to strike 'em out.
console.log('6. Dirty Tricks\n');

var downBy = Math.random()*3 +1;

if (pitcher == 'Sam Fishinbottom' && downBy > 2) {
	console.log('Go for the knees!');
}
else {
	console.log("Strike 'em out");
}


// C. ||||||| LOOP TROOP |||||||
console.log('\n');
// 7. Using a while loop, iterate through the lineup and for each
//    player, print to the console "<player name> is ready to knock it
//    out of the park!"
console.log('7. Run Through the Batting Order\n');

var i = 0;
while (i < roster.length) {
	console.log(roster[i] + ' is ready to knock it out of the park!');
	i++;
}


console.log('\n');
// 8. No one can ever remember which one is Greg and which is Craig. If
//    a player contains "Greg" in their name, the team should fumble
//    when cheering them on. Otherwise, they should cheer: "Let's go
//    <player name>!". Use a for loop!
console.log('8. The Greg Craig Predicament\n');

for (var i=0; i<roster.length; i++) {
	if (roster[i].search('Greg') != -1) {
		console.log('*fumble*');
	}
	else {
		console.log("Let's go " + roster[i] + "!");
	}
}

console.log('\n');s
// 9. The team is getting new jerseys with names on the back, but the
//    cost of printing a name over 7 characters isn't in the budget.
//    Create an empty array with the name playersCut. Then loop over the
//    roster array and add all players with a last name longer than 7
//    characters and print it to the console.
console.log('9. Long Name Freaks Gotta Go\n');

var playersCut = [];

for (var i=0; i<roster.length; i++) { //iterate through each name
	var space = roster[i].search(' '); //find the location of the space in the name
	if (roster[i].length-1-space > 7) {
		playersCut.push(roster[i]);
		console.log(roster[i]);
	}
}