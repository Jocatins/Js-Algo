let result = "";
for (let i = 0; i < 5; i++) {
	if (i === 3) {
		continue;
	}
	//	console.log((result += 1));
}
// console.log(Math.abs(-1));

// console.log(2.2 + 0.2);

// console.log(Math.round(-1.6));

// console.log(Boolean("false"));

// console.log(Math.floor(10.999));

const someFunc = function (a, ...b) {
	//console.log(b);
};
//console.log(someFunc(1, 2, 3, 4));

//console.log(13 % 10);

// console.log(Math.max(...[1, 3, 2]));

const n = new Date(0).toISOString();
// console.log(n);

// console.log(Math.ceil(1.1));

const obj1 = { key: "value" };
const obj2 = { key: "value" };

const res = JSON.stringify(obj1) === JSON.stringify(obj2);
// console.log(res);

const array1 = ["a", "b", "c"];
const r = array1.forEach((element) => element + element);
// console.log(r);

// console.log(Math.pow(10, 3));

// console.log(1 === "1");

// console.log(Math.pow(10, -1));

// console.log(parseFloat("100") === parseInt("100"));

const t = [1, 2, 3];
const re = t["1"] === t["01"];
// console.log(re);

// console.log(parseFloat("Gil"));

// console.log(Boolean(""));

// console.log(0n === 0);

// console.log(1 + "2");

const name = "Tony";
const hash = Number(name);
// console.log(hash ? "passsed" : "failed");

const wes = [];
for (var x = 0; x < 4; x++) {
	setTimeout(() => wes.push(x), 0);
}
// console.log(wes);

// console.log(typeof globalThis.XMLHttpRequest === "function");

let az;
if (az) {
	console.log("truthy");
} else {
	console.log("falsy");
}
// console.log(10 ** 2);

// console.log(Math.floor(1.5));
