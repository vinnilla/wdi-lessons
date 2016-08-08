var Game = require('../models/game');

function get(req, res, next) {
	Game.findOne({ _id: req.params.id}, function(err, game) {
		if (err) console.log(err)
		res.json(game);
	})
}

function index(req, res) {
	Game.find(function(err, games) {
		if (err) console.log(err)
		res.json(games);
	})
}

function create(req, res) {
	var game = req.body;
	Game.create(game, function (err, game) {
		if (err) console.log(err)
		res.json(game);
	})
}

function update(req, res) {
	var game = req.body;
	Game.findOneAndUpdate({_id: req.params.id}, game, function(err, oldGame) {
		if (err) console.log(err)
		res.json(game);
	})
}

function destroy(req, res) {
	Game.findOneAndRemove({_id: req.params.id}, function(err, game) {
		if (err) console.log(err)
		res.json({msg: "Successfully deleted game " + req.params.id})
	})
}

module.exports = {
	get: get,
	index: index,
	create: create,
	update: update,
	destroy: destroy
}