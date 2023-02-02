// Add elements to the end of an array using concat

function nonMutatingPush(original, newItem) {
	return original.concat(newItem);
}

var first = [1, 2, 3];
var second = [4, 5];

const array = nonMutatingPush(first, second);

console.log(array);
