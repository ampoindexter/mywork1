function getRandomColor() {
	var letters = '0123456789ABCDEF'.split('');
	var hexTripletColor = '#';
	for (var i = 0; i < 6; i++) {
		hexTripletColor += letters[Math.floor(Math.random()*16)];
	}
	return hexTripletColor;
}

function invertColor(hexTripletColor) {
    var color = hexTripletColor;
    color = color.substring(1);
    color = parseInt(color, 16);
    color = 0xFFFFFF ^ color;
    color = color.toString(16);
    color = ("000000" + color).slice(-6);
    color = "#" + color;
    return color;
}

$(document).ready(function() {
	$('div').each(function() {
		var backColor = getRandomColor();
		$(this).css({'background-color': backColor,
					 'color': invertColor(backColor)});
	});
});