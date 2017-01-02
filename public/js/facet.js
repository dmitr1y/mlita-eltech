$(document).ready(function(){
	var a = {
		0: function(clss) {
			$(clss).empty();
			$(clss).css({
				'background-color': 'blue'
			});
		},
		1: function(clss) {
			$(clss).empty();
			$(clss).css({
				'background-color': 'red'
			});	
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
		-1, // 16
		-1,
		-1,
		-1,
		-1, // 20
		-1,
		-1,
		-1,
		-1 // 24
	]

	$(".facet_1").click(function(){
		a[++b[0] % 2](".facet_1")
	});

	$(".facet_2").click(function(){
		a[++b[1] % 2](".facet_2")
	});

	$(".facet_3").click(function(){
		a[++b[2] % 2](".facet_3")
	});

	$(".facet_4").click(function(){
		a[++b[3] % 2](".facet_4")
	});

	$(".facet_5").click(function(){
		a[++b[4] % 2](".facet_5")
	});

	$(".facet_6").click(function(){
		a[++b[5] % 2](".facet_6")
	});

	$(".facet_7").click(function(){
		a[++b[6] % 2](".facet_7")
	});

	$(".facet_8").click(function(){
		a[++b[7] % 2](".facet_8")
	});

	$(".facet_9").click(function(){
		a[++b[8] % 2](".facet_9")
	});

	$(".facet_10").click(function(){
		a[++b[9] % 2](".facet_10")
	});

	$(".facet_11").click(function(){
		a[++b[10] % 2](".facet_11")
	});

	$(".facet_12").click(function(){
		a[++b[11] % 2](".facet_12")
	});

	$(".facet_13").click(function(){
		a[++b[12] % 2](".facet_13")
	});

	$(".facet_14").click(function(){
		a[++b[13] % 2](".facet_14")
	});

	$(".facet_15").click(function(){
		a[++b[14] % 2](".facet_15")
	});

	$(".facet_16").click(function(){
		a[++b[15] % 2](".facet_16")
	});

	$(".facet_17").click(function(){
		a[++b[16] % 2](".facet_17")
	});

	$(".facet_18").click(function(){
		a[++b[17] % 2](".facet_18")
	});

	$(".facet_19").click(function(){
		a[++b[18] % 2](".facet_19")
	});

	$(".facet_20").click(function(){
		a[++b[19] % 2](".facet_20")
	});

	$(".facet_21").click(function(){
		a[++b[20] % 2](".facet_21")
	});

	$(".facet_22").click(function(){
		a[++b[21] % 2](".facet_22")
	});

	$(".facet_23").click(function(){
		a[++b[22] % 2](".facet_23")
	});

	$(".facet_24").click(function(){
		a[++b[23] % 2](".facet_24")
	});


});