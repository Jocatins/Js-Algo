describe("pow", function () {
	function makeTest(x) {
		let expected = x * x * x;
		it(`${x} in the power 3 is ${expected}`, function () {
			assert.equal(pow(x, 3), expected);
		});
	}
	for (let x = 1; x <= 5; x++) {
		makeTest(x);
	}

	it("2 raised to power 3 is 8", function () {
		assert.equal(pow(2, 3), 8);
	});
});

//A spec has three main building blocks that you can see above:

// Describe -> What functionality we’re describing? In our case we’re describing the function pow
// Also used to group “workers” – the it blocks.

// It --> describe the particular use case,

// Assert => Functions assert.* are used to check whether pow works as expected.

// Mocha – the core framework: it provides common testing functions including describe and it and the main function that runs tests.

// Chai – the library with many assertions. It allows to use a lot of different assertions, for now we need only assert.equal.

// Sinon – a library to spy over functions, emulate built-in functions and more, we’ll need it much later.
