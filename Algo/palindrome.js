// Palindrome example

let letters = [];

let word = "titan";

let reversedString = "";

for (let i = 0; i < word.length; i++) {
	// push the letters of word into the stack
	letters.push(word[i]);
}
for (let i = 0; i < word.length; i++) {
	// pop of the stack in reversed order .pop reverses the word
	reversedString += letters.pop();
	// console.log(reversedString);
}
if (reversedString === word) {
	return console.log("this is a palindrome");
} else return console.log("This is not a palindrome");
