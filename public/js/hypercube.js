$(document).ready(function(){
	var deg = -45;
	var x = 1, y = 1, z = 0;

	$(".a-top").click(function(){
		x = 1, y = 1, z = 0, deg += 10;
		console.log(deg);
		$(".cube").css({
			'-webkit-transform': 'perspective(900px) rotate3d(' + x + ' , ' + y + ' , ' + z + ' , ' + deg + 'deg)',
			'-moz-transform': 'perspective(900px) rotate3d(' + x + ' , ' + y + ' , ' + z + ' , ' + deg + 'deg)',
			'-o-transform': 'perspective(900px) rotate3d(' + x + ' , ' + y + ' , ' + z + ' , ' + deg + 'deg)',
			'-ms-transform': 'perspective(900px) rotate3d(' + x + ' , ' + y + ' , ' + z + ' , ' + deg + 'deg)',
			'transform': 'perspective(900px) rotate3d(' + x + ' , ' + y + ' , ' + z + ' , ' + deg + 'deg)'
		});
	});

	$(".a-left").click(function(){
		x = 0, y = 1, z = 1, deg -= 10;
		$(".cube").css({
			'-webkit-transform': 'perspective(900px) rotate3d(' + x + ' , ' + y + ' , ' + z + ' , ' + deg + 'deg)',
			'-moz-transform': 'perspective(900px) rotate3d(' + x + ' , ' + y + ' , ' + z + ' , ' + deg + 'deg)',
			'-o-transform': 'perspective(900px) rotate3d(' + x + ' , ' + y + ' , ' + z + ' , ' + deg + 'deg)',
			'-ms-transform': 'perspective(900px) rotate3d(' + x + ' , ' + y + ' , ' + z + ' , ' + deg + 'deg)',
			'transform': 'perspective(900px) rotate3d(' + x + ' , ' + y + ' , ' + z + ' , ' + deg + 'deg)'
		});
	});

	$(".a-right").click(function(){
		x = 0, y = 1, z = 1, deg += 10;
		$(".cube").css({
			'-webkit-transform': 'perspective(900px) rotate3d(' + x + ' , ' + y + ' , ' + z + ' , ' + deg + 'deg)',
			'-moz-transform': 'perspective(900px) rotate3d(' + x + ' , ' + y + ' , ' + z + ' , ' + deg + 'deg)',
			'-o-transform': 'perspective(900px) rotate3d(' + x + ' , ' + y + ' , ' + z + ' , ' + deg + 'deg)',
			'-ms-transform': 'perspective(900px) rotate3d(' + x + ' , ' + y + ' , ' + z + ' , ' + deg + 'deg)',
			'transform': 'perspective(900px) rotate3d(' + x + ' , ' + y + ' , ' + z + ' , ' + deg + 'deg)'
		});
	});

	$(".a-bottom").click(function(){
		x = 1, y = 1, z = 0, deg -= 10;
		$(".cube").css({
			'-webkit-transform': 'perspective(900px) rotate3d(' + x + ' , ' + y + ' , ' + z + ' , ' + deg + 'deg)',
			'-moz-transform': 'perspective(900px) rotate3d(' + x + ' , ' + y + ' , ' + z + ' , ' + deg + 'deg)',
			'-o-transform': 'perspective(900px) rotate3d(' + x + ' , ' + y + ' , ' + z + ' , ' + deg + 'deg)',
			'-ms-transform': 'perspective(900px) rotate3d(' + x + ' , ' + y + ' , ' + z + ' , ' + deg + 'deg)',
			'transform': 'perspective(900px) rotate3d(' + x + ' , ' + y + ' , ' + z + ' , ' + deg + 'deg)'
		});
	});
});