function wordsReverser(string) {
	return string.split(" ").map(function(word) {
		return word.split("").reverse().join("");
	}).join(" ");
}

console.log(wordsReverser("This is fun, hopefully"));