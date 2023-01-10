// Sets

function mySet() {
	// the var collection will hold the set. collection of items to be stored in an array
	var collection = [];

	// this method will check for the presence of an element and return true or false
	this.has = function (element) {
		return collection.indexOf(element) !== -1;
	};

	// this method will return all the values in the set
	this.values = function () {
		return collection;
	};
	// this method will add an element to the set
	this.add = function (element) {
		if (!this.has(element)) {
			//first a check has to be done to know if the elt is in the set
			collection.push(element); // if it does not have the elt, item will be pushed to the collection array
			return true;
		}
		return false;
	};
	// this method will remove an element from a set
	this.remove = function (element) {
		if (this.has(element)) {
			index = collection.indexOf(element);
			collection.splice(index, 1);
			return true;
		}
		return false;
	};
	// this method will return the size of the collection
	this.size = function () {
		return collection.length;
	};
	// this method will return the union of two sets
	// It combines the sets, but leaves out any duplicate in the set
	this.union = function (otherSet) {
		var unionSet = new mySet();
		var firstSet = this.values();
		var secondSet = otherSet.values();
		firstSet.forEach(function (e) {
			unionSet.add(e);
		});
		secondSet.forEach(function (e) {
			unionSet.add(e);
		});
		return unionSet;
	};
	// this method will return the intersection of two sets as a new set
	this.intersection = function (otherSet) {
		var intersectionSet = new mySet();
		var firstSet = this.values();
		firstSet.forEach(function (e) {
			if (otherSet.has(e)) {
				intersectionSet.add(e);
			}
		});
		return intersectionSet;
	};
	// this method will return the difference of two sets as a new set
	this.difference = function (otherSet) {
		var differenceSet = new mySet();
		var firstSet = this.values();
		firstSet.forEach(function (e) {
			if (!otherSet.has(e)) {
				differenceSet.add(e);
			}
		});
		return differenceSet;
	};
	// this method will test if the set is a subset of a different set
	this.subset = function (otherSet) {
		var firstSet = this.values();
		return firstSet.every(function (value) {
			return otherSet.has(value);
		});
	};
}

let setA = new mySet();
let setB = new mySet();
setA.add("a");
setA.add("d");
setB.add("d");
setB.add("q");
setB.add("a");
setB.add("b");
// console.log(setA.subset(setB));
// console.log(setA.intersection(setB).values());
// console.log(setA.difference(setB).values());

let setC = new Set();
let setD = new Set();
setC.add("s");
setC.add("r");
setD.add("s");
setD.add("t");
setC.add("a");
// console.log(setD.values());
setD.delete("s");
console.log(setD.has("s"));
console.log(setD.add("d"));
console.log(setD.values());
