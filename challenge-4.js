 function superCounter(string) {
	var wordCount = string.split(" ").length;
	var charCount = string.length;
	var spaceCount = wordCount - 1;
	var avgWordLength = (charCount - spaceCount) / wordCount;
	console.log('"words": ' + wordCount + ', ' + '"chars": ' + charCount + ', ' + '"avgLength": ' + avgWordLength + ', ' + '"spaces": ' + spaceCount);
}

superCounter("Count me in");