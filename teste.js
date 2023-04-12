/// 1
let add1 = (a, b) => a + b;
let add2 = (a, b) => a + b;

let comparison = (add1, add2) => {
	return add1.toString() == add2.toString();
};
// console.log(comparison(add1, add2));
// =====================================
////2
let addNumber = (a, b) => a + b;

// console.log(isNaN(addNumber(3))); // true
// console.log(addNumber(4) === NaN); // false
// console.log(typeof addNumber(4) == "NaN"); // false

//==========================================
// 3
let string = "jocatins";

let n = string.length;
//console.log(string.charAt(true));
// ================================================
var first_pos = -1;
for (var i = 0; i + 1 < n; ++i) {
	if (first_pos == -1 || string[first_pos] > string[i + 1]) {
		first_pos = i + 1;
	}
}
//console.log(first_pos);

let a = 1;
if (true) {
	let a = 2;
}
//console.log(a);

/^[a-zA-Z]+$/.test("abc123");

const calc = ({ input = 2, output = 2 }) => {
	return input === output;
};
const result = calc({ input: 1 });
//console.log(result);

//console.log(parseInt("3.5"));

//console.log(1 == "1");

const items = ["a", "b"];
items.length = 0;
//console.log(items);

const obj = { name: undefined };
const results = JSON.stringify(obj);
//console.log(results);

//console.log(parseFloat("1") + parseFloat("0.1"));

//console.log(0.1 * 0.1);

const objs = { name: "abc" };
const res = objs.someKey === undefined;
// console.log(res);

//console.log(false && 1 && "a");

const arr1 = ["a", "b", "c"];
const ress = arr1.map((element) => element + element);
// console.log(ress);

//console.log(Math.round("abc"));

const r = new Promise((res) => {
	setTimeout(() => res(1), 1000);
});
//console.log(r);

// const ab = 0;
// if (a) {
// 	console.log("truthy");
// } else {
// 	console.log("falsy");
// }

const ar1 = [1, 2, 3, 4];
const ans = ar1.slice(-2);
//console.log(ans);

//console.log(Number.MAX_SAFE_INTEGER);

const object1 = {
	key: "value",
};
const object2 = {
	key: "value",
};
const rex = object1 === object2;
//console.log(rex);

//console.log("abc".split("").reverse().join(","));

//console.log(encodeURI("https://tesla.com/?x=A B"));

const elt = ["Fire", "Air", "Water"];
const re = elt.join("-");
//console.log(re);

let ax = 1;
ax *= 10;
//console.log(ax);

const arr4 = [5, 12, 8, 130];
const rt = arr4.find((element) => element > 10);
console.log(rt);
