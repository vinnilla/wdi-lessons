var express = require('express');
var router = express.Router();
var animalsController = require('../controllers/animals_controllers');

// CRUD routes
router.get('/animal/:id', animalsController.get)
router.get('/animals', animalsController.index)
router.post('/animals', animalsController.create)
router.put('/animal/:id', animalsController.update)
router.delete('/animal/:id', animalsController.destroy)

module.exports = router;
