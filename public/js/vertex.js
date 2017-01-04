$(document).ready(function(){

	$(".cube").mousemove(function(e){
		$(".cube").css({
			// '-webkit-transform': 'translate3d(0, -20px, 100px) rotateX(' + e.pageX + 'deg) rotateY(' + e.pageY + 'deg)',
			// '-moz-transform': 'translate3d(0, -20px, 100px) rotateX(' + e.pageX + 'deg) rotateY(' + e.pageY + 'deg)',
			// '-o-transform': 'translate3d(0, -20px, 100px) rotateX(' + e.pageX + 'deg) rotateY(' + e.pageY + 'deg)',
			// '-ms-transform': 'translate3d(0, -20px, 100px) rotateX(' + e.pageX + 'deg) rotateY(' + e.pageY + 'deg)',
			// 'transform': 'translate3d(0, -20px, 100px) rotateX(' + e.pageX + 'deg) rotateY(' + e.pageY + 'deg)'
		})
	});

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
	-1,-1,-1,-1, // 4
	-1,-1,-1,-1, // 8
	-1,-1,-1,-1, // 12
	-1,-1,-1,-1 // 16
	];

	$(".vertex_1").click(function(){
		$(".vertex_1").append(function() {
			a[++b[0] % 2](".vertex_1", "f(" + assocify(0) + ") = ")
		});
		selfdualAnswer[++click % 2](".vertex_1");
		putVertex(1, ".vertex_");
	});

	$(".vertex_2").click(function(){
		$(".vertex_2").append(function() {
			a[++b[1] % 2](".vertex_2", "f(" + assocify(1) + ") = ")
		});
		selfdualAnswer[++click % 2](".vertex_2");
		putVertex(2, ".vertex_");
	});

	$(".vertex_3").click(function(){
		$(".vertex_3").append(function() {
			a[++b[2] % 2](".vertex_3", "f(" + assocify(2) + ") = ")
		});
		selfdualAnswer[++click % 2](".vertex_3");
		putVertex(3, ".vertex_");
	});

	$(".vertex_4").click(function(){
		$(".vertex_4").append(function() {
			a[++b[3] % 2](".vertex_4", "f(" + assocify(3) + ") = ")
		});
		selfdualAnswer[++click % 2](".vertex_4");
		putVertex(4, ".vertex_");
	});

	$(".vertex_5").click(function(){
		$(".vertex_5").append(function() {
			a[++b[4] % 2](".vertex_5", "f(" + assocify(4) + ") = ")
		});
		selfdualAnswer[++click % 2](".vertex_5");
		putVertex(5, ".vertex_");
	});

	$(".vertex_6").click(function(){
		$(".vertex_6").append(function() {
			a[++b[5] % 2](".vertex_6", "f(" + assocify(5) + ") = ")
		});
		selfdualAnswer[++click % 2](".vertex_6");
		putVertex(6, ".vertex_");
	});

	$(".vertex_7").click(function(){
		$(".vertex_7").append(function() {
			a[++b[6] % 2](".vertex_7", "f(" + assocify(6) + ") = ")
		});
		selfdualAnswer[++click % 2](".vertex_7");
		putVertex(7, ".vertex_");
	});

	$(".vertex_8").click(function(){
		$(".vertex_8").append(function() {
			a[++b[7] % 2](".vertex_8", "f(" + assocify(7) + ") = ")
		});
		selfdualAnswer[++click % 2](".vertex_8");
		putVertex(8, ".vertex_");
	});

	$(".vertex_9").click(function(){
		$(".vertex_9").append(function() {
			a[++b[8] % 2](".vertex_9", "f(" + assocify(8) + ") = ")
		});
		selfdualAnswer[++click % 2](".vertex_9");
		putVertex(9, ".vertex_");
	});

	$(".vertex_10").click(function(){
		$(".vertex_10").append(function() {
			a[++b[9] % 2](".vertex_10", "f(" + assocify(9) + ") = ")
		});
		selfdualAnswer[++click % 2](".vertex_10");
		putVertex(10, ".vertex_");
	});

	$(".vertex_11").click(function(){
		$(".vertex_11").append(function() {
			a[++b[10] % 2](".vertex_11", "f(" + assocify(10) + ") = ")
		});
		selfdualAnswer[++click % 2](".vertex_11");
		putVertex(11, ".vertex_");
	});

	$(".vertex_12").click(function(){
		$(".vertex_12").append(function() {
			a[++b[11] % 2](".vertex_12", "f(" + assocify(11) + ") = ")
		});
		selfdualAnswer[++click % 2](".vertex_12");
		putVertex(12, ".vertex_");
	});

	$(".vertex_13").click(function(){
		$(".vertex_13").append(function() {
			a[++b[12] % 2](".vertex_13", "f(" + assocify(12) + ") = ")
		});
		selfdualAnswer[++click % 2](".vertex_13");
		putVertex(13, ".vertex_");
	});

	$(".vertex_14").click(function(){
		$(".vertex_14").append(function() {
			a[++b[13] % 2](".vertex_14", "f(" + assocify(13) + ") = ")
		});
		selfdualAnswer[++click % 2](".vertex_14");
		putVertex(14, ".vertex_");
	});

	$(".vertex_15").click(function(){
		$(".vertex_15").append(function() {
			a[++b[14] % 2](".vertex_15", "f(" + assocify(14) + ") = ")
		});
		selfdualAnswer[++click % 2](".vertex_15");
		putVertex(15, ".vertex_");
	});

	$(".vertex_16").click(function(){
		$(".vertex_16").append(function() {
			a[++b[15] % 2](".vertex_16", "f(" + assocify(15) + ") = ")
		});
		selfdualAnswer[++click % 2](".vertex_16");
		putVertex(16, ".vertex_");
	});

});
