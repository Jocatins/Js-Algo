let box = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//console.log(box.length);

function readItems(arr) {
	for (let i = 0; i <= arr.length; i++) {
		if (i == 10) {
			return console.log(null);
		}
		if (i < 10) {
			return console.log("there are unread items");
		}
	}
}
console.log(readItems([3, 5, 2, 4, 3, 1, 2, 1, 2, 1]));
