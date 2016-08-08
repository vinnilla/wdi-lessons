var fs = require('fs');

var file = process.argv[2]

var buf = fs.readFileSync(file)

var str = buf.toString()

var arr = str.split('\n')

console.log(arr.length-1)