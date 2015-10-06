function swapCase (string){
	var newString = "";
	for(var i = 0; i < string.length; i++){
		if(string[i] === string[i].toLowerCase()){
			newString += string[i].toUpperCase();
		} else {
			newString += string[i].toLowerCase();
		}
	}
	return newString;
}

console.log(swapCase("Life is 10% what happens to you, and 90% of how you REACT to it"));