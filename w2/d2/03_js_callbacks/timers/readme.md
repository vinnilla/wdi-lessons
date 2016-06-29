# Timers

![:image](https://upload.wikimedia.org/wikipedia/commons/e/ec/Down_the_Rabbit_Hole.png)

Invoke a function after a certain amount of time

```js
window.setTimeout(callback, timeout);
```

Invoke a function at an interval

```
window.setInterval(callback, interval);
```

When invoked these return references to the timer ID's. These are __useful__
incase we want to cancel the timers.  It's best to assign them to variables so
we can use them later.

```js
var timeoutId = window.setTimeout(callback, timeout);
var intervalId = window.setInterval(callback, interval);
```

Then we can cancel the timers like so:

```js
window.clearTimeout(timeoutId);
window.clearInterval(intervalId);
```

# Activity

- Add a stop button to `index.html` 
- Use an event listener to cancel the countdown
