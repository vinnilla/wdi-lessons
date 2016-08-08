var fs = require('fs');

var file = process.argv[2]

fs.readFile(file, function read(err, buf) {
	var str = buf.toString()

	var arr = str.split('\n')

	console.log(arr.length-1)
});