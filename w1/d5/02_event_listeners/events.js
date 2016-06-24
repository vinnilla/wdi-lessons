var h1Tag = document.querySelector('h1');

var handleClick = function(event) {
	console.log('clicked');
	console.log(event);
};

h1Tag.addEventListener('click', handleClick);

var date = document.querySelector('span');

var dbleClick = function(event) {
	console.log('double clicked')
	//TODO change span text to 2017
}

date.addEventListener('dblclick', dbleClick);

var numbers = document.querySelector('.numbers');
numbers.addEventListener('click', function(event) {
  console.log(event.target);
  console.log(event.currentTarget);
});