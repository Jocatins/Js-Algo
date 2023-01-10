// Creates a stack

var Stack = function () {
	this.count = 0;
	this.storage = {};

	// Adds a value to the end of the stack
	this.push = function (value) {
		this.storage[this.count] = value;
		this.count++;
	};
	// Removes and returns the value at the end of the stack
	this.pop = function () {
		if (this.count === 0) {
			return undefined;
		}

		this.count--;
		var result = this.storage[this.count];
		delete this.storage[this.count];
		return result;
	};

	this.size = function () {
		return this.count;
	};

	// Returns the value at the end of the stack
	this.peek = function () {
		return this.storage[this.count - 1];
	};
};

let myStack = new Stack();

myStack.push(1);
myStack.push(4);
myStack.push(17);
console.log(myStack.peek()); // shows the value at the end of the stack
console.log(myStack.pop()); // removes the value at the end of the stack
myStack.push("titans code");
console.log(myStack.peek()); // shows the value at the end of the stack
console.log(myStack.size());
