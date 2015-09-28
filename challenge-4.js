 var superCounter = function(string) {
	var wordCount = string.split(" ").length;
	var charCount = string.length;
	var spaceCount = wordCount - 1;
	var avgWordLength = (charCount - spaceCount) / wordCount;
	return ('"words": ' + wordCount + ', ' + '"chars": ' + charCount + ', ' + '"avgLength": ' + avgWordLength + ', ' + '"spaces": ' + spaceCount);
};

console.log(superCounter("Count me in"));