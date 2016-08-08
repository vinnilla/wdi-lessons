var express = require('express');
var router = express.Router();

var gamesController = require('../controllers/games_controller')

// CRUD routes
router.get('/game/:id', gamesController.get);
router.get('/games', gamesController.index);
router.post('/games', gamesController.create);
router.put('/game/:id', gamesController.update);
router.delete('/game/:id', gamesController.destroy);

module.exports = router;