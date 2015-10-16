function palindromicMap(string) {
	return string.split(" ").map(function(word) {
        var array = [];
		return array += word.toLowerCase() === word.toLowerCase().split("").reverse().join("");
	});
}

console.log(palindromicMap("Stash and Pop on this Level"));