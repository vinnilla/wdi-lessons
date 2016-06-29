# Iterating and using callbacks

Read through the following documentation then answer the following:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

1. What parameters does `map` take?

Given the following array use `map` to double each number

```
var numbers = [1, 2, 3, 5, 6, 7, 8, 9];
```
console.log(numbers.map(function(num) {
	return num*2
}));

//filter even

numbers.reduce(function(num) {
	if (num%2 ==0) {
		return true;
	}
	else {
		return false;
	}
}

}
})

# Resources 
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
