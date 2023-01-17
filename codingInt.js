// Checking whether a word is a palindrome

function isPalindrome(str) {
	return str.split("").reverse().join("") === str;
}
function isPalindrome1(str) {
	// split the string into an array
	// use every to process every char with its index
	return str.split("").every((char, i) => {
		//compare outer elements then inner,
		//all the way to next element until end of array is reached
		return char === str[str.length - i - 1];
	});
}
console.log(isPalindrome1("ede"));

// Write a function that will return min and max number in array

function getMinMax(arr) {
	return {
		min: Math.min(...arr),
		max: Math.max(...arr),
	};
}
console.log(getMinMax([1, 2, 3, 1, 2, 3, 4]));

function getMinMax1(arr) {
	// sort the array in ascending order
	const sortedArray = arr.sort((a, b) => a - b);

	return {
		// the first one in the sorted arr will be the min
		min: sortedArray[0],
		//the last elt will be the max
		max: sortedArray[sortedArray.length - 1],
	};
}

function getMinMax2(arr) {
	// create two variable pointing to the first array
	let min = arr[0];
	let max = arr[0];

	//iterate on the arr
	for (let current of arr) {
		if (current > max) {
			// assign current element if it is greater than max
			max = current;
		}
		if (current < min) {
			min = current;
		}
	}
	return {
		min,
		max,
	};
}
