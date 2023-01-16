//  Recursion is a problem solving technique where the solution depends on solutions to smaller instances of the same problem
// It is when a function calls itself

// Tips for recursive solutions
// Figure out how to break down the problem into smaller versions of the same problem

function recursiveFibonacci(n) {
	if (n < 2) {
		return n;
	}
	return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}
// console.log(recursiveFibonacci(0)); // 0
// console.log(recursiveFibonacci(2)); // 1
// console.log(recursiveFibonacci(5)); // 5
// console.log(recursiveFibonacci(6)); // 8
// console.log(recursiveFibonacci(7)); // 13

// Question
// Given an integer 'n', find the factorial of that integer

// The factorial of a non-negative integer 'n', denoted n!, is the product of all positive integers less than or equal to 'n'

// Solution ===> n! = n * (n -1)!

function recursiveFactorial(n) {
	if (n === 0) {
		return 1;
	}
	return n * recursiveFactorial(n - 1);
}
console.log(recursiveFactorial(0));
console.log(recursiveFactorial(1));
console.log(recursiveFactorial(5)); // 120

// Linear time complexity Big-O - O(n)
