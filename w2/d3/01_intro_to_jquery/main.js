console.log('hello from main.js');

//console.log all li
var $li = $('li');
$li.each(function (index) {
	//this will refer to the element
	console.log('Index: ' + index + ' and Element: ' + $(this).text());
});

// $('ul').html() //get a value and return it
// $('ul').html('<p>ok</p>') //set a value and return jQuery object

//.css
//arguments: propertyname(string), propertyvalue(string, num)
//loop through lis and set all even lis backgrounds to a color of your choice
$li.each(function(index) {
	//test odd index to find even lis
	if (index%2 == 0) {
		$(this).css('background-color', 'rgba(0, 100, 150, 0.5)');
	}
})