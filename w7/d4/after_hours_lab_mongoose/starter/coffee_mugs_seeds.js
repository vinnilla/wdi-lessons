var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/sbc_db");

// Make the Coffee Mug model!
var CoffeeMug = mongoose.model(
  "CoffeeMug", 
  // Create your schema here!
  new mongoose.Schema({
    color: String,
    material: String,
    volume: Number,
    handle: Boolean
  })
);

console.log("Creating mugs...");

// First: we clean out the DB!
CoffeeMug.remove({}, function(err) {

  // Second: create the mugs!
  CoffeeMug.create([
    // Add 5 mugs!
      {
        color: "Blue",
        material: "Clay",
        volume: 24,
        handle: true
      },
      {
        color: "Red",
        material: "Glass",
        volume: 12,
        handle: false
      },
      {
        color: "Black",
        material: "Glass",
        volume: 36,
        handle: true
      },
      {
        color: "White",
        material: 'Clay',
        volume: 12,
        handle: true
      },
      {
        color: "Green",
        materia: "Plastic",
        volume: 24,
        handle: false
      }
    ], function(err, mugs) {

      // below, we're printing out completion!
      if (err) console.log(err);
      console.log(`The database now has ${mugs.length} mugs!`);

      // … and closing the door!
      mongoose.connection.close();
  });
});

// Now from scratch with Printers and BusinessCards!
