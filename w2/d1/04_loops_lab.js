// Execute this file by running node 04_loops_lab.js

// 1. Write a function that prints out the numbers from 50 to 100 by 5.
// Output: 
// 50 
// 55 
// 60 
// ...
function print5() {
	for (var i=50; i<=100; i+=5) {
		console.log(i);
	}
}
print5();


// 2. Write a function that calculates the sum of the numbers from 1 to 10
function sum1to10() {
	var sum=0;
	for (var i=1; i<=10; i++) {
		sum+=i;
	}
	return sum;
}
console.log('Sum of 1 to 10: ' + sum1to10());

// 3. Write a function that calculates the factorial of a number
function factorial(num) {
	var factorial = 1;
	for (var i=1; i<=num; i++) {
		factorial *= i; //factorial = factorial*i
	}
	return factorial;
}

console.log('Factorial: ' + factorial(5));


// 4. Write a function that prints an NxN checkboard pattern of 0s and 1s. 
// Example: grid(3)
// 010
// 101
// 010
function grid(num) {
	//iterate through each row
	var row = '';
	for (var i=0; i<num; i++) {
		//iterate through each column
		for (var j=0; j<num; j++) {
			if (i%2 == 0) {//evens for row, start with 0
				if (j%2 == 0) {//evens for column
					row += 0;
				}
				else {
					row += 1;
				}
			}
			else {//odds for row
				if (j%2 == 0) {
					row += 1;
				}
				else {
					row += 0;
				}
			}
		}

		console.log(row);
		row = '';//reset row

	}
}

grid(5);

// 5. Write a function that determines whether or not a number is prime. It should return true if the number is prime, false if it is not
function prime(num) {
	var test = true;
	for (var i=2; i<num; i++) {
		if (num%i == 0) {
			test = false;
		}
	}
	return test;
}

console.log('Prime: ' + prime(7));

// 6. If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.// The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.
function mult35(num) {
	var sum = 0;
	for (i=1; i<num; i++) {
		//find multiples of 3 and 5 first
		if (i%3 == 0 && i%5 == 0) {
			sum += i;
		}
		//find multiples of only 3
		else if (i%3 == 0) {
			sum += i;
		}
		//find multiples of only 5
		else if (i%5 ==0){
			sum += i;
		}
	}
	return sum;
}

console.log('Sum of multiples of 3 or 5 below 1000: ' + mult35(1000));

// 7. Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// By considering the terms in the Fibonacci sequence whose values do not exceed 100,000 , find the sum of the even-valued terms.

function evenFib(max) {
	var num1=1;
	var num2=2;
	var sum=0;
	var counter =0;
	var sequence= [1,2];
	while (sequence[sequence.length-1] < max) {
		var temp = num1+num2;
		//add temp to array
		sequence.push(temp);
		//update num1
		num1 = num2;
		//update num2
		num2 = temp;
		counter ++;
	}
	//iterate through sequence minus last value 
	for (var i=0; i<sequence.length-1;i++) {
		//test if even number
		if (sequence[i]%2 == 0) {
			sum+=sequence[i];
			//console.log(sequence[i]);
		}
	}
	console.log(counter);
	console.log(sequence);
	return sum
}

console.log('Sum of even fib sequence numbers less than 100000: ' + evenFib(100000));


// // Jesson's Solution
// function fibSum(max){
//   var fib=[1,2];
//   var current;
//   var fibFiltered;
//   for(var x = 0;(fib[fib.length-1]+fib[fib.length-2]) < max; x++){
//     fib.push(fib[fib.length-1]+fib[fib.length-2]);
//  } 
//   fibFiltered = fib.filter(n=>{if(n%2 == 0){return n;}});
//   console.log('total of even fibs ' + fibFiltered.reduce(function(sum,next){return sum + next;}));
// }
// fibSum(100000);```