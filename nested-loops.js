// ----------Nesting For Loops in JavaScript-------------------------//

function multiplyAll(arr) {
	let product = 1;
	// outer-loop
	for (let i = 0; i < arr.length; i++) {
		// to loop through each number in the sub-arrays
		// inner loop
		//	console.log(`Sub array ${i}: ${arr[i]}`);
		const subArray = arr[i];
		for (let j = 0; j < arr[i].length; j++) {
			console.log(`Element ${j}: ${arr[i][j]}`);
			//console.log(arr[i][j]);
			product *= subArray[j];
			//console.log(product);
		}
	}
	return console.log(product);
}

multiplyAll([
	[9, 7],
	[1, 1, 1],
	[1, 1, 1],
]);
