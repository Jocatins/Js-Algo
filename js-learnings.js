// let age = prompt("How old are you", "");
// alert(`So you are ${age} years old`);

// let rs = confirm("Are you in charge");

// alert(rs);

// let isGreater = 5 > 2;
// alert(isGreater);

console.log(typeof 10n); //bigint

console.log(typeof null); //object

console.log(typeof (5 + "go")); // string

console.log(typeof Symbol("id")); // symbol

console.log(typeof Symbol); // function

// String Conversion
let value = true;
console.log(typeof value); // boolean

value = String(value);
console.log(typeof value); // String

// Number Conversion
let str = "123";
console.log(typeof str); // string

let num = Number(str);
console.log(typeof num); // number

// Boolean Conversion
console.log(Boolean(2)); // true
console.log(Boolean(0)); // false

// Comma Operator
let x = (1 + 34, 5 + 6);
console.log(x); // 11
