/* Queues */

function Queue() {
	collection = [];
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
	var collection = [];
	this.printCollection = function () {
		console.log(collection);
	};
	this.enqueue = function (element) {
		if (this.isEmpty()) {
			collection.push(element);
		} else {
			var added = false;
			for (var i = 0; i < collection.length; i++) {
				if (element[1] < collection[i][1]) {
					//checking priorities
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

var pq = new PriorityQueue();
pq.enqueue(["Beau Carnes", 2]);
pq.enqueue(["Quincy Larson", 3]);
pq.enqueue(["Ewa Mitulska-Wójcik", 1]);
pq.enqueue(["Briana Swift", 2]);
pq.printCollection();
pq.dequeue();
console.log(pq.front());
pq.printCollection();
