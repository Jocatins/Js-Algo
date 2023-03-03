// Question
// Give an integer 'n', find the factorial of that integer

// the factorial of a non-negative integer 'n', denoted n!, is the product of all positive integers less than or equal to 'n'

// Big-O = O(n)
// liner time complexity

function factorize(x) {
	let product = 1;
	for (let i = 2; i <= x; i++) {
		console.log(`multiply product ${product} by i${i}`);
		product *= i;
	}
	return product;
}
console.log(factorize(5));
