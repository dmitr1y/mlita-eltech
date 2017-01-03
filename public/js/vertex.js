$(document).ready(function(){

	

	// $(".cube").mousemove(function(e){
		// $(".cube").css({
			// '-webkit-transform': 'translate3d(0, -20px, 100px) rotateX(' + e.pageX + 'deg) rotateY(' + e.pageY + 'deg)',
			// '-moz-transform': 'translate3d(0, -20px, 100px) rotateX(' + e.pageX + 'deg) rotateY(' + e.pageY + 'deg)',
			// '-o-transform': 'translate3d(0, -20px, 100px) rotateX(' + e.pageX + 'deg) rotateY(' + e.pageY + 'deg)',
			// '-ms-transform': 'translate3d(0, -20px, 100px) rotateX(' + e.pageX + 'deg) rotateY(' + e.pageY + 'deg)',
			// 'transform': 'translate3d(0, -20px, 100px) rotateX(' + e.pageX + 'deg) rotateY(' + e.pageY + 'deg)'
		// })

		// $(".vertex_1").css({
		// 	'-webkit-transform': 'translate3d(0, -20px, 100px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)',
		// 	'-moz-transform': 'translate3d(0, -20px, 100px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)',
		// 	'-o-transform': 'translate3d(0, -20px, 100px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)',
		// 	'-ms-transform': 'translate3d(0, -20px, 100px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)',
		// 	'transform': 'translate3d(0, -20px, 100px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)'
		// })

		// $(".vertex_2").css({
		// 	'-webkit-transform': 'translate3d(190px, -20px, 100px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)',
		// 	'-moz-transform': 'translate3d(190px, -20px, 100px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)',
		// 	'-o-transform': 'translate3d(190px, -20px, 100px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)',
		// 	'-ms-transform': 'translate3d(190px, -20px, 100px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)',
		// 	'transform': 'translate3d(190px, -20px, 100px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)'
		// })

		// $(".vertex_3").css({
		// 	'-webkit-transform': 'translate3d(0, -20px, -100px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)',
		// 	'-moz-transform': 'translate3d(0, -20px, -100px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)',
		// 	'-o-transform': 'translate3d(0, -20px, -100px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)',
		// 	'-ms-transform': 'translate3d(0, -20px, -100px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)',
		// 	'transform': 'translate3d(0, -20px, -100px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)'
		// })

		// $(".vertex_4").css({
		// 	'-webkit-transform': 'translate3d(190px, -20px, -100px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)',
		// 	'-moz-transform': 'translate3d(190px, -20px, -100px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)',
		// 	'-o-transform': 'translate3d(190px, -20px, -100px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)',
		// 	'-ms-transform': 'translate3d(190px, -20px, -100px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)',
		// 	'transform': 'translate3d(190px, -20px, -100px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)'
		// })

		// $(".vertex_5").css({
		// 	'-webkit-transform': 'translate3d(0, 200px, 100px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)',
		// 	'-moz-transform': 'translate3d(0, 200px, 100px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)',
		// 	'-o-transform': 'translate3d(0, 200px, 100px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)',
		// 	'-ms-transform': 'translate3d(0, 200px, 100px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)',
		// 	'transform': 'translate3d(0, 200px, 100px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)'
		// })

		// $(".vertex_6").css({
		// 	'-webkit-transform': 'translate3d(190px, 200px, 100px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)',
		// 	'-moz-transform': 'translate3d(190px, 200px, 100px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)',
		// 	'-o-transform': 'translate3d(190px, 200px, 100px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)',
		// 	'-ms-transform': 'translate3d(190px, 200px, 100px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)',
		// 	'transform': 'translate3d(190px, 200px, 100px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)'
		// })

		// $(".vertex_7").css({
		// 	'-webkit-transform': 'translate3d(0, 200px, -100px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)',
		// 	'-moz-transform': 'translate3d(0, 200px, -100px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)',
		// 	'-o-transform': 'translate3d(0, 200px, -100px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)',
		// 	'-ms-transform': 'translate3d(0, 200px, -100px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)',
		// 	'transform': 'translate3d(0, 200px, -100px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)'
		// })

		// $(".vertex_8").css({
		// 	'-webkit-transform': 'translate3d(190px, 200px, -100px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)',
		// 	'-moz-transform': 'translate3d(190px, 200px, -100px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)',
		// 	'-o-transform': 'translate3d(190px, 200px, -100px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)',
		// 	'-ms-transform': 'translate3d(190px, 200px, -100px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)',
		// 	'transform': 'translate3d(190px, 200px, -100px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)'
		// })

		// $(".vertex_9").css({
		// 	'-webkit-transform': 'translate3d(60px, 45px, 30px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)',
		// 	'-moz-transform': 'translate3d(60px, 45px, 30px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)',
		// 	'-o-transform': 'translate3d(60px, 45px, 30px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)',
		// 	'-ms-transform': 'translate3d(60px, 45px, 30px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)',
		// 	'transform': 'translate3d(60px, 45px, 30px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)'
		// })

		// $(".vertex_10").css({
		// 	'-webkit-transform': 'translate3d(120px, 45px, 30px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)',
		// 	'-moz-transform': 'translate3d(120px, 45px, 30px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)',
		// 	'-o-transform': 'translate3d(120px, 45px, 30px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)',
		// 	'-ms-transform': 'translate3d(120px, 45px, 30px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)',
		// 	'transform': 'translate3d(120px, 45px, 30px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)'
		// })

		// $(".vertex_11").css({
		// 	'-webkit-transform': 'translate3d(120px, 45px, 30px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)',
		// 	'-moz-transform': 'translate3d(120px, 45px, 30px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)',
		// 	'-o-transform': 'translate3d(120px, 45px, 30px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)',
		// 	'-ms-transform': 'translate3d(120px, 45px, 30px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)',
		// 	'transform': 'translate3d(120px, 45px, 30px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)'
		// })

		// $(".vertex_12").css({
		// 	'-webkit-transform': 'translate3d(120px, 45px, -30px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)',
		// 	'-moz-transform': 'translate3d(120px, 45px, -30px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)',
		// 	'-o-transform': 'translate3d(120px, 45px, -30px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)',
		// 	'-ms-transform': 'translate3d(120px, 45px, -30px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)',
		// 	'transform': 'translate3d(120px, 45px, -30px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)'
		// })

		// $(".vertex_13").css({
		// 	'-webkit-transform': 'translate3d(60px, 125px, 30px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)',
		// 	'-moz-transform': 'translate3d(60px, 125px, 30px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)',
		// 	'-o-transform': 'translate3d(60px, 125px, 30px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)',
		// 	'-ms-transform': 'translate3d(60px, 125px, 30px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)',
		// 	'transform': 'translate3d(60px, 125px, 30px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)'
		// })

		// $(".vertex_14").css({
		// 	'-webkit-transform': 'translate3d(120px, 125px, 30px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)',
		// 	'-moz-transform': 'translate3d(120px, 125px, 30px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)',
		// 	'-o-transform': 'translate3d(120px, 125px, 30px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)',
		// 	'-ms-transform': 'translate3d(120px, 125px, 30px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)',
		// 	'transform': 'translate3d(120px, 125px, 30px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)'
		// })

		// $(".vertex_15").css({
		// 	'-webkit-transform': 'translate3d(60px, 125px, -30px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)',
		// 	'-moz-transform': 'translate3d(60px, 125px, -30px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)',
		// 	'-o-transform': 'translate3d(60px, 125px, -30px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)',
		// 	'-ms-transform': 'translate3d(60px, 125px, -30px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)',
		// 	'transform': 'translate3d(60px, 125px, -30px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)'
		// })

		
		// $(".vertex_16").css({
		// 	'-webkit-transform': 'translate3d(120px, 125px, -30px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)',
		// 	'-moz-transform': 'translate3d(120px, 125px, -30px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)',
		// 	'-o-transform': 'translate3d(120px, 125px, -30px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)',
		// 	'-ms-transform': 'translate3d(120px, 125px, -30px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)',
		// 	'transform': 'translate3d(120px, 125px, -30px) rotateX(' + -e.pageX + 'deg) rotateY(' + -e.pageY + 'deg)'
		// })
	// });


	var a = {
		0: function(clss, f) {
			$(clss).empty();
			$(clss).append(f + '0');
		},
		1: function(clss, f) {
			$(clss).empty();
			$(clss).append(f + '1');	
		}
	}, 
	b = [
	-1,
	-1,
	-1,
		-1, // 4
		-1,
		-1,
		-1,
		-1, // 8
		-1,
		-1,
		-1,
		-1, // 12
		-1,
		-1,
		-1,
		-1 // 16
		]

		$(".vertex_1").click(function(){
			$(".vertex_1").append(function() {
				a[++b[0] % 2](".vertex_1", "f(" + assocify(0) + ") = ")
			});
			selfdualAnswer[++click % 2](".vertex_1");
		});

		$(".vertex_2").click(function(){
			$(".vertex_2").append(function() {
				a[++b[1] % 2](".vertex_2", "f(" + assocify(1) + ") = ")
			});
			selfdualAnswer[++click % 2](".vertex_2");
		});

		$(".vertex_3").click(function(){
			$(".vertex_3").append(function() {
				a[++b[2] % 2](".vertex_3", "f(" + assocify(2) + ") = ")
			});
			selfdualAnswer[++click % 2](".vertex_3");
		});

		$(".vertex_4").click(function(){
			$(".vertex_4").append(function() {
				a[++b[3] % 2](".vertex_4", "f(" + assocify(3) + ") = ")
			});
			selfdualAnswer[++click % 2](".vertex_4");
		});

		$(".vertex_5").click(function(){
			$(".vertex_5").append(function() {
				a[++b[4] % 2](".vertex_5", "f(" + assocify(4) + ") = ")
			});
			selfdualAnswer[++click % 2](".vertex_5");
		});

		$(".vertex_6").click(function(){
			$(".vertex_6").append(function() {
				a[++b[5] % 2](".vertex_6", "f(" + assocify(5) + ") = ")
			});
			selfdualAnswer[++click % 2](".vertex_6");
		});

		$(".vertex_7").click(function(){
			$(".vertex_7").append(function() {
				a[++b[6] % 2](".vertex_7", "f(" + assocify(6) + ") = ")
			});
			selfdualAnswer[++click % 2](".vertex_7");
		});

		$(".vertex_8").click(function(){
			$(".vertex_8").append(function() {
				a[++b[7] % 2](".vertex_8", "f(" + assocify(7) + ") = ")
			});
			selfdualAnswer[++click % 2](".vertex_8");
		});

		$(".vertex_9").click(function(){
			$(".vertex_9").append(function() {
				a[++b[8] % 2](".vertex_9", "f(" + assocify(8) + ") = ")
			});
			selfdualAnswer[++click % 2](".vertex_9");
		});

		$(".vertex_10").click(function(){
			$(".vertex_10").append(function() {
				a[++b[9] % 2](".vertex_10", "f(" + assocify(9) + ") = ")
			});
			selfdualAnswer[++click % 2](".vertex_10");
		});

		$(".vertex_11").click(function(){
			$(".vertex_11").append(function() {
				a[++b[10] % 2](".vertex_11", "f(" + assocify(10) + ") = ")
			});
			selfdualAnswer[++click % 2](".vertex_11");
		});

		$(".vertex_12").click(function(){
			$(".vertex_12").append(function() {
				a[++b[11] % 2](".vertex_12", "f(" + assocify(11) + ") = ")
			});
			selfdualAnswer[++click % 2](".vertex_12");
		});

		$(".vertex_13").click(function(){
			$(".vertex_13").append(function() {
				a[++b[12] % 2](".vertex_13", "f(" + assocify(12) + ") = ")
			});
			selfdualAnswer[++click % 2](".vertex_13");
		});

		$(".vertex_14").click(function(){
			$(".vertex_14").append(function() {
				a[++b[13] % 2](".vertex_14", "f(" + assocify(13) + ") = ")
			});
			selfdualAnswer[++click % 2](".vertex_14");
		});

		$(".vertex_15").click(function(){
			$(".vertex_15").append(function() {
				a[++b[14] % 2](".vertex_15", "f(" + assocify(14) + ") = ")
			});
			selfdualAnswer[++click % 2](".vertex_15");
		});

		$(".vertex_16").click(function(){
			$(".vertex_16").append(function() {
				a[++b[15] % 2](".vertex_16", "f(" + assocify(15) + ") = ")
			});
			selfdualAnswer[++click % 2](".vertex_16");
		});

	});
