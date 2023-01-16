// Give a natural number 'n', determine if the number is prime or not

function primeNumber(n) {
	if (n < 2) {
		return false;
	}
	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (n % i === 0) {
			return false;
		}
	}
	return true;
}
console.log(primeNumber(4));
console.log(primeNumber(1));
console.log(primeNumber(5));

// Big-O = O(sqrt(n))
// liner time complexity
