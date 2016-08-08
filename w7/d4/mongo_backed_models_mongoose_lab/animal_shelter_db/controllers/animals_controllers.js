var Animal = require('../models/animal')

function get (req, res, next) {
	Animal.findOne({ _id: req.params.id }, function (err, animal) {
    if (err) console.log(err)
    res.json(animal)
  })
}

function index (req, res, next) {
	Animal.find(function (err, animals) {
    if (err) console.log(err)
    res.json(animals)
    // res.render('../views/index.ejs')
  })
}

function create (req, res, next) {
	var animal = req.body
  Animal.create(animal, function (err, animal) {
    if (err) console.log(err)
    res.json(animal)
  })
}

function update (req, res, next) {
	var animal = req.body
  Animal.findOneAndUpdate({ _id: req.params.id }, animal, function (err, oldAnimal) {
      if (err) console.log(err)
      res.json(animal)
  })
}

function destroy (req, res, next) {
	Animal.findOneAndRemove({ _id: req.params.id }, function (err) {
    if (err) console.log(err)
    res.json({ msg: "Successfully adopted animal " + req.params.id})
  })
}

module.exports = {
    get: get,
    index: index,
    create: create,
    update: update,
    destroy: destroy
}