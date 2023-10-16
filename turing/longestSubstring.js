function longestSubString(s) {
	// track the longest value
	let longestValue = 0;
	//  track the left index
	let leftIndex = 0;
	//  track the right index
	let rightIndex = 0;
	// create a hash map to track the chars
	const hashTable = {};

	// iterate over the string to track the chars
	// creating a generator
	const it = s[Symbol.iterator]();

	// create the variable that will receive the iterators
	let myVariables = it.next();

	console.log(myVariables);
}

console.log(longestSubString());
