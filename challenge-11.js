var util = {};

util.oddcount = function(array) {
	count = 0;
	for (i = 0; i < array.length; i++) {
		if (array[i] % 2 !== 0) {
			count++;
		}
	}
	return count;
};

util.negcount = function(array) {
	count = 0;
	for (i = 0; i < array.length; i++) {
		if (array[i] < 0) {
			count++;
		}
	}
	return count;
};

util.sum = function(array) {
	total = 0;
	array.forEach(function(num) {
		total = total + num;
	});
	return total;
};

util.average = function(array) {
	return Math.round((util.sum(array) / array.length) * 100) / 100;
};

util.median = function(array) {
	array.sort();
	if (array.length % 2 !== 0) {
		i = (array.length + 1) / 2;
		return array[i];
	} else {
		i = array.length / 2;
		e = (array.length / 2) + 1;
		return (array[i] + array[e]) / 2;
	}
};

function arrayAnalyzer(array) {
	return {
		'"odds"': util.oddcount(array),
		'"negatives"': util.negcount(array),
		'"avg"': util.average(array),
		'"median"': util.median(array),
	};
}

console.log(arrayAnalyzer([7, -3, 0, 12, 44, -5, 3]));