// Numbers
// There are two types of numbers, regular numbers and bigInt.

// In JavaScript, we can shorten a number by appending the letter "e" to it and specifying the zeroes count:

let million = 1e7;
console.log(million);

let mcs = 1e-6;
console.log(mcs); // to give six zeros in total

// In other words, a negative number after "e" means a division by 1 with the given number of zeroes:

// 1234e-2 === 1234 / 100; // 12.34, decimal point moves 2 times

// toString(base)

let num = 255;

console.log(num.toString(16)); // ff
console.log(num.toString(8)); // 377
console.log(num.toString(4)); // 3333
console.log(num.toString(2)); // 11111111

let numToTest = 6.6;

console.log(Math.floor(numToTest)); // floor goes down -> 6
console.log(Math.ceil(numToTest)); // ceil goes up -> 7
console.log(Math.round(numToTest)); // round works like normal mathematical conversion from point 5
console.log(Math.trunc(numToTest)); // trunc returns the integer part

// The method toFixed(n) rounds the number to n digits after the point and returns a string representation of the result.

let fixNum = 12.346533;
console.log(fixNum.toFixed(2)); // 12.35
console.log(fixNum.toFixed(12)); // 12.346533000000

// Imprecise Calculations

console.log(0.1 + 0.2); //0.30000000000000004

// console.log(1e500); // Infinity

// There’s just no way to store exactly 0.1 or exactly 0.2 using the binary system,
// just like there is no way to store one-third as a decimal fraction.

// The numeric format IEEE-754 solves this by rounding to the nearest possible number.
//These rounding rules normally don’t allow us to see that “tiny precision loss”, but it exists.

console.log((0.1).toFixed(20)); // 0.10000000000000000555

// To work around the issue.

let bSum = 0.1 + 0.2;
console.log(bSum.toFixed(2));
// note that toFixed always returns a string

// we can use the unary plus to coerce it into a number:
console.log(+bSum.toFixed(2));

// console.log( NaN === NaN ); // false;
