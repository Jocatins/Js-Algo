function isNotNull(str) {
	if (str !== "null" && str != "" && str != " ") return true;
	else return false;
}

function DateToOrdinal(date) {
	var i = BirtDateTime.day(date);
	var rest = BirtDateTime.month(date, 2) + ", " + BirtDateTime.year(date);
	var j = i % 10,
		k = i % 100;
	if (j === 1 && k != 11) {
		return i + "st " + rest;
	}
	if (j === 2 && k != 12) {
		return i + "nd " + rest;
	}
	if (j === 3 && k != 13) {
		return i + "rd " + rest;
	}
	return i + "th " + rest;
}

// ISO format (YYYY-DD-MM)
const currentDateISO = new Date().toISOString().split("T")[0];
console.log(`current Date ISO - ${currentDateISO}`);

// Short Date format (DD/MM/YYYY)
const currentShortDate = new Date().toLocaleDateString("en-US");
console.log(`current Short Date -  ${currentShortDate}`);

// Long Date format (Day, Month DD, YYYY)
const currentLongDate = new Date().toLocaleDateString("en-US", {
	weekday: "long",
	year: "numeric",
	month: "long",
	day: "numeric",
});
console.log(`current Long Date ${currentLongDate}`);

// Current time in 24 hr format (HH:MM:SS)
const currentTime24 = new Date().toLocaleTimeString("en-US", { hour12: false });
console.log(`current Time 24 - ${currentTime24}`);

// Current time in 12 hr format AM/PM indicator
const currentTime12 = new Date().toLocaleTimeString("en-US", { hour12: true });
console.log(`current Time 12 - ${currentTime12}`);
