// ========Display Text Multiple Times ============//
// -------------------------------------------------------------------------

for (let i = 0; i < 3; i++) {
	// 1st -> i = 0 as long as i < 3, the loop runs, i = 3 is a false condition so it is terminated at 3
	// counting down to 2, 1 and 0
	let name = "Owen Philips";
	// console.log("My name is " + name);
}

// ======Display a Sequence of Numbers with a For Loop======/
// -------------------------------------------------------------------------

for (let i = 2; i <= 5; i++) {
	// 1st -> i = 2; 2 will be printed on the console because it passes the condition
	// and i is increased to 3, 3 passes the condition and i is increased to 4
	// the loop is terminated at 6
	//	console.log(i);
}
// =========Display a Sequence of Even Numbers===========//
// --------------------------------------------------------------------------------->

for (let i = 2; i <= 10; i += 2) {
	// 1st i =2 is the init expression,  2 will be printed, then i will be increased to 4
	// 2nd 4 will be printed, and i will be increased to 6 e.t.c
	//console.log(i);
}
// to print odd numbers the initial expression will be changed to [let i = 1]

//================ How to Break a For Loop Operation ========
// --------------------------------------------------------------------------------->
for (let i = 1; i <= 10; i++) {
	if (i == 5) {
		break;
	}
	//	console.log(i);
}

// =================  How to Display the Sum of Natural Numbers==
let sum = 0;
for (let i = 1; i <= 3; i++) {
	sum += i;
}
// console.log("The sum of 1 to 3 is:--", sum); // result----> 6

// ======How to Perform Infinite Loops with a For Loop===========
for (let i = 1; i > 0; i++) {
	// break infinite loop once i = 4
	if (i == 4) {
		break;
	}
	console.log(i);
}
// ====How to Loop Through an Array to Check for Odd and Even Numbers====>
var numbers = [1, 4, 44, 64, 55, 24, 32, 55, 19, 17, 74, 22, 23];
let evenNumbers = [];
let oddNumbers = [];

for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] % 2 != 1) {
		// the modules % of 2 is not 1. even numbers have a % of 0
		evenNumbers.push(numbers[i]);
	} else {
		oddNumbers.push(numbers[i]);
	}
}
console.log("These are even nos", evenNumbers);
console.log("These are odd nos", oddNumbers);

// How to Loop Through an Array of Numbers to Get the Maximum and Minimum Number=>

// ======= max number ==================>
var numbers = [1, 4, 44, 64, 55, 24, 32, 55, 19, 17, 74, 22, 23];

let maxNumber = 0;

for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] > maxNumber) {
		maxNumber = numbers[i];
	}
}
console.log("max num", maxNumber);

// =============min number ================>
var numbers = [4, 44, 64, 55, 24, 32, 55, 19, 17, 74, 22, 23];
let min = numbers[0];

for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] < min) {
		min = numbers[i];
	}
}
console.log("min num", min);
