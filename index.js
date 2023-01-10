// ---------------REVERSED STRING FUNCTIONS------------

function reverseString(str) {
	return str.split("").reverse().join("");
}
// console.log(reverseString("good bye"));
function reverseString1(str) {
	let reversedStr = "";
	// this for loop stores the last char of the string
	// starting at the last char of the string passed to the func,
	// you build a new string reversedStr from str
	for (let i = str.length - 1; i >= 0; i--) {
		// During each iteration of the for loop, reversedStr gets
		// concatenated with itself and the current char
		reversedStr += str[i];
	}
	// finally you return the value of reversedStr
	return reversedStr;
}
// console.log(reverseString1("khamen"));
// -----------------------------------------------------------------
//
//-------------------- FACTORIZE---------------------------------
function factorize(num) {
	let product = 1;
	for (let i = 2; i <= num; i++) {
		product *= i;
	}
	return product;
}
// function factorize1(num) {
// 	if (num == 0) {
// 		return 1;
// 	}
// 	return num * factorize(num - 2);
// }
// console.log(factorize1(6));
// --------------------------------------------------------

//====== LongestWordLength=============

function findLongestWordLength(str) {
	return Math.max(...str.split(" ").map((word) => word.length));
}
// console.log(
// 	findLongestWordLength("The quick brown fox jumped over the lazy dog")
// );
function findLongestWordLength1(str) {
	let words = str.split(" ");
	let maxLength = 0;
	//console.log(words);
	for (let i = 0; i < words.length; i++) {
		if (words[i].length > maxLength) {
			maxLength = words[i].length;
		}
	}
	return maxLength;
}
console.log(
	findLongestWordLength1("The quick brown fox jumped over the lazy dog")
);
// -------------------------------------------------------------------------
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
	(accumulator, currentValue) => accumulator - currentValue,
	initialValue
);

//console.log(sumWithInitial);
// =========================================>
// ============LARGEST OF FOUR ===================>
function largestOfFour(arr) {
	return arr.map(Function.apply.bind(Math.max, null));
}

function largestOfFour(arr) {
	let results = [];
	for (let i = 0; i < arr.length; i++) {
		let largestNumber = arr[i][0];
		for (let j = 0; j < arr[i].length; j++) {
			if (arr[i][j] > largestNumber) {
				arr[i][j] = largestNumber;
			}
		}
		results[i] = largestNumber;
	}
	return results;
}

// console.log(
// 	largestOfFour([
// 		[4, 5, 1, 3],
// 		[13, 27, 18, 26],
// 		[32, 35, 37, 39],
// 		[1000, 1001, 857, 1001],
// 		[1000, 67, 857, 45],
// 	])
// );

//============== SLICE METHOD==========//

let text = "Hello titans";
// slice the first 4 positions, taking away the 4th:
// result will be Hell
let result = text.slice(0, 4);
//console.log(result);

let text1 = "Hello titans";
// slices from position 3 to the end: result will be lo titans
let result1 = text.slice();
//console.log(result1);

// Question : Check if a string (first argument, str) ends with the given target string (second argument, target).

// SOLUTION 1
function confirmEnding(str, target) {
	return str.slice(str.length - target.length) == target;
}

//console.log(confirmEnding("this id is first", "first"));

// SOLUTION 2
function confirmEnding2(str, target) {
	// When a negative number is provided as a first parameter to slice()
	//, the offset is taken backwards from the end of the string
	return str.slice(-target.length) === target;
}
// SOLUTION 3
function confirmEnding3(str, target) {
	let reg = new RegExp(target + "$", "i");

	return reg.test(str);
}

// =====REPEAT STRING NUM OF TIMES
// Question : Repeat a given string str (first argument) for num times (second argument).
//  Return an empty string if num is not a positive number.
//  For the purpose of this challenge, do not use the built-in .repeat() method.

// SOLUTION1
function repeatStringNumTimes(str, num) {
	let repeatedWord = "";
	for (let i = 0; i < num; i++) {
		repeatedWord += str;
	}
	return repeatedWord;
}
//console.log(repeatStringNumTimes("yea", 3));

// console.log(1);

// setTimeout(function () {
// 	console.log(2);
// });
// Promise.resolve().then(function () {
// 	console.log(3);
// });
// console.log(4);

let obj = {
	initCount: 10,
};
function obj1() {
	obj.initCount += 1;
	return obj.initCount;
}

// ==============  CUSTOM HIGHER ORDER FUNCTION ==========

//Suppose we are asked to write a function that formats integers as currencies,
// including some customization of specifying the currency symbol and adding a decimal separator for the currency amount.
// We can write a higher-other function that takes the currency symbol and also the decimal separator.
//This same function would then format the value passed to it with the currency symbol and decimal operators.
// We would name our higher-order function formatCurrency.

const formatCurrency = function (currencySymbol, decimalSeparator) {
	return function (value) {
		const wholePart = Math.trunc(value / 100);
		let fractionalPart = value % 100;
		if (fractionalPart < 10) {
			fractionalPart = "0" + fractionalPart;
		}
		return `${currencySymbol}${wholePart}${decimalSeparator}${fractionalPart}`;
	};
};
const getLabel = formatCurrency("$", ".");

// console.log(getLabel(1998));

// ============ FACTS ABOUT HOC =================
//  * We don’t modify or mutate components. We create new ones.
//  * A HOC is used to compose components for code reuse.
//  * A HOC is a pure function. It has no side effects, returning only a new component.

const fc = (currencySymbol, decimalSeperator) => {
	return function (value) {};
};

//============= REPEAT A STRING

function repeatStringNumTimes(str, num) {
	// empty string variable is storing the repeated word
	let newString = "";
	// for loop is responsible for
	// repeating the code as many times as needed according to the num
	for (let i = 0; i < num; i++) {
		// then we add the string to the variable newString
		newString += str;
	}
	// at the end of the loop we return the variable for the repeated word
	return newString;
}
// console.log(repeatStringNumTimes("mode", -2));

function repeatStringNumTimes2(str, num) {
	if (num < -1) {
		return "";
	} else {
		return str + repeatStringNumTimes(str, num - 1);
	}
}
