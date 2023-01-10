// 4
let loggedIn = true;

let getBook = Promise((resolve, reject) => {
	if (loggedIn) {
		let book = {
			author: "J titan",
			title: "Sphinx rules",
		};
		resolve(book);
	} else {
		let reason = new Error("You are not logged in");
		reject(reason);
	}
});
let readBookTitle = function (data) {
	return new Promise.resolve();
};
let lookAtTheBook = function () {
	getBook
		.then(readBookTitle)
		.then((title) => console.log(title))
		.catch((err) => console.log(err.message));
};
