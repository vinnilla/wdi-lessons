var weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

module.exports.getWeekday = function(num) {
	if (num < 0 || num > 6) {
		return weekdays[1]
	}
	else {
		return weekdays[num]
	}
}