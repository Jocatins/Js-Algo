//*********** * JavaScript while Loop**************//
// while (condition) {
// 	// body of loop
// }

// the while loop evaluates the condition inside the parenthesis()
//If the condition is true, the code inside the loop is executed
// the process continues till the condition is false

// ***********Display Numbers from 1 to 5*********///

let n = 5;
let i = 1;
while (i < n) {
	console.log("while-loop", i);
	i += 1;
}

// ---------Find the Sum of Positive Numbers Only-------------------
let sumNum = 0;
// to take the input from the user
//let input = parseInt(prompt("Enter a positive number:"));

// while (input >= 0) {
// 	// add positive numbers
// 	sumNum += input;
// 	// take input again if the number is positive
// 	// parseInt is used because prompt takes in the number as a string and behaves like a string
// 	// for e.g '2' + '3' = '23'.
// 	//parseInt converts a numeric string to a number
// 		input = parseInt(prompt("Enter a positive number: "));
// 	// The while loop continues until the user enters a negative number.
// }
// display the sum
//console.log(`The sum is ${sumNum}`);

// *************JavaScript do...while Loop **********************
// ===========Display Numbers from 1 to 5 ============ //
let i1 = 1;
const na = 5;

do {
	console.log("do-while loop", i1);
	i1++;
} while (i1 <= na);
