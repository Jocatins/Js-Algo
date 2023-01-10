// =====================================================
//5
class Vehicle {
	constructor(model, year) {
		this.model = model;
		this.year = year;
	}
	getModel() {
		return this.model;
	}
	getYear() {
		return this.year;
	}
}
class Car extends Vehicle() {
	constructor(model) {
		super(model, "3090");
	}
	getModel() {
		return "This is a car: " + super.getModel();
	}
}
let car = new Vehicle("sphinx");
console.log(car);
