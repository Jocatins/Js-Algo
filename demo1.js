//Return an array showing the cumulative sum at each index of an array of integers?
// const cumulativeSum = (sum => value => sum += value)(0);

// console.log([5, 10, 3, 2].map(cumulativeSum));

// console.log([5, 10, 3, 2].map((sum => value => sum += value)(0)));
// console.log([6, 10, 3, 2].map((sum => value => sum += value)(0)));

const cumulativeSum = (
	(sum) => (value) =>
		(sum += value)
)(0);

console.log([5, 10, 3, 2].map(cumulativeSum));
console.log([6, 10, 3, 2].map(cumulativeSum));

console.log([5, 10, 3, 2].map(((sum = 0), (n) => (sum += n))));

//Source: https://stackoverflow.com/questions/20477177

class A {
	run() {
		console.log("a");
	}

	run2() {
		console.log("run");
	}
}

class B extends A {
	run() {
		console.log("b");
	}
}

obj = new B();
console.log(obj.run()); //
obj1 = new A();
console.log(obj1.run()); //

console.log(obj.run2()); //
console.log(obj1.run2("run 2")); //
