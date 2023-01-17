// Write a function that will return unique values from an array

//
function removeDuplicates(arr) {
	//pass the array to the Set
	// spread the set into an array
	return [...new Set(arr)];
}
// const array = ["🍎", "🍌", "🍎", "🍍", "🍌", "🍎", "🍇", "🍇", "🥥"];
// console.log(removeDuplicates(array));

function removeDuplicates1(array) {
	// create an object to store key value pairs
	const map = {};
	for (let char in array) {
		if (map[char]) {
			//add one if the char exists on map
			map[char]++;
		} else {
			// otherwise, since it is the first one the value is one
			map[char] = 1;
		}
	}
	// use Object.keys to get all the keys
	return Object.keys(map);
}
const array = ["🍎", "🍌", "🍎", "🍍", "🍌", "🍎", "🍇", "🍇", "🥥"];
console.log(removeDuplicates1(array));
// removeDuplicates1(array);
