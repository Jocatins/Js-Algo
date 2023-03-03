// ------------------- Loop Practice ----------------------->
// ***
// ---------------REVERSE STRING FUNCTIONS------------
// ***

// Global Var
var numbers = [1, 400, 44, 64, 55, 24, 32, 598, 55, 19, 17, 74, 842, 22, 23];

function newStr(str) {
	let newString = "";
	for (let i = str.length - 1; i >= 0; i--) {
		//	console.log(`i : ${i} str of i: ${str[i]}`);
		newString += str[i];
		//	console.log(`new string reversed ${i} : ${newString}`);
	}
}
newStr("price");

function newStr1(num) {
	let newString = 1;
	for (let i = 0; i <= num.length - 1; i++) {
		//	console.log(`i : ${i} str of i: ${num[i]}`);
		newString *= num[i];
		//	console.log(`new string reversed ${i} : ${newString}`);
	}
}
newStr1([[6, 7, 8]]);

// ************ Factorize *******************//

function factorize(num) {
	let product = 1;
	for (i = 1; i <= num; i++) {
		product *= i;
		//	console.log(`multiply product ${product} by i ${i}`);
	}
	return product;
}
// factorization of 3 is : 3 * 2 * 1
//console.log("factorization of num - ", factorize(0));

// *********** Longest Word Length **********//

function findLongestWordLength(str) {
	// take the string and convert it into an array of words
	let words = str.split(" ");
	// declare a variable to keep track of the max length
	let maxLength = 0;
	for (let i = 0; i < words.length; i++) {
		//	console.log(`words ${words} of i ${i}`);
		if (words[i].length > maxLength) {
			maxLength = words[i].length;
		}
	}
	//	return console.log(maxLength);
}
findLongestWordLength("find the longest word");

function sumAll(arr) {
	let product = 1;
	for (let i = 0; i < arr.length; i++) {
		//		console.log(`Sub array ${i}: ${arr[i]}`);
		const readItems = arr[i];
		for (let j = 0; j < arr[i].length; j++) {
			product -= readItems[j];
		}
	}
	//	return console.log("product", product);
}
sumAll([[1, 2, 3, 4, 5]]);

for (let i = 0; i < numbers.length; i++) {
	//console.log(numbers[i] * 2);
}

// const doubleOfNos = numbers.map((ni) => {
// 	return console.log(ni * 2);
// });

// function capitalize(str) {
// 	return str.charAt(0).toUpperCase() + str.slice(1);
// }

function printNos(n) {
	for (let i = 1; i <= 15; i++) {
		if (i % 2 == 0) {
			console.log(i, "even nos");
		} else {
			console.log(i, "odd nos");
		}
	}
}
console.log(printNos(15));
