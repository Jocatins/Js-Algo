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
