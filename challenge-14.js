function wordSelector(string) {
	var wordCount = {};
	var words = string.split(" ");
	function maxCharCount(str) {
		var count = {};
		var numCount = [];
		for (var i = 0; i < str.length; i++) {
			count[str[i]] = (count[str[i]] || 0) + 1;
			numCount.push(count[str[i]]);
		}
		var max = Math.max.apply(null, numCount);
		return max;
	}
 	for (var a = 0; a < words.length; a++) {
 		wordCount[words[a]] = maxCharCount(words[a]);
 	}
 	var total = 0;
 	var result = [];
 	for (var e in wordCount) {
 		total = Math.max(total, wordCount[e]);
 	}
 	for (var o in wordCount) {
 		if (wordCount[o] === total) {
 			result.push(o);
 		}
 	}
 	return result;
 }

 console.log(wordSelector("I attribute my success to this: I never gave or took any excuse. –Florence Nightingale"));