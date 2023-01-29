//Find a duplicate number in an array of integers?
const findDuplicates = (arr) => {
	let sorted_arr = arr.slice().sort(); // You can define the comparing function here.
	// JS by default uses a crappy string compare.
	// (we use slice to clone the array so the
	// original array won't be modified)
	let results = [];
	for (let i = 0; i < sorted_arr.length - 1; i++) {
		if (sorted_arr[i + 1] == sorted_arr[i]) {
			results.push(sorted_arr[i]);
		}
	}
	return results;
};

let duplicatedArray = [9, 9, 111, 2, 3, 4, 4, 5, 7];
console.log(
	`The duplicates in ${duplicatedArray} are ${findDuplicates(
		duplicatedArray
	)}`
);

//Source: https://stackoverflow.com/questions/840781


function readLetters(n, arr) {
	let count = 0;
	for (let i = 0; i < n; i++) {
	  if (arr[i] === 0) {
		count++;
	  }
	}
  
	return count;
  }

//Open the first letter move to the second letter, return to the list, open the fifth letter, So you need to perform four operations?
for (var i = 0; i < str.length; i++) {
  alert(str.charAt(i));
}


 for (var i = 0; i < str.length; i++) {
   alert(str[i]);
 }


var i = str.length;
while (i--) {
  alert(str.charAt(i));
}


 var i = str.length;
while (i--) {
  alert(str[i]);
}




//Source: https://stackoverflow.com/questions/1966476








//Source: https://stackoverflow.com/questions/74567437








