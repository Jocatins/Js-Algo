// Literals and properties

let user = {
	// an object
	name: "John", // by key "name" store value "John"
	age: 30, // by key "age" store value 30
	"likes birds": true,
};
console.log(user.age); // To access inner properties use a dot

//For multi-word properties, the dot access doesn’t work:

console.log(user["likes birds"]);

// Property value shorthand

function makeUser(name, age) {
	return {
		name,
		age,
		// ...other properties
	};
}

let user1 = makeUser("John", 30);
console.log(user.name); // John

let obj = {
	0: "test", // same as "0": "test"
};

console.log(obj[0]);
console.log(obj["0"]);

// There’s also a special operator "in" for that.

// The syntax is key in object

let user2 = { name: "John", age: 30 };

console.log("name" in user2); // returns true

// The "for..in" loop

//output all properties of user3:

let user3 = {
	name: "John",
	age: 30,
	isAdmin: true,
};

for (let key in user3) {
	console.log(key); // name, age, isAdmin
	console.log(user3[key]); // John, 30, true
}

// Tasks

//1
let userTest = {};
userTest.name = "titan";
userTest.surname = "gypsy";
userTest.name = "Pete";
delete userTest.name;

console.log(userTest);

//2

// We have an object storing salaries of our team:

let salaries = {
	John: 100,
	Ann: 160,
	Pete: 130,
};

// Write the code to sum all salaries and store in the variable sum

let sum = 0;
for (let key in salaries) {
	sum += salaries[key];
}

console.log(`sum of salaries is ${sum}`);

//3

// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

let menu = {
	width: 200,
	height: 300,
	title: "My menu",
};

function multiplyNumeric(obj) {
	for (let key in obj) {
		if (typeof obj[key] == "number") {
			obj[key] *= 2;
		}
	}
}

let a = {};
let b = a; // copy the reference

console.log(a == b); // true, both variables reference the same object
console.log(a === b); // true

// And here two independent objects are not equal, even though they look alike (both are empty):
let x = {};
let y = {};
console.log(x == y); // false
