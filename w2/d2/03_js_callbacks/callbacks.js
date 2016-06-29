//log to console argument 'hello from main.js'
console.log('hello from main.js');

//selectors (the signatures of document.querySelector)
//arguments are #name-input and #name-text
var nameInput = document.querySelector('#name-input');
var nameText = document.querySelector('#name-text');

//popup - argument 'Freeze!'
window.alert('Freeze!');

//update nameText with lover
nameText.textContent = 'lover';

//add event listener - on enter key release
nameInput.addEventListener('keyup', function(event){
	//enter key
  if (event.which === 13) {
  	//captures nameInput and updates nameText with the value
    nameText.textContent = nameInput.value;
  }
});
