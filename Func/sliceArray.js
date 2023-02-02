// return part of an array using the slice method

//Use the slice method in the sliceArray function to return part of the anim
//array given the provided beginSlice and endSlice indices.
//The function should return an array.

function sliceArray(anim, beginSlice, endSlice) {
	return anim.slice(beginSlice, endSlice);
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant", "goat"];

console.log(sliceArray(inputAnim, 2, 5));

// [ 'Tiger', 'Zebra', 'Ant' ]
