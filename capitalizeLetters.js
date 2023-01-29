function capitalize(sentence) {
	// split into array
	// capitalize the first word
	// join all elements by space
	return sentence
		.split(" ")
		.map((word) => word[0].toUpperCase() + word.slice(1))
		.join(" ");
}

// function capitalize1(str) {
// 	let firstLetter = str.slice(0, 1);
// 	return firstLetter.toUpperCase() + str;
// }
// console.log(capitalize1("titan"));

arr = [1, 2, 3, 4, 5];
k = input();

function findNumber(arr, k) {
	if (k in arr) return "YES";
	{
	}
	{
		return "NO";
	}
}
console.log(findNumber(arr, k));
