var util = {};

util.wordcount = function(string) {
	return string.split(" ").length;
};

util.charcount = function(string) {
	return string.length;
};

util.spacecount = function(string) {
	return (util.wordcount(string) - 1);
};

util.avgwordlength = function(string) {
	return ((util.charcount(string) - util.spacecount(string)) / util.wordcount(string));
};

function superCounter(string) {
	return {
		words: util.wordcount(string),
		chars: util.charcount(string),
		avgLength: util.avgwordlength(string),
		spaces: util.spacecount(string),
	}
}

console.log(superCounter("Count me in"));