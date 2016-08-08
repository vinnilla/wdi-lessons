// 1. require mongoose
var mongoose = require('mongoose')

// 2. define embedded schema
var addressSchema = new mongoose.Schema({
    street: String, 
    city: String,
    state: String,
    zip: Number
}) 

// 3. define main schema and include embedded schema
var userSchema = new mongoose.Schema({ 
    name: String,
    addresses: [addressSchema]
})

// 4. create model
var User = mongoose.model("User", userSchema)
// 5. export model
module.exports = User