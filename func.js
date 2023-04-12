function showMsg() {
	let msg = "Hello Hol";
	console.log(msg);
}
console.log(showMsg());

// Outer Variables

let userName = "Titan";

function showMsg1() {
	// If a same-named variable is declared inside the function
	//  then it shadows the outer one. For instance, in the code below the function uses the local userName.
	//   The outer one is ignored:
	userName = "Philip";
	let msg = "Hello " + userName;
	console.log(msg);
}
console.log(showMsg1());

// Parameters

function newMsg(from, text) {
	console.log(from + " " + text);
}
console.log(newMsg("Dinner", "2022"));
