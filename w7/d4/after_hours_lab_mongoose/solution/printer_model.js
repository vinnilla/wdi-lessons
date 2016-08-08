var mongoose = require("mongoose");

var Printer = mongoose.model(
  "Printer",
  {
    color:        Boolean,
    purchaseDate: Date,
    inkType:      String,
    modelNumber:  String,
    scanner:      Boolean,
    hiRes:        Boolean,
    inkVolume:    Number, // in mL!
    lastChanged:  Date
  }
);

module.exports = Printer;
