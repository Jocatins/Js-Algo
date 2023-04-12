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

// --------------------------------------------

function IsNotNull(str) {
	if (str != null && str != "" && str != " ") return true;
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

// Convert numbers into words

var ones = [
	"",
	"One",
	"Two",
	"Three",
	"Four",
	"Five",
	"Six",
	"Seven",
	"Eight",
	"Nine",
];
var tens = [
	"",
	"",
	"Twenty",
	"Thirty",
	"Forty",
	"Fifty",
	"Sixty",
	"Seventy",
	"Eighty",
	"Ninety",
];
var teens = [
	"Ten",
	"Eleven",
	"Twelve",
	"Thirteen",
	"Fourteen",
	"Fifteen",
	"Sixteen",
	"Seventeen",
	"Eighteen",
	"Nineteen",
];

function convert_millions(num) {
	if (num >= 1000000) {
		return (
			convert_millions(Math.floor(num / 1000000)) +
			" Million " +
			convert_thousands(num % 1000000)
		);
	} else {
		return convert_thousands(num);
	}
}

function convert_thousands(num) {
	if (num >= 1000) {
		return (
			convert_hundreds(Math.floor(num / 1000)) +
			" Thousand " +
			convert_hundreds(num % 1000)
		);
	} else {
		return convert_hundreds(num);
	}
}

function convert_tens(num) {
	if (num < 10) return ones[num];
	else if (num >= 10 && num < 20) return teens[num - 10];
	else {
		return tens[Math.floor(num / 10)] + " " + ones[num % 10];
	}
}

function Convert(num) {
	if (num == 0 || num == null) return "Zero";
	else return convert_millions(num);
}
