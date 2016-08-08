// 1. Require Mongoose
var mongoose = require('mongoose')

// 2. Define a schema for the model
var animalSchema = new mongoose.Schema({
    name: {type:String, required:true},
    breed: {type:String, required:true},
    dob: Date,
    gender: {type:String, enum:['Male', 'Female']},
    family: {type:String, required:true},
    status: String
})

// 3. Add methods to the schema


// 4. create the model from the schema
var Animal = mongoose.model('Animal', animalSchema)

// 5. Export the model
module.exports = Animal