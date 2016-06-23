console.log("Assessment loaded!");
// Write the code to solve the following problems.

/**************************** CONDITIONALS ****************************/

// For each of the following, use window.prompt() to get user input.
// After getting each one right, "comment it out" so that when you
// refresh you don't have to keep typing things in!

// ### Spartacus
//
// Prompt the user to enter their name. If they enter "Spartacus" or
// "spartacus", print out "You're a traitor to Rome, crucifixion!".
// If they enter another name, print "Move along." If they enter
// nothing, print "Speak up!"

// ||||||||||||||||||||---SOLUTION---||||||||||||||||||||
// var name = window.prompt("What is your name?") //get name
// console.log(name); //print name
// if (name == 'spartacus' || name == 'Spartacus') { //check spartacus name
//   console.log("You're a traitor to Rome, crucifixion!"); 
// }

// else if (name.length > 0) { //check if any other name was entered
//   console.log("Move along.");
// }

// else {
//   console.log("Speak up!")
// }

// ### HUAAC
//
// Ask the user:
// "Are you now, or have you ever been, a member of the Communist Party?"
//
// - If they answer "No" or "no", then print:
//   "You have sworn that under oath."
// - If they don't answer, print: "Pleading the fifth, you commie?"
// - If they answer anything other than "No", "no", "Yes", or "yes",
//   then print: "Stick the questions at hand. This is a serious charge!"
// - If they answer "Yes" or "yes":
//   - prompt the user with the question "Name names!"
//   - if the user answers anything, then write: "Good."
//   - if the user answers nothing, then write: "You are in contempt!"

// ||||||||||||||||||||---SOLUTION---||||||||||||||||||||
// var answer = window.prompt('Are you now, or have you ever been, a member of the Communist Party?'); //ask

// if (answer == 'No' || answer == 'no') { //check no
//   console.log("You have sowrn that under oath."); 
// }
// else if (answer == 'Yes' || answer == 'yes') { //check yes
//   var response = window.prompt("Name names!");
//   if (response.length > 0) { //next set of conditions -- check if response was given
//     console.log("Good.");
//   }
//   else {
//     console.log("You are in contempt!"); //no response
//   }
// }
// else if (answer.length == 0) { //check if no answer was given
//   console.log("Pleading the fith, you commie?");
// }
// else { // check if other answer was given
//   console.log("Stick to the questions at hand. This is a serious charge!");
// }

// ### Big Gary, the Bouncer
//
// Big Gary's job is to make sure that the club only lets in the "best"
// class of clientele. Prompt the user for:
//
// - their age,
// - their income,
// - if they are wearing sneakers ("yes" or "no"),
// - if they are a celebrity ("yes" or "no").
//
// If Big Gary let's you in, he just prints "*nod*". If he doesn't, he
// prints: "You're not on the list. Sorry."
//
// You are not allowed in if:
//   - you are under 18 or over 35,
//   - you have an income under 100,000,
//   - you are wearing sneakers.
//
// Otherwise you are let in. However, there are some exceptions: you
// will also be let in if:
//   - you are over 16 and a celebrity,
//   - you are over 16 and your income is over 5,000,000,
//   - you are under 25 (and over 18), you have an income over 250,000,
//     but are wearing sneakers.

// ||||||||||||||||||||---SOLUTION---||||||||||||||||||||
// var age = window.prompt('Age?'); //gather info
// var income = window.prompt('Income?');
// var sneakers = window.prompt('Sneakers? (yes or no)');
// var celebrity = window.prompt('Celebrity? (yes or no)');

////check first special case
// if (age > 16 && (celebrity == 'yes' || celebrity == 'Yes')) { 
//   console.log('*nod*');
// }
//
////check second special case
// else if (age > 16 && income > 5000000) { 
//   console.log('*nod*');
// }

// //check third special case
// else if (age > 18 && age < 25 && income > 250000 && (sneakers == 'yes' || sneakers == 'Yes')) { 
//   console.log('*nod*');
// }

// //check factors that would keep you out
// else if (age < 18 || age > 35 || income < 100000 || sneakers == 'yes' || sneakers == 'Yes') { 
//   console.log("You're not on the list. Sorry.");
// }
// else {
//   console.log('*nod*');
// }

/**************************** WHILE LOOPS *****************************/

// ### Binge Watcher
//
// You're rocking out a sweet stay-cation, and want to watch some TV on
// your laptop with your boo. Cool!
//
// Prompt your boo with the question: "You want to keep watching?"
// If they respond with "no", then quit. Otherwise, print out the number
// of episodes left in each of House, Grey's Anatomy, and Ice Road
// Truckers, like:
// "Well, we've got:
//  177 episodes of House left,
//  266 episodes of Greys Anatomy left, and
//  118 episodes of Ice Road Truckers."
//
// Then prompt: "What do you want to watch? house, greys, or ice?"
// If they respond with "house", then watch 10 episodes of House,
// and then begin the whole loop again.
//
// If they respond with something other than "house", "greys", or "ice",
// then prompt them again.
//
// If they respond with "house," but there are no more episodes of House
// left, for example, then say "We're out of House, let's go to bed."
// and then quit.

// ||||||||||||||||||||---SOLUTION---||||||||||||||||||||
// var episodesOfHouse           = 50,
//     episodesOfGreysAnatomy    = 70,
//     episodesOfIceRoadTruckers = 10;

// do {
//   var answer = window.prompt('Do you want to keep watching?'); //get answer
//   if (answer == 'no' || answer == 'No') { //check no
//     console.log("Okay. Let's go to bed");
//   }
//   else if (answer == 'yes' || answer =='Yes') { //otherwise
      
//     var answerTwo = 0;//initialize answer variable
//     do { 
      
//       answerTwo = 0; //reset answerTwo variable after the loop resets

//       //print out list of episodes
//       console.log("Well, we've got:\n" + episodesOfHouse + ' episodes of House left,\n' 
//       + episodesOfGreysAnatomy + ' episodes of Greys Anatomy left, and\n'
//       + episodesOfIceRoadTruckers + ' episodes of Ice Road Truckers.');

//       //while loop to keep asking the question if inadequate answers are given
//       while ((answerTwo != "house") && (answerTwo != "greys") && (answerTwo != "ice")){ 
//         var answerTwo = window.prompt('What do you want to watch? house, greys, or ice?');
//       }

//       //console.log(answerTwo); //used to check functionality

//       //subtract 10 episodes from chosen show
//       if (answerTwo == 'house') {
//         episodesOfHouse -= 10;
//       }
//       else if (answerTwo == 'greys') {
//         episodesOfGreysAnatomy -= 10;
//       }
//       else if (answerTwo == 'ice') {
//         episodesOfIceRoadTruckers -= 10;
//       }

//       // condition that keeps user in loop if episodes have not run out
//     } while (episodesOfHouse >= 0 && episodesOfGreysAnatomy >= 0 && episodesOfIceRoadTruckers >= 0);

//     // let user know that show has run out of episodes
//     if (episodesOfHouse < 0) {
//       console.log("We're out of House, let's go to bed.");
//     }
//     else if (episodesOfGreysAnatomy < 0) {
//       console.log("We're out of Greys, let's go to bed.");
//     }
//     else {
//       console.log("We're out of Ice, let's go to bed.");
//     }
//   }
//   else { //keep people from dodging the first question.
//     console.log("Please answer the question.");
//   }
// } while (answer != 'yes' && answer != 'Yes' && answer != 'no' && answer != 'No');


/***************************** FOR LOOPS ******************************/

// ### Fizzbuzz
//
// For each number from 1 to 100 print the following:
//
// 1.  the number,
// 2.  if it is a multiple of 3, print "fizz" after the number,
// 3.  if it is a multiple of 5, print "buzz" after the number,
// 4.  BUT, if it is a multiple of 3 AND 5, print only "fizzbuzz" after
//     the number.
//
// Note: check out the % (modulo) operator!

// ||||||||||||||||||||---SOLUTION---||||||||||||||||||||
// for (var i=1; i <=100; i++) {
//   if (i%3 == 0 && i%5 == 0) {
//     console.log(i + ' fizzbuzz');
//   }
//   else if (i%3 == 0) {
//     console.log(i + ' fizz');
//   }
//   else if (i%5 == 0) {
//     console.log(i + ' buzz');
//   }
//   else {
//     console.log(i);
//   }
// }

/***************************** ITERATION ******************************/

// ### The Waltons
//
// "Alright y'all, it's time to say goodnight." The Waltons are a big
// family, and their bedtime ritual has gotten out of hand. Let's
// automate saying goodnight to everyone!
//
// 1. For every item in the array, print out:
//    "Good night, <name>!"
//    For example, for Mama we'd print "Good night, Mama!", but for Blue
//    the mule, we'd only print out "Good night, Blue!"
//
// 2. After you print out "Good night, <name>," print out the following
//    responses:
//    - people, except for Jim Bob:
//                "   G'night!"
//    - Jim Bob:  "   ..."
//    - Blue:     "   hee haw!"
//    - Reckless: "   arf!"
//    - Myrtle:   "   yeeeaaaoooy!"
//    - Molly:    "   snort!"

// ||||||||||||||||||||---SOLUTION---||||||||||||||||||||
// var waltons = [
//   "Mama",
//   "Daddy",
//   "Elizabeth",
//   "Blue the mule",
//   "John Boy",
//   "Reckless the dog",
//   "Ben",
//   "Myrtle the goat",
//   "Molly the horse",
//   "Jim Bob",
// ];
// //iterate through each family member
// for (var i=0; i<waltons.length; i++) {
//   //find the index first space in the name
//   var space = waltons[i].search(' ');


//   //check if space was found
//   if (space != -1) {  
//     //substring to isolate the first name
//     var shortenedName = waltons[i].substring(0,space); 
//   }
//   else {
//     //just make shortenedName = walton
//     var shortenedName = waltons[i];
//   }

//   //say goodnight to each member
//   console.log("Good night, " + shortenedName);
//   if (shortenedName == 'Jim') { //start checking conditionals
//     console.log('   ...');
//   }
//   else if (shortenedName == 'Blue') {
//     console.log('   hee haw!');
//   }
//   else if (shortenedName == 'Reckless') {
//     console.log('   arf!');
//   }
//   else if (shortenedName == 'Myrtle') {
//     console.log('   yeeeaaaoooy!');
//   }
//   else if (shortenedName == 'Molly') {
//     console.log('   snort!');
//   }
//   else {
//     console.log ("   G'night!");
//   }
// }