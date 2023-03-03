const user = [
	{ id: 1, name: "Philip" },
	{ id: 2, name: "Nicolas" },
	{ id: 3, name: "Joca" },
	{ id: 4, name: "By" },
];

console.table(user);

// console.time("fetching");
// fetch("url").then(() => console.timeEnd("fetched"));

const obj = {
	name: "Ami",
	age: 23,
};
console.dir(obj);

// function fun1() {
// 	console.trace();
// }
// function fun2() {
// 	fun1();
// }
// fun2();

const add = (a, b) => {
	return a - b;
};
const result = add(2, 4);
console.assert(result == 6, "Expected 5");

function fun(x) {
	console.count(x);
}
fun("hello");
fun("hello");
fun("hello");
fun("hello");

console.log("pre message");
console.clear();
console.log("new message");

console.group("Do This");
console.log("Follow");
console.log("Titan");
console.groupEnd();
