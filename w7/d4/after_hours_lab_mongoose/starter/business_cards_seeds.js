var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/sbc_db");

// Make the Business Card model!
var Card = mongoose.model(
  "Business_Card", 
  // Create your schema here!
  new mongoose.Schema({
    name: String,
    position: String,
    number: String,
    email: String,
    website: String
  })
);

console.log("Creating business cards...");

// First: we clean out the DB!
Card.remove({}, function(err) {

  // Second: create the cards!
  Card.create([
    // Add 5 cards!
      {
        name: "Ben Dodson",
        position: "PHP Developer / Geek",
        number: "+44 7525 946037",
        email: "ben@bendodson.com",
        website: "http://bendodson.com/"
      },
      {
        name: "Austin",
        position: "Fashion",
        number: "1-888-504-1116",
        website: "rockdesign.com"
      },
      {
        name: "Panda Print + Design",
        number: "01937 585575",
        website: "pandaprint.co.uk"
      },
      {
        name: "Jane Skipro",
        position: "Ski & Snowboard Instructor, Certified Level 3 Alpine, Level 2 Snowboard",
        number: "(123) 456-7890",
        email: "jane@snowproportal.com",
        website: "www.snowproportal.com"
      }
      
    ], function(err, cards) {

      // below, we're printing out completion!
      if (err) console.log(err);
      console.log(`The database now has ${cards.length} business cards!`);

      // … and closing the door!
      mongoose.connection.close();
  });
});