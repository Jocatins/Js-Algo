function CustomerPrototype(proto) {
	this.proto = proto;

	this.clone = function () {
		var customer = new CustomerPrototype();

		customer.first = proto.first;
		customer.last = proto.last;

		customer.status = proto.status;
		return customer;
	};
}
function Customer(first, last, status) {
	this.first = first;
	this.last = last;
	this.status = status;

	this.say = function () {
		alert("name" + this.first + "" + this.last + this.status);
	};
}
function run() {
	var prototype = new Customer("es", "na", "pending");
	// console.log(prototype);
	var customer = prototype.clone();
}
run();
