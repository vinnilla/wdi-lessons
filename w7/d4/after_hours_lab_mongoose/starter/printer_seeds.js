var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/sbc_db");

// Make the Coffee Mug model!
var Printer = mongoose.model(
  "Printer", 
  // Create your schema here!
  new mongoose.Schema({
    color: Boolean,
    purchased: Date,
    ink: Number,
    model_number: Number,
    scanner: Boolean,
    hi_res_photo: Boolean,
    ink_lifespan: Number,
    since_ink_change: Number
  })
);

console.log("Creating printers...");

// First: we clean out the DB!
Printer.remove({}, function(err) {

  // Second: create the printers!
  Printer.create([
    // Add 5 printers!
      {
        color: true,
        purchased: new Date('January 20 1994'),
        ink: 87,
        model_number: 1510,
        scanner: true,
        hi_res_photo: true,
        ink_lifespan: 6,
        since_ink_change: 2
      }
      
    ], function(err, printers) {

      // below, we're printing out completion!
      if (err) console.log(err);
      console.log(`The database now has ${printers.length} printers!`);

      // … and closing the door!
      mongoose.connection.close();
  });
});