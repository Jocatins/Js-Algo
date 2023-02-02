//Create a mixin named glideMixin that defines a method named glide.
//Then use the glideMixin to give both bird and boat the ability to glide.

// a mixin provides methods that implement a certain behavior,
// but we do not use it alone, we use it to add the behavior to other classes.

// let glideMixin = function (obj) {
// 	obj.glide = function () {
// 		console.log("glide");
// 	};
// };

// let bird = {
// 	name: "Don",
// 	numLegs: 4,
// };
// let boat = {
// 	name: "titan",
// 	type: "warrior",
// };

// console.log(glideMixin(bird));

let sayHiMixin = {
	sayHi() {
		alert(`Hello ${this.name}`);
		return "hi";
	},
	sayBye() {
		alert(`Bye ${this.name}`);
	},
};

class User {
	constructor(name) {
		this.name = name;
	}
}

Object.assign(User.prototype, sayHiMixin);

const user = new User("Dude").sayHi();

console.log(user);
