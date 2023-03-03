function findLongestWordLength(str) {
	let words = str.split(" ");

	let maxLength = 0;

	for (let i = 0; i < words.length; i++) {
		//	console.log(`this is ${i} and words.length ${words.length}`);
		if (words[i].length > maxLength) {
			maxLength = words[i].length;
		}
	}
	return maxLength;
}
console.log(findLongestWordLength("This is the longest word"));
