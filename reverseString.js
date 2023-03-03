function reverseString(str) {
	return str.split("").reverse().join("");
}
// console.log(reverseString("titan"));

// Array forEach
function reverseString1(str) {
	// create a temporary variable
	let reversedString = "";
	// convert the string into an array
	// cycle and push each char to temp variable above one by one
	str.split("").forEach((char) => {
		//	console.log(`char ${char}`);
		reversedString = char + reversedString;
		//	console.log(`reversed-string ${reversedString}`);
	});
	return reversedString;
}
// console.log(reverseString1("titan"));
reverseString1("titan");

// Array reduce
function reverseString2(str) {
	// split the string
	// use reduce to reverse the string
	return str.split("").reduce((prev, curr) => curr + prev + "");
}
console.log(reverseString2("titan"));

function revStr(str) {
	let revWord = "";
	for (let i = str.length - 1; i >= 0; i--) {
		revWord += str[i];
	}
	return revWord;
}
console.log(revStr("titan"));
