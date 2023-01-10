// fizz buzz
// if no is divisible by 3 print fizz
// if no is divisible by 5 print buzz
// if no is divisible by 3 and 5 print buzz

let n = 100;

// for (let i = 1; i <= n; i++) {
// 	if (i % 3 == 0 && i % 5 == 0) {
// 		console.log("fizz-buzz");
// 	} else if (i % 5 == 0) {
// 		console.log("buzz");
// 	} else if (i % 3 == 0) {
// 		console.log("fizz");
// 	} else {
// 		console.log(i);
// 	}
// }
for (let j = 1; j <= 100; j++) {
	let out = "";
	if (j % 3 === 0) out += "fizz";
	if (j % 5 === 0) out += "buzz";
	if (j % 7 === 0) out += "Baz";

	console.log(out || j);
}

// time complexity ===> constant 0(1)

function fizzBuzz(n) {
	// Write your code here
	for (let i = 1; i <= n; i++) {
		if (i % 5 == 0 && i % 3 == 0) console.log("FizzBuzz");
		else if (i % 5 == 0) console.log("Buzz");
		else if (i % 3 == 0) console.log("Fizz");
		else {
			console.log(i);
		}
	}
}
