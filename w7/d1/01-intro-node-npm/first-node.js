function multiply (x,y) {
    return x*y
}

var n = multiply(5,8)

console.log(n)

module.exports.myNumber = 123;

// same as above
exports.myNumber = 123;

// add as many properties as you wish
exports.sayHi = function() { console.log('Hi'); };
