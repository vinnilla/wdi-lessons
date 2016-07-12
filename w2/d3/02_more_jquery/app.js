// $(document).ready(function() {

// 	$('.jumbotron').text('hello');

// });

$(function() {

	$('.jumbotron').text('hello');

	$('#addHome')
		.removeClass('btn-danger')
		.addClass('btn-success');

	//create DOM node
	var $btn = $('<button>')
		.text('click me')
		.addClass('btn-success');
	//append
	// $('body').append($btn);
	$btn.appendTo('body');

	//set attributes
	$('#zillowLink').attr('target', '_blank');
	$('img').attr('src','https://placekitten.com/810/100')

	//event listener
	$('#addHome').on('click', function(e) {
		console.log('button pressed', this);
	});

	$('#homes').on('click', 'button', function(e) {
		var $row = $(this).closest('tr');
		$row.fadeOut(1000, function() {
			$row.remove();
		});
	});

	// $('#homes').on('click', 'button', function(e) {
	// 	$(this).cloest('tr').remove();
	// } );

	//## Practice Challenge - Add New Homes

	//Now for a fun challenge. You've already seen everything you need to make this happen!

	// When the "Add Home" button is clicked:

	// 1. Takes a home out of an array of home objects (see below)
	// 2. Appends a row containing the data for the home to the table.

	// First, copy this array of new home data to your script:


	var newHomes = [
	  {address: "27569 Cedarwood Drive", sf: "2,535", bedrooms: 3, baths: 2.5, price: "$496,500"},
	  {address: "316 Annandale Drive", sf: "1,326", bedrooms: 4, baths: 2, price: "$275,000"},
	  {address: "251 Grandview Road", sf: "3,800", bedrooms: 3, baths: 2, price: "$699,900"},
	  {address: "28571 Manitoba", sf: "2,960", bedrooms: 4, baths: 3.5, price: "$775,000"}
	  ]

	$('#addHome').on('click', function(e) {
		//var object = newHomes[Math.random()*newHomes.length];
		var home = newHomes.pop();
		var $newHome = $('<tr>');
		var $newAddress = $('<td>').text(home.address).appendTo($newHome);
		var $newSF = $('<td>').text(home.sf).appendTo($newHome);
		var $newBedrooms = $('<td>').text(home.bedrooms).appendTo($newHome);
		var $newBaths = $('<td>').text(home.baths).appendTo($newHome);
		var $newPrice = $('<td>').text(home.price).appendTo($newHome);

		$newHome.appendTo('tbody');
	})




});