// 1. Require mongoose
var mongoose = require('mongoose');

// 2. Define a schema for the model
var gameSchema = new mongoose.Schema({
  home: {
  	team: String,
  	score: Number
  },
  away: {
  	team: String,
  	score: Number
  },
  league: {type:String, required: true}
});

// 3. Add methods to the schema
gameSchema.methods.winner = function() {
	if (this.home.score > this.away.score) {
		return home.team
	}
	else {
		return away.team
	}
}

// 4. Create the model from the schema
var Game = mongoose.model('Game', gameSchema);

// 5. Export the model
module.exports = Game;