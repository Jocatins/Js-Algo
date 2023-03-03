// Write a function that takes an array of integers and returns the sum of all the even
// numbers in the array.

function sumOfEvenNos(arr) {
	let sum = 0;
	for (let i = 0; i <= arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sum += arr[i];
		}
	}
	return sum;
}
// console.log(sumOfEvenNos([3, 2, 1, 3, 4, 6, 8]));

// Write a function that takes an array of integers and returns the largest number in the array.

function largestNo(arr) {
	let maxNo = 0;
	for (let i = 0; i <= arr.length; i++) {
		if (arr[i] > maxNo) {
			maxNo = arr[i];
		}
	}
	return maxNo;
}
// console.log(largestNo([3, 2, 1, 3, 4, 6, 8]));

// Write a function that takes a string as input and returns the reverse of that string.

function reverseStr(str) {
	return str.split("").reverse().join("");
}

function revStr(str) {
	let revWord = "";
	for (let i = str.length - 1; i >= 0; i--) {
		revWord += str[i];
	}
	return revWord;
}

// Write a function that takes two arrays as input and returns a new array that contains only
// the common elements between the two arrays.

function findCommonElements(arr1, arr2) {
	let common = [];
	for (let i = 0; i < arr1.length; i++) {
		if (arr2.indexOf(arr1[i]) !== -1 && common.indexOf(arr1[i]) === -1) {
			common.push(arr1[i]);
		}
	}
	return common;
}
// console.log(findCommonElements([3, 2, 1, 3, 4, 6, 8], [3, 2, 1, 0]));

// Write a function that takes a string as input and returns true if it's a palindrome
// (reads the same backward as forward), and false otherwise.

function isPalindrome(str) {
	let reverseStr = "";
	for (let i = str.length - 1; i >= 0; i--) {
		reverseStr += str[i];
	}
	return str === reverseStr;
}
//console.log(isPalindrome("madam"));

// Write a function that takes an integer as input and returns the factorial of that integer.
function factorial(num) {
	let result = 1;
	for (let i = 2; i <= num; i++) {
		result *= i;
	}
	return result;
}
// console.log(factorial(5));

// Write a function that takes an array of integers and returns a new array with all the duplicates removed.
function removeDuplicates(arr) {
	let result = [];
	for (let i = 0; i < arr.length; i++) {
		if (result.indexOf(arr[i]) === -1) {
			result.push(arr[i]);
		}
	}
	return result;
}
console.log(removeDuplicates([3, "3", 3, 5, 1, 5, 7, 2, "3"]));
