var fs = require('fs');

module.exports = function (dir, filter, call) {
	fs.readdir(dir, function call(err, list) {
		if (err) {
			return callback(err);
		}
		array = []
		for (var i=0; i<list.length; i++) {
			if (list[i].search('.'+filter) != -1) {
				array.push(list[i]);
			}
		}
	});
	return array;
}