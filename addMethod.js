function Animal() {
	Animal.prototype.eat = function () {
		console.log("nom nom nom");
	};
}
function Dog() {
	Dog.prototype.bark = function () {
		console.log("Woof");
	};
}

// Only change code below this line

// the Dog object inherits from Animal
Dog.prototype = Object.create(Animal.prototype);
// the Dog's prototype constructor is set to Dog.
Dog.prototype.constructor = Dog;

let beagle = new Dog();
