$(document).ready(function() {
	$('#light').on('click', function() {
		$('body').css('background-color', '#ffffff');
		$('body').css('color', '#000000');
	});
	$('#dark').on('click', function() {
		$('body').css('background-color', '#000000');
		$('body').css('color', '#ffffff');
	});
});g