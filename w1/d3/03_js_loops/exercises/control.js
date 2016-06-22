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

// var name = window.prompt("What is your name?")
// console.log(name);

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

var episodesOfHouse           = 50,
    episodesOfGreysAnatomy    = 70,
    episodesOfIceRoadTruckers = 10;

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

var waltons = [
  "Mama",
  "Daddy",
  "Elizabeth",
  "Blue the mule",
  "John Boy",
  "Reckless the dog",
  "Ben",
  "Myrtle the goat",
  "Molly the horse",
  "Jim Bob",
];
