//EASY

//1. turn array into string
function arrayToString(numbers) {
	return numbers.join('');	
}
console.log(arrayToString([3,4,5,2,3,5]));

//2. esreveR
function eserver(reverseMe) {
	// var string= '';
	// for (var i=0; i<reverseMe.length; i++) {
	// 	//add each individual letter to string, starting from the end
	// 	string += reverseMe.substring(reverseMe.length-1-i,reverseMe.length-i);
	// }
	// return string
	var array = reverseMe.split('');
	array = array.reverse();
	return array.join('');
}
console.log(eserver('hello!'));

//3. Alphabetize
function alphabetize(words) {
	var str = words.sort();
	//custom comparison function that is case insensitive
	function case_insensitive_comp(a,b) {
		return a.toLowerCase().localeCompare(b.toLowerCase());
	}
	return str.sort(case_insensitive_comp);
}
console.log(alphabetize(['Carl Weathers','apple','Zardoz','carrot']));

//4. Is it Even?
function even(n) {
	//check type (if float)
	if (n%1 != 0) {
		return false;
	}
	// else working with int
	else {
		if (n%2 == 0) {
			return true;
		}
		else {
			return false;
		}
	}
}
console.log(even(-2));

//5. Bug: Why can't I push my object into an array?
items = [];
items.push({a: 'b', c: 'd'}); //missing parenthesis around the object

//6. Love Letters
function greet(name) {
	if (name == 'Robin Hood') {
		return "Hi papi! :^*";
	}
	else {
		return "Hello " + name + '.';
	}
}
console.log(greet('Robin Hood'));
console.log(greet('Burt Reynolds'));

//7. Sum it Up
function sumItUp(num) {
	var sum = 0;
	for (var i=1; i<=num; i++) {
		sum += i;
	}
	return sum;
}
console.log(sumItUp(2));

//8. All in the Family
function allPets(kittens, puppies) {
	var string = kittens.join() + ',' + puppies.join();
	return string.split(',');
}
console.log(allPets(['Kettle', 'Mr.PurrPurr'],['Spot','Frank','Handsome']));

// MEDIUM //

//9. Hugs
function hugs(inNeedOfHugs) {
	// //tried mapping but output was unfavorable
	// var array = inNeedOfHugs.map(x => '('+x+')');

	// var string = '(' + inNeedOfHugs.join(')(') + ')'; 
	// return string;

	var string = '';
	inNeedOfHugs.forEach(function(x) {
		if (typeof x == 'string') {
			string += "('" + x + "')";
		}
		else {
			string += '(' + x + ')';
		}
	})
	return string;
}
console.log(hugs([3,7,'2',4]));

//10. Vowelator
function vowelator(string) {
	//convert string into array of chars
	var array = string.split('');
	//iterate through the array to find lowecase vowels
	for (var i=0; i<array.length; i++) {
		if (array[i] == 'a' || array[i] == 'e' || array[i] == 'i' || array[i] == 'o' || array[i] == 'u') {
			array.splice(i,1);
			//subtract 1 from i so that the next letter (which was just moved back one index) is also checked
			i -= 1;
		}
 	}
 	return array.join('');
}
console.log(vowelator('Marcus'));
console.log(vowelator('apple'));
console.log(vowelator('Antwoord'));

//11. Middle Man
function middleMan(arr) {
	//test for even
	if (arr.length%2 == 0) {
		var index = arr.length/2 - 1;
	}
	else {
		var index = Math.floor(arr.length/2);	
	}
	var array = [];
	array.push(arr[index]);
	array.push(index);
	return array;
}
console.log(middleMan([4,'hello',false]));
console.log(middleMan([1,2,3,4,true,'5','Carl Weathers', false, 3293, 'uh-oh']));

//12. Repeater
function repeater(str, n) {
	var string='';
	for (var i=0; i<n; i++) {
		string+=str;
	}
	return string;
}
console.log(repeater('Hi',2));

//13. Sum an Array of Numbers
function sum(array) {
	var sum=0;
	array.forEach(function(x) {
		sum+=x;
	})
	return sum;
}
console.log(sum([4,7,8,9,15,43]));

//14. Add Length to Strings
function addLength(str) {
	var array = str.split(' ');
	for (var i=0; i<array.length; i++) {
		array[i] = array[i] + ' ' + array[i].length;
	}
	return array;
}
console.log(addLength('apple ban'));
console.log(addLength('you will win'));

//15. Gimme the Max
function max(arr) {
	var largest = 0;
	for (var i=0; i<arr.length; i++) {
		//convert to number
		var temp = Number(arr[i]);
		//check for non numeric entry
		if (!temp) {
			return NaN
		}
		else {
			//check if this number is larger that previous largest
			if (temp > largest) {
				largest = temp;
			}
		}
	}
	return largest;
}
console.log(max([2,5,1,3]));
console.log(max([2,'5',1,3]));
console.log(max([2,5,1,'ab']));

// HARD //

//16. Partial Word Searching
function wordSearch(query, arrayOfStrings) {
	var array = [];
	//iterate through the array
	for (var i=0; i<arrayOfStrings.length; i++) {
		//convert array item to lowercase string and search for query
		if (arrayOfStrings[i].toString().toLowerCase().search(query.toLowerCase()) > -1 ) {
			array.push(arrayOfStrings[i]);
		}
	}
	return array;
}
console.log(wordSearch("me", ["home", "milk", "Mercury", "fish"]));
console.log(wordSearch("fix", ["home", "milk", "Mercury", "fish"]));

//17. Mathematical Callback
function processArray(array, callback) {
	for (var i=0; i<array.length; i++) {
		array[i] = callback(array[i]);
	}
	return array;
}
var myArray = [4,8,2,7,5];
function test(a) {
	return a*2;
};
console.log(processArray(myArray,test));

//18. Sum of Largest Pair in Array
function largestPairSums(arr){
	var largest=0;
	var secondLargest=0;
	for (var i=0; i<arr.length; i++) {
		if (arr[i] > largest){
			//move largest value to secondLargest
			secondLargest = largest;
			//update largest with new largest
			largest = arr[i];
		}
		else if (arr[i] > secondLargest) {
			secondLargest = arr[i];
		}
		//console.log(arr[i] + ' ' + largest + ' ' + secondLargest);
	}
	return largest + secondLargest;
}
console.log(largestPairSums([10,14,2,23,19]));
console.log(largestPairSums([99,2,2,23,19]));

//19. Power of Two
function powerOfTwo(n) {
	var test = 1;
	while (test < n) {
		if (Math.pow(test,2) == n) {
			return true;
		}
		test++;
	} 
	return false;
}
console.log(powerOfTwo(4096));
console.log(powerOfTwo(375));

//20. Return Unused Digits
function unusedDigits(numbers) {
	var string = '';
	//convert array into string
	var array = numbers.join('')
	//iterate through 0-9
	for (var i=0; i<10; i++) {
		//store test value and reset each time it loops
		var test = true;
		//iterate through the array
		for (var j=0; j<array.length; j++) {
			if (array[j] == i) {
				//if equal, change test to = 1
				test = false;
			}
		}
		//if test == true, match was not found
		if (test) {
			string += i;
		}
	}
	return string;
}
console.log(unusedDigits([12, 34, 56, 78]));
console.log(unusedDigits([2015, 8, 26]));

// VERY HARD //

//21. Valid Braces
function validBraces(stringOfBraces) {
	//convert string into array
	var array = stringOfBraces.split('');
	//function that searches array for matching end brace
	function searchForPartner(brace, start) {
		for (var i=start; i<array.length; i++) {
			if (array[i] == brace) {
				return true;
			}
		}
		return false;
	}

	//keep track of how many brackets have been opened; 1=open, 2=close
	var tracker = [];

	//iterate through array
	for (var i=0; i<array.length; i++) {
		//test if there is matching end
		//test for square bracket
		if (array[i] == '[') {
			if (!searchForPartner(']',i)) {
				return false;
			}
			tracker.push(1);
		}
		//test for curlies
		else if (array[i] == '{') {
			if (!searchForPartner('}',i)) {
				return false;
			}
			tracker.push(1);
		}
		//test for parentheses
		else if (array[i] == '(') {
			if (!searchForPartner(')',i)) {
				return false;
			}
			tracker.push(1);
		}
		//test most nested pair
		else if (tracker[i-1]==1) {
			tracker.push(2);
			//test square
			if (array[i] == ']' && array[i-1] != '['){
				return false;
			}
			//test curlies
			else if (array[i]=='}' && array[i-1]!='{'){
				return false;
			}
			//test parentheses
			else if (array[i]==')'&&array[i-1]!='('){
				return false;
			}
		}
		else{
			tracker.push(2);
		}
	}
	return true;
}
console.log(validBraces('(){}[]'));
console.log(validBraces('([{}])'));
console.log(validBraces('(}'));
console.log(validBraces('[(])'));
console.log(validBraces('[({})](]'));
console.log(validBraces('({[]({})})'));
console.log(validBraces('({[]})({)}'));

//22. Alternating Loops
function combine() {
	var combination = [];
	//find longest array
	var longest = 0;
	for (var a=0; a<arguments.length; a++) {
		if (arguments[a].length > longest) {
			longest = arguments[a].length;
		}
	}
	//loop long enough to go through the longest array
	for (var i=0; i<longest; i++) {
		//iterate through again to get a set of values
		for (var j=0; j<arguments.length; j++) {
			//test for undefined -- only push if there is a value
			if (arguments[j][i]!=undefined){
				combination.push(arguments[j][i])
			}
		}
		
	}
	return combination;
}
console.log(combine(['a', 'b', 'c'], [1, 2, 3]));
console.log(combine(['a', 'b', 'c'], [1, 2, 3, 4, 5]));
console.log(combine(['a', 'b', 'c'], [1, 2, 3, 4, 5], [6, 7], [8]));

//4 hours to complete :(