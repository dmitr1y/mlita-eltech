$(document).ready(function(){

	$(".cube").mousemove(function(e){
		$(".cube").css({
			'-webkit-transform': 'rotateX(' + e.pageX + 'deg) rotateY(' + e.pageY + 'deg)',
			'-moz-transform': 'rotateX(' + e.pageX + 'deg) rotateY(' + e.pageY + 'deg)',
			'-o-transform': 'rotateX(' + e.pageX + 'deg) rotateY(' + e.pageY + 'deg)',
			'-ms-transform': 'rotateX(' + e.pageX + 'deg) rotateY(' + e.pageY + 'deg)',
			'transform': 'rotateX(' + e.pageX + 'deg) rotateY(' + e.pageY + 'deg)'
		});
	});

	$(".a-top").click(function(){
		$(".cube").css({
			'-webkit-transform': 'perspective(900px) rotate3d(180, -45, 0, -135deg)',
			'-moz-transform': 'perspective(900px) rotate3d(180, -45, 0, -135deg)',
			'-o-transform': 'perspective(900px) rotate3d(180, -45, 0, -135deg)',
			'-ms-transform': 'perspective(900px) rotate3d(180, -45, 0, -135deg)',
			'transform': 'perspective(900px) rotate3d(180, -45, 0, -135deg)'
		});
	});

	$(".a-left").click(function(){
		$(".cube").css({
			'-webkit-transform': 'perspective(900px) rotate3d(180, -45, 0, 135deg)',
			'-moz-transform': 'perspective(900px) rotate3d(180, -45, 0, 135deg)',
			'-o-transform': 'perspective(900px) rotate3d(180, -45, 0, 135deg)',
			'-ms-transform': 'perspective(900px) rotate3d(180, -45, 0, 135deg)',
			'transform': 'perspective(900px) rotate3d(180, -45, 0, 135deg)'
		});
	});

	$(".a-right").click(function(){
		$(".cube").css({
			'-webkit-transform': 'perspective(900px) rotate3d(55, 180, 0, -219deg)',
			'-moz-transform': 'perspective(900px) rotate3d(55, 180, 0, -219deg)',
			'-o-transform': 'perspective(900px) rotate3d(55, 180, 0, -219deg)',
			'-ms-transform': 'perspective(900px) rotate3d(55, 180, 0, -219deg)',
			'transform': 'perspective(900px) rotate3d(55, 180, 0, -219deg)'
		});
	});

	$(".a-bottom").click(function(){
		$(".cube").css({
			'-webkit-transform': 'perspective(900px) rotate3d(-45, 180, 0, 135deg)',
			'-moz-transform': 'perspective(900px) rotate3d(-45, 180, 0, 135deg)',
			'-o-transform': 'perspective(900px) rotate3d(-45, 180, 0, 135deg)',
			'-ms-transform': 'perspective(900px) rotate3d(-45, 180, 0, 135deg)',
			'transform': 'perspective(900px) rotate3d(-45, 180, 0, 135deg)'
		});
	});
});