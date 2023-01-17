// Write a function that will verify if string has balanced parenthesis

// Eg ---> isBalanced('()()(())') ==> true

function isBalanced(str) {
	// create an array to add and remove parenthesis
	const stack = [];

	for (let char of str) {
		//		console.log(`char ${char}`);
		// if it is an open parenthesis
		if (char === "(") {
			// add it to the array

			const newStack = stack.push(char);
			console.log(`stack array ${newStack} `);
		} else {
			// else remove the last item from the array
			const lastStackItem = stack.pop();
			// it is not balanced if the last item on the array is not an opening parenthesis
			console.log(`last stack item ${lastStackItem}`);
			if (lastStackItem !== "(") {
				return false;
			}
		}
	}
	// it is not balanced if the arr is not empty
	if (stack.length !== 0) return false;
}
// balanced parenthesis
console.log(isBalanced(""));
console.log(isBalanced("()"));
console.log(isBalanced("(())"));
console.log(isBalanced("()()(())"));

// not balanced parenthesis
console.log(isBalanced(" "));
console.log(isBalanced("("));
console.log(isBalanced(")"));
console.log(isBalanced(")()("));
console.log(isBalanced("(()))"));
