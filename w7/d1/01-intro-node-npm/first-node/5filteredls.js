var fs = require('fs');
var dir = process.argv[2];
var filter = process.argv[3];

fs.readdir(dir, function callback(err, list) {
	for (var i=0; i<list.length; i++) {
		if (list[i].search('.'+filter) != -1) {
			console.log(list[i]);
		}
	}
});