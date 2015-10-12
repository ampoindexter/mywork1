function age(year, month, day) {
	var today = new Date();
	var inputDate = new Date(year, month, day);
	var yearDiff = Math.abs(inputDate.getUTCFullYear() - today.getUTCFullYear());
	var monthDiff = Math.abs(inputDate.getUTCMonth() - today.getUTCMonth());
	var dayDiff = Math.abs(inputDate.getUTCDay() - today.getUTCDay());
	var result = '';
	if (yearDiff) {
		result += yearDiff  + " years, " + monthDiff + " months, " + dayDiff + " days";
	} else if (monthDiff) {
		result += monthDiff + " months, " + dayDiff + " days";
	} else {
		result += dayDiff + " days";
	}
	return result;
}

console.log(age(2017, 11, 17));
console.log(age(2015, 3, 6));