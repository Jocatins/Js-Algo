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
	//	console.log("i times--", i);
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
	// console.log("break of i", i);
}

// =================  How to Display the Sum of Natural Numbers==
let sum = 0;
for (let i = 1; i <= 3; i++) {
	sum += i;
}
// console.log("The sum of 1 to 3 is:--", sum); // result----> 6

let sumOfNat = 0;
let nth = 100;

for (let i = 1; i <= nth; i++) {
	sumOfNat += i;
}
// console.log("sum of natural nos 1 - 100 - ", sumOfNat);

let sumOfNat1 = 0;
let kth = 100;

for (let i = kth; i >= 1; i--) {
	sumOfNat1 += i;
}
//console.log("sum of natural nos 1 - 100 - negative depreciation -", sumOfNat1);

// ======How to Perform Infinite Loops with a For Loop===========
for (let i = 1; i > 0; i++) {
	// break infinite loop once i = 4
	if (i == 4) {
		break;
	}
	//	console.log(i);
}

// How to Loop Through an Array of Numbers to Get the Maximum and Minimum Number=>

// ======= max number ==================>
var numbers = [1, 400, 44, 64, 55, 24, 32, 598, 55, 19, 17, 74, 842, 22, 23];

let maxNumber = 0;

for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] > maxNumber) {
		//	console.log(`numbers ${numbers[i]}`);
		maxNumber = numbers[i];
	}
}
console.log("max num", maxNumber);

// =============min number ================>
var numbers = [4, 44, 64, 55, 24, 32, 55, 19, 17, 74, 22, 23];
let min = numbers[0];

for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] < min) min = numbers[i];
}
//console.log("min num", min);

// =========Display Numbers from 1 to 5 ==========>

let n = 5;
for (let i = 0; i < n; i++) {
	//	console.log("Display text 5 times");
}
