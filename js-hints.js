// ====CLOSURE FUNCTION=======

function urlBuilder(path) {
	// outer function
	const domain = "outer domain";

	function combineUrl() {
		// inner function
		return `${domain}/${path}`;
	}
	return combineUrl();
}
// console.log(urlBuilder("home"));

// =====APPLY and CALL function ========>
const name = {
	firstName: "Candace",
	lastName: "Owens",
};
function greet(greeting, msg) {
	return `${greeting} ${this.firstName} ${this.lastName}`;
}

greet.call(name, "Hello", "Are you OK");

greet.apply(name, ["Hello", "Are you OK"]); // apply expects an array as an argument

/// =======Currying Function ===========>
const add = (x) => (y) => console.log(x + y);

const add20ToNumber = add(20);
// console.log(add20ToNumber(4)); // 24

console.log([1, 3, 2, 1, 4, 5]);

// ===  EVENT DELEGATION =========>
//  Step 1. Find a parent element to attach the event
//  Step 2. Attach the event listener to the parent element
//  Step 3. Use event.target to select the target element and do something with the element

document.getElementById("list").addEventListener("click", (event) => {
	if (event.target && event.target.matches("list-item")) {
		// do something with this target
	}
});

// ++++ PROMISE -------------<
new Promise((resolve, reject) => {});

// ==== CALLBACK FUNCTION ======== //
function greet(str) {
	alert(`Hello, ${str}`);
}
function processStr(callback) {
	const name = prompt("Please enter your name");
	callback(name);
}
// console.log(processStr(greet));
// ===============================

// ======= ASYNC AWAIT ==========//
function resolveAfter2secs() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve("resolved");
		}, 2000);
	});
}

async function asyncCall() {
	console.log("calling");
	const result = await resolveAfter2secs();
	console.log(result);
}
// asyncCall()
