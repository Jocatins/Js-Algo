// from nos 1 - 15 indicate even and odd nos

function printNos(l, r) {}
for (let i = 0; i <= 15; i++) {
	if (i == 0) {
		console.log(i, "even no");
	} else if (i % 2 == 0) {
		console.log(i, "even no");
	} else {
		console.log(i, "odd no");
	}
}
// ====How to Loop Through an Array to Check for Odd and Even Numbers====>
var numbers = [1, 4, 44, 64, 55, 24, 32, 55, 19, 17, 74, 22, 23];
let evenNumbers = [];
let oddNumbers = [];

for (let i = 0; i < numbers.length; i++) {
	// console.log(`num of length - ${numbers} i: ${i}`);
	if (numbers[i] % 2 != 1) {
		// the modules % of 2 is not 1. even numbers have a % of 0
		evenNumbers.push(numbers[i]);
	}
	oddNumbers.push(numbers[i]);
}
// console.log("These are even nos", evenNumbers);
// console.log("These are odd nos", oddNumbers);
