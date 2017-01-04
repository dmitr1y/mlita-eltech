$(document).ready(function(){
	var changeColor = {
		0: function(clss) {
			// $(clss).empty();
			$(clss).css({
				'background-color': 'blue'
			});
		},
		1: function(clss) {
			// $(clss).empty();
			$(clss).css({
				'background-color': 'red'
			});	
		}
	}, 
	averageColor = {
		0: function(clss, mainBorder) {
			$(clss).css(mainBorder, "100px solid rgba(50, 200, 50,1)")
		},
		1: function(clss, mainBorder) {
			$(clss).css(mainBorder, "100px solid rgba(250, 50, 50,1)")
		}
	},
	b = [
	-1,-1,-1,-1, // 4
	-1,-1,-1,-1, // 8
	-1,-1,-1,-1, // 12
	-1,-1,-1,-1, // 16
	-1,-1,-1,-1, // 20
	-1,-1,-1,-1 // 24
	]

	$(".facet_1").click(function(){
		changeColor[++b[0] % 2](".facet_1")
		dnf[++b[0] % 2](".facet_1", "0000", "0001", "0100", "0101");
	});

	$(".facet_2").click(function(){
		// averageColor[++b[1] % 2](".facet_2", "border-left")
		dnf[++b[1] % 2](".facet_2", "0001", "0101", "1001", "1101");
	});

	$(".facet_3").click(function(){
		// averageColor[++b[2] % 2](".facet_3", "border-top")
		dnf[++b[2] % 2](".facet_3", "0100", "0101", "1100", "1101");
	});

	$(".facet_4").click(function(){
		// averageColor[++b[3] % 2](".facet_4", "border-right")
		dnf[++b[3] % 2](".facet_4", "0000", "0100", "1000", "1100");
	});

	$(".facet_5").click(function(){
		// averageColor[++b[4] % 2](".facet_5", "border-bottom")
		dnf[++b[4] % 2](".facet_5", "0000", "0001", "1000", "1001");
	});

	$(".facet_6").click(function(){
		changeColor[++b[5] % 2](".facet_6")
		dnf[++b[5] % 2](".facet_6", "1000", "1001", "1100", "1101");
	});

	$(".facet_7").click(function(){
		changeColor[++b[6] % 2](".facet_7")
		dnf[++b[6] % 2](".facet_7", "0010", "0011", "0110", "0111");
	});

	$(".facet_8").click(function(){
		// averageColor[++b[7] % 2](".facet_8", "border-left")
		dnf[++b[7] % 2](".facet_8", "0011", "0111", "1011", "1111");
	});

	$(".facet_9").click(function(){
		// averageColor[++b[8] % 2](".facet_9", "border-top")
		dnf[++b[8] % 2](".facet_9", "0110", "0111", "1110", "1111");
	});

	$(".facet_10").click(function(){
		// averageColor[++b[9] % 2](".facet_10", "border-right")
		dnf[++b[9] % 2](".facet_10", "0010", "0110", "1010", "1110");
	});

	$(".facet_11").click(function(){
		// averageColor[++b[10] % 2](".facet_11", "border-bottom")
	});

	$(".facet_12").click(function(){
		changeColor[++b[11] % 2](".facet_12")
	});

	$(".facet_13").click(function(){
		changeColor[++b[12] % 2](".facet_13")
	});

	$(".facet_14").click(function(){
		changeColor[++b[13] % 2](".facet_14")
	});

	$(".facet_15").click(function(){
		changeColor[++b[14] % 2](".facet_15")
	});

	$(".facet_16").click(function(){
		changeColor[++b[15] % 2](".facet_16")
	});

	$(".facet_17").click(function(){
		// averageColor[++b[16] % 2](".facet_17", "border-left")
	});

	$(".facet_18").click(function(){
		// averageColor[++b[17] % 2](".facet_18", "border-top")
	});

	$(".facet_19").click(function(){
		// averageColor[++b[18] % 2](".facet_19", "border-right")
	});

	$(".facet_20").click(function(){
		// averageColor[++b[19] % 2](".facet_20", "border-bottom")
	});

	$(".facet_21").click(function(){
		changeColor[++b[20] % 2](".facet_21")
	});

	$(".facet_22").click(function(){
		changeColor[++b[21] % 2](".facet_22")
	});

	$(".facet_23").click(function(){
		changeColor[++b[22] % 2](".facet_23")
	});

	$(".facet_24").click(function(){
		changeColor[++b[23] % 2](".facet_24")
	});


});