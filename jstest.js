//console.log([0, 1, 2, 3].filter((item) => !Boolean(item)));

const arr1 = [0, 1, 2, [3, [4]]];
const result = arr1.flat();
//console.log(result);

//console.log(Boolean({}));

const obj = { calc: () => 1 };
//console.log((res = obj.random?.()));

const arr = [];
const res = Boolean(arr.length);
//console.log(res);

//console.log(Array.from("foo"));

const array1 = [3, 5, 2, 1, 4];
const x = array1.sort((a, b) => b - a);
// console.log(x);

const [a, ...b] = [1, 2, 3, 4];
// console.log(b);

//console.log(!!Boolean(0));

const ob = { a: 1, b: 2, c: 3 };
const { p, ...someVal } = ob;
//console.log(someVal);

const fruits = ["banana", "apple", "peach"];
// console.log(fruits[1]);

//console.log("Bar & bar".replace(/bar/gi, "Foo"));

const array3 = ["one", "two", "three"];
const rev = array3.reverse();
// console.log(array3);

const items = [{ name: "Box 1" }, { name: "Box 2" }];
const rb = items.includes({ name: "Box 1" });
//console.log(rb);

let itemsList = [1, 2];
function addItem(items) {
	items.push(3);
}
addItem([...itemsList]);
//console.log(itemsList);

//console.log(!"0");

const bj = {
	name: "abc",
	func1: () => {
		console.log(1);
	},
};
const ry = JSON.stringify(bj);
//console.log(ry);

//console.log("bar & bar".replace(/bar/g, "foo"));

//console.log(Boolean(-1));

//console.log("bar & Bar".replace(/bar/, "Foo"));

const rj = { name: "Erlich" };
const rtu = { name: "Richard", ...rj };
//console.log(rtu);

const o = {
	a: 1,
	b: 1,
};
o.a = null;
delete o.b;
const rex = o.a === o.b;
//console.log(rex);

const o1 = { name: "Box 1" };
const o2 = { name: "Box 2" };
const it = [o1, o2];
const resu = it.includes(o2);
//console.log(resu);

//console.log(Math.round(1.5));

//console.log(Array.isArray(new Uint8Array(32)));

const ax1 = [1, 2, 3];
const ax2 = [1, 2, 3];
const ax3 = [...ax1, ...ax2] === ax1.concat(ax2);
//console.log(ax3);

//console.log(parseFloat("1,1") === parseInt("1,1"));

//console.log(isNaN("1"));

// console.log(Math.random());

// console.log("a" && "b" && "c");

let aw = 1;
aw--;
// console.log(aw);

let aq = 1;
aq += 1;
// console.log(aq);

const are1 = ["a", "b", "c"];
const are2 = ["a", "x"];
const ri = are1.concat(are2);
// console.log(ri);

// console.log(1 / 0);

//console.log(Math.pow(10));

const text = "lorem ipsum dolor";
const textres = text.split(/\r\n|\r|\n/).length;
// console.log(textres);

// console.log(isNaN("0.0314E+2"));

let au = 1;
au /= 10;
//console.log(au);

// console.log(Math.min(...[1.5, -2, 0]));

const jsonString = '{"results": true, "count":10}';
const o9 = JSON.parse(jsonString);
// console.log(o9);

const aw1 = [1, 2, 3];
const r3 = aw1.reduce((a, b) => a + b, 0);
console.log(r3);
