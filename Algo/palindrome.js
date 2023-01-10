// Palindrome example

let letters = [];

let word = "racecar";

let reversedWord = "";

// push the letters of word into the stack
for (let i = 0; i < word.length; i++) {
	letters.push(word[i]);
}
// pop of the stack in reversed order .pop reverses the word
for (let i = 0; i < word.length; i++) {
	reversedWord += letters.pop();
	//	console.log("New-pop", newPop, i);
}
if (reversedWord === word) {
	console.log(word, "this is a palindrome");
} else {
	console.log("this is not a palindrome");
}
