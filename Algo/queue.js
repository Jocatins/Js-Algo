/* Queues */
// First in first Out

function Queue() {
	collection = []; // collects all the items in the queue
	this.print = function () {
		console.log(collection);
	};
	this.enqueue = function (element) {
		// enqueue pushes the first item onto the queue
		collection.push(element);
	};
	this.dequeue = function () {
		// dequeue takes an item off the array
		return collection.shift(); // dot shift() removes the first item of the array and returns it
	};
	this.front = function () {
		// returns the item in the front of the array without removing the item off the array
		return collection[0];
	};
	this.size = function () {
		// size of the queue
		return collection.length;
	};
	this.isEmpty = function () {
		return collection.length === 0;
	};
}

// var q = new Queue();
// q.enqueue("a");
// q.enqueue("b");
// q.enqueue("c");
// q.print();
// q.dequeue();
// console.log(q.front());
// q.print();

function PriorityQueue() {
	// If all the priority numbers are the same, it will behave like a normal queue
	// The elements that are passed in with a higher priority are sent to the beginning of the queue
	// i.e elements with priority number of 4 are passed in before 5
	var collection = [];
	this.printCollection = function () {
		console.log(collection);
	};
	this.enqueue = function (element) {
		// if queue is empty push on the element
		if (this.isEmpty()) {
			collection.push(element);
		} else {
			// if it is not empty you have to check the priorities to see where to put the element on
			var added = false; // var to check whether we have added the item to the queue
			for (var i = 0; i < collection.length; i++) {
				// if check -- the elt at index 1 is less than
				if (element[1] < collection[i][1]) {
					collection.splice(i, 0, element);
					added = true;
					break;
				}
			}
			if (!added) {
				collection.push(element);
			}
		}
	};
	this.dequeue = function () {
		var value = collection.shift();
		return value[0];
	};
	this.front = function () {
		return collection[0];
	};
	this.size = function () {
		return collection.length;
	};
	this.isEmpty = function () {
		return collection.length === 0;
	};
}

// enqueue takes in an array, the first parameter is the item to be added, the 2nd is the priority

var pq = new PriorityQueue();
pq.enqueue(["Beau Carnes", 2]);
pq.enqueue(["Quincy Larson", 3]);
pq.enqueue(["Ewa Mitulska-Wójcik", 1]);
pq.enqueue(["Briana Swift", 2]);
pq.printCollection();
pq.dequeue();
console.log(pq.front());
pq.printCollection();
