const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("ascii");

var input_stdin = "";
process.stdin.on("data", function (data) {
	input_stdin += data;
});

process.stdin.on("end", function () {
	fptr = fs.createWriteStream(process.env["OUTPUT_FILE_PATH"]);
	fptr.write("\n");
	inputs = input_stdin.split("\n");
	var iterator = 0;
	ar_count = parseInt(inputs[iterator++].trim());
	arInputItems = inputs[iterator++].split(" ");

	ar = [];

	for (let i = 0; i < ar_count; i++) {
		ar_item = parseInt(arInputItems[i].trim());
		ar.push(ar_item);
	}

	outcome = solve(ar);

	fptr.write(outcome + "\n");

	fptr.end();
});

// implement method/function with name 'solve' below.
//
// The function accepts following parameters:
//  1. ar is of type INTEGER ARRAY.

function solve(ar) {
	// Write your code here
	for (let i = 0; i < ar.length; i++) {
		return console.log(i);
	}
}
