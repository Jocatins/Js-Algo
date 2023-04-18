// Cloning and merging, Object.assign

let user = {
	name: "John",
	age: 30,
};
let user1 = {
	name: "Kar",
	age: 78,
};

let clone = {}; // the new empty object

// Or we can clone

let clone1 = Object.assign({}, user);

console.log(`Clone1 name of user ${user.name}`);

// Or we can clone using Structured Clone

let clone2 = structuredClone(user);

// let's copy all user properties into it
for (let key in user) {
	clone[key] = user[key];
}

console.log(clone);

let arr = [2, 3, 5, 1, 2, 3];
console.log(arr[0]);

// Object.assign

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

Object.assign(user, permissions1, permissions2);

Object.assign(user1, permissions1);

console.log(user.name); // John
console.log(user1.name); // Kar
console.log(user.canView); // true
console.log(user1.canEdit); // undefined
console.log(user.canEdit); // true
