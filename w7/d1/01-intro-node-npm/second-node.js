// requiring a built-in module
var fs = require('fs')
console.log(fs.readdirSync('.'))

// requiring a custom module, not the ./
var firstNode= require('./first-node');
console.log(firstNode.myNumber);  // outputs 123

// first-node also exported a sayHi function
firstNode.sayHi()
