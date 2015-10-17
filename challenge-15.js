// If we're counting in the number system that has base 3, we only can use 0, 1, 2. The first 6 numbers would be:
// 0, 1, 2, 10, 11, 12
// The next 6 numbers are:
// 20, 21, 22, 100, 101, 102

var ascii = [73, 32, 115, 112, 101, 97, 107, 32, 105, 110, 32, 110, 117, 109, 98, 101, 114, 115];
function makeSentence(asc) {
	var array = [];
	asc.map(function(eachChar) {
		var thisChar = String.fromCharCode(eachChar);
		array.push(thisChar);
	});
	return array.join("");
}

console.log(makeSentence(ascii));