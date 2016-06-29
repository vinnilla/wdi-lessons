//Palidrome
function palidrome(word) {
	//set to lowercase
	var test = word.toLowerCase();
	//remove spaces
	test = test.replace(/ /g, '');
	//remove commas
	test = test.replace(/,/g,'');
	//remove period
	test = test.replace(/\./g,'');
	//remove exclamation point
	test = test.replace(/!/g,'');
	//remove question mark
	test = test.replace(/\?/g,'');

	for (var i=0; i<test.length; i++) {
		if (test.charAt(i) != test.charAt(test.length-i-1)) {
			return false;
		}
	}
	return true;
}
console.log(palidrome('A nut for a jar of tuna'));
console.log(palidrome('A car, a man, a maraca.'));
console.log(palidrome('A Santa dog lived as a devil God at NASA.'));
console.log(palidrome('dsafeawefdasfdsaf'));



//Combinations of a string
function combination(word) {
	var string = '';
	//first for loop iterates through each letter
	for (var i=0; i<word.length; i++) {
		//second for loop iterates through each possible combination starting with index i
		for (var j=i+1; j<word.length+1; j++) {//+1 because slice requires the index after the end
			//test for last character
			if (i==word.length-1) {
				string += word.slice(i,j);
			}
			else {
			//concat into variable
			string += word.slice(i,j) + ',';	
			}
		}
	}
	return string;
}
console.log(combination('dog'));
console.log(combination('doge'));



//Capitalize Words
function firstLetter(word) {
	//capitalize first letter
	word = word.charAt(0).toUpperCase() + word.substring(1);
	//search for space and capitalize letter follow space
	for (var i=0; i<word.length; i++) {
		if (word.charAt(i) == ' '){
			word = word.substring(0,i+1) + word.charAt(i+1).toUpperCase() + word.substring(i+2);
		}
	}
	return word;
}
console.log(firstLetter('this is fun'));
console.log(firstLetter('am i capitalized now?'));



//Second Largest and Smallest number
function find(numbers) {
	//container to store second largest and smallest number
	var num = [];
	//declare variables to store values
	var largest = 0;
	var secondLargest = 0;
	var smallest = Infinity;
	var secondSmallest = Infinity;

	for (var i=0; i<numbers.length; i++) {
		//find second largest
		if (numbers[i] > largest) {
			secondLargest = largest;
			largest = numbers[i];
		}
		else if (numbers[i] > secondLargest) {
			secondLargest = numbers[i];
		}

		//find second smallest
		if (numbers[i] < smallest) {
			secondSmallest = smallest;
			smallest = numbers[i];
		}
		else if (numbers[i] < secondSmallest) {
			secondSmallest = numbers[i];
		}
	}
	num.push(secondSmallest);
	num.push(secondLargest);

	return num;
}
console.log(find([1,2,3,4,5]));
console.log(find([88,94,22,66,1,3,101]));



//FizzBuzz
function fizzBuzz(end) {
	for (var i=1; i<=end; i++) {
		if (i%3==0 && i%5 ==0) {
			console.log(i + ' fizzbuzz');
		}
		else if (i%3==0) {
			console.log(i + ' fizz');
		}
		else if (i%5==0) {
			console.log(i + ' buzz');
		}
		else {
			//console.log(i);
		}
	}
}
fizzBuzz(100);