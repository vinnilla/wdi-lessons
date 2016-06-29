//selectors
var countdownTimer = document.querySelector('#countdown-timer');
var countdownStart = document.querySelector('#countdown-start');
var stopTimer = document.querySelector('#stop');
//container for timer
var timerId;
var counter = 10;

//adding event listener to button
countdownStart.addEventListener('click', function(event){
  if (!counter) {
  	counter = 10;
  }
  //reset the timer
  window.clearInterval(timerId);
  //creates the timer
  timerId = window.setInterval(function(){
    countdownTimer.textContent = counter--;
    //only when counter reaches 0
    if (!counter) {
      window.clearInterval(timerId);
    }
  }, 200)
});

//
stopTimer.addEventListener('click', function(event) {
	window.clearInterval(timerId);
});