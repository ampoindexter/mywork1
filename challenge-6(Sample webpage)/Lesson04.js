$(document).ready(function() {
	$('#light').on('click', function() {
		$('body').css('background-color', '#fff');
		$('body').css('color', '#000');
	});
	$('#dark').on('click', function() {
		$('body').css('background-color', '#000');
		$('body').css('color', '#fff');
	});
});