// SWITCH STATEMENTS

let a = 2 + 2;

switch (a) {
	case 3:
		console.log("It is not up to a ");
		break;
	case 4:
		console.log("Exactly");
		break;
	case 5:
		console.log("More than a");
		break;
	default:
		console.log("doesn't match");
}

// without break:

let b = 2 + 2;

switch (b) {
	case 3:
		console.log("Too small");
	case 4:
		console.log("Exactly!");
	case 5:
		console.log("Too big");
	default:
		console.log("I don't know such values");
}
// Exactly!
// Too big
// I don't know such values

// Both switch and case allow arbitrary expressions.

let a1 = "1";
let b1 = 0;

switch (+a1) {
	case b1 + 1:
		console.log("this runs, because +a is 1, exactly equals b+1");
		break;

	default:
		console.log("this doesn't run");
}
