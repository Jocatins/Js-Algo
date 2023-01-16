// Question
// Give an integer 'n', find the factorial of that integer

// the factorial of a non-negative integer 'n', denoted n!, is the product of all positive integers less than or equal to 'n'

function factorial(n) {
	let result = 1;
	for (let i = 2; i <= n; i++) {
		result = result * i;
	}
	return result;
}
console.log(factorial(5));

// Big-O = O(n)
// liner time complexity
