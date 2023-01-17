// get vowels in a string
function getVowels(sentence) {
	// check if there are vowels, ignoring the case
	// return the number of vowels
	return sentence.match(/[aeiou]/gi) ? sentence.match(/[aeiou]/gi).length : 0;
}
// console.log(getVowels("I really need "));

function getVowels1(sentence) {
	// initialize a variable that will count vowels
	let vowelsCount = 0;
	for (let char of sentence) {
		if (/[aeiou]/gi.test(char)) {
			// add one variable above if char is a vowel
			vowelsCount++;
		}
	}
	return vowelsCount;
}
console.log(getVowels1("I really need "));
