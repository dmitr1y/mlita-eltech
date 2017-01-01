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
	}, b = -1;

	$(".facet_1").click(function(){
		a[++b % 2](".facet_1")
	});

	$(".facet_2").click(function(){
		a[++b % 2](".facet_2")
	});

	$(".facet_3").click(function(){
		a[++b % 2](".facet_3")
	});

	$(".facet_4").click(function(){
		a[++b % 2](".facet_4")
	});

	$(".facet_5").click(function(){
		a[++b % 2](".facet_5")
	});

	$(".facet_6").click(function(){
		a[++b % 2](".facet_6")
	});

	$(".facet_7").click(function(){
		a[++b % 2](".facet_7")
	});

	$(".facet_8").click(function(){
		a[++b % 2](".facet_8")
	});

	$(".facet_9").click(function(){
		a[++b % 2](".facet_9")
	});

	$(".facet_10").click(function(){
		a[++b % 2](".facet_10")
	});

	$(".facet_11").click(function(){
		a[++b % 2](".facet_11")
	});

	$(".facet_12").click(function(){
		a[++b % 2](".facet_12")
	});

	$(".facet_13").click(function(){
		a[++b % 2](".facet_13")
	});

	$(".facet_14").click(function(){
		a[++b % 2](".facet_14")
	});

	$(".facet_15").click(function(){
		a[++b % 2](".facet_15")
	});

	$(".facet_16").click(function(){
		a[++b % 2](".facet_16")
	});

	$(".facet_17").click(function(){
		a[++b % 2](".facet_17")
	});

	$(".facet_18").click(function(){
		a[++b % 2](".facet_18")
	});

	$(".facet_19").click(function(){
		a[++b % 2](".facet_19")
	});

	$(".facet_20").click(function(){
		a[++b % 2](".facet_20")
	});

	$(".facet_21").click(function(){
		a[++b % 2](".facet_21")
	});

	$(".facet_22").click(function(){
		a[++b % 2](".facet_22")
	});

	$(".facet_23").click(function(){
		a[++b % 2](".facet_23")
	});

	$(".facet_24").click(function(){
		a[++b % 2](".facet_24")
	});


});