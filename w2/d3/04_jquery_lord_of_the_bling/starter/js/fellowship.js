console.log("Fellowship loaded.");
var makeMiddleEarth = function() {
  // 1.  Create a section tag with an id of "middle-earth".
  var middleEarth = $('<section>').attr('id', 'middle_earth');
  // 2.  Create an article tag for each land in the lands array.
  lands.forEach(function(x) {
  	var newLand = $('<article>').addClass('land');
  	$('<h1>').text(x).appendTo(newLand);
  	newLand.appendTo(middleEarth);
  })
  // 3.  Give each article tag a class of "land".
  // 4.  Inside each article tag include an h1 tag with the name
  //     of the land as content.
  // 5.  Append each article.land to section#middle-earth.
  // 6.  Append section#middle-earth to the document body.
  middleEarth.appendTo('body');
}

// test this in the console (watch the HTML, though) by running:
makeMiddleEarth();

var makeHobbits = function() {
  // 1.  Create a ul tag with an id of "hobbits".
  var hobbitList = $('<ul>').attr('id','hobbits');
  // 2.  Create li tags for each Hobbit in the hobbits array.
  hobbits.forEach(function(x) {
  	$('<li>').addClass('hobbit').text(x).appendTo(hobbitList);
  })
  // 3.  Give each li tag a class of "hobbit".
  // 4.  Set the text of each li.hobbit to one of the Hobbits
  //     in the array.
  // 5.  Append the ul#hobbits to the article.land representing 
  //     "The Shire" (the first article tag on the page).
  hobbitList.appendTo("article:contains('The Shire')");
}

// test this in the console (watch the HTML, though) by running:
makeHobbits();

var keepItSecretKeepItSafe = function() {
  // 1.  Create a div with an id of "the-ring".
  var theRing = $('<div>').attr('id', 'the-ring').addClass('magic-imbued-jewelry');
  // 2.  Give div#the-ring a class of "magic-imbued-jewelry".
  // 3.  Add div#the-ring as a child element of the li.hobbit
  //     representing "Frodo."
  theRing.appendTo("li:contains('Frodo')");
}

// test this in the console (watch the HTML, though) by running:
keepItSecretKeepItSafe();

var makeBuddies = function() {
  // 1.  Create an aside tag.
  var aside = $('<aside>');
  // 2.  Create a ul tag with an id of "buddies" and append it to 
  //     the aside tag.
  var list = $('<ul>').attr('id','buddies').appendTo(aside);
  // 3.  Create li tags for each buddy in the buddies array in 
  //     data.js.
  buddies.forEach(function(x) {
  	$('<li>').addClass('buddy').text(x).appendTo(list);
  });
  console.log(aside.children());
  // 4   Give each li tag a class of "buddy" and append them to 
  //       "ul#buddies".
  // 5.  Insert the aside tag as a child element of the secion.land 
  //     representing "Rivendell."
  aside.appendTo("article:contains('Rivendell')");
}

// test this in the console (watch the HTML, though) by running:
makeBuddies();


//Beautiful Stranger

var beautifulStranger = function() {
  // 1.  Find the li.buddy representing "Strider".
  var strider = $("li:contains('Strider')");
  // 2.  Change the "Strider" text to "Aragorn" and make its 
  //     color green.
  strider.text('Aragorn').css('color','green');
}

// test this in the console (watch the HTML, though) by running:
beautifulStranger();


var leaveTheShire = function() {
  // 1.  "Assemble the Hobbits" and move them (as a list) to Rivendell.
  $("#hobbits").appendTo("article:contains('Rivendell')");
}

// test this in the console (watch the HTML, though) by running:
leaveTheShire();