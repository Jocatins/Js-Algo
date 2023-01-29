// Get the character that is most commonly used in a string

function getMaxChar(str) {
	//create an object to track every char and its count
	const charMap = {};
	// this will compare count of char in later steps
	let max = 0;
	// the result of the char
	let maxChar = "";

	for (let char of str) {
		// increment char by one if char is already in the map
		if (charMap[char]) {
			charMap[char]++;
		} else {
			// create a key on map and assign one to it
			charMap[char] = 1;
		}
	}
	return charMap;
}
console.log(getMaxChar("oiuu"));
