function capitalize(sentence) {
	// split into array
	// capitalize the first word
	// join all elements by space
	return sentence
		.split(" ")
		.map((word) => word[0].toUpperCase() + word.slice(1))
		.join(" ");
}
console.log(capitalize("titan"));

function capitalize1(str) {
	let firstLetter = str.slice(0, 1);
	console.log(firstLetter);
	return firstLetter.toUpperCase() + str;
}
console.log(capitalize1("titan"));

//capitalize the first letter?
function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log(capitalizeFirstLetter("foo")); // Foo
