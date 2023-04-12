// OR OPERATOR ||

// console.log(true || true); //true
// console.log(true || false); //true
// console.log(false || true); // true
// console.log(false || false); // false

let firstName = "";
let lastName = "";
let nickName = "Jocatins";

console.log(firstName || lastName || nickName || "Anonymous");

// If all variables were falsy or empty strings, "Anonymous" would show up.

// AND Operator &&

// In classical programming, AND returns true if both operands are truthy and false otherwise:

// console.log(true && true); //true
// console.log(true && false); //false
// console.log(false && true); // false
// console.log(false && false); // false

if (1 && 0) {
	// evaluated as true && false
	console.log("won't work, because the result is falsy");
}

//NULLISH COALESCING OPERATOR '??'
// ?? returns the first argument if it’s not null/undefined

let user;
console.log(user ?? "Anonymous");

let fName = null;
let lName = null;
let nName = "Super-coder";

// shows the first defined value:
console.log(fName ?? lName ?? nName ?? "Anonymous"); // Super-coder

// The important difference between || and  NULLISH COALESCING OPERATOR  is:

// || returns the first truthy value.
// ?? returns the first defined value.

console.log(true ?? true); //true
console.log(true ?? false); //true
console.log(false ?? true); // false
console.log(false ?? false); // false
