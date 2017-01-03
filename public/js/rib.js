$(document).ready(function(){
	var clickOnExternalRib = {
		0: function(clss) {
			$(clss).css({'border-top': '20px solid #0fb'})
		},
		1: function(clss) {
			$(clss).css({'border-top': '20px solid orange'})
		}
	},
	clickOnInternalRib = {
		0: function(clss) {
			$(clss).css({'border-top': '10px solid #14f'})
		},
		1: function(clss) {
			$(clss).css({'border-top': '10px solid purple'})
		}
	},
	clickOnAverageRib = {
		0: function(clss) {
			$(clss).css({'border-top': '20px solid #0bf'})
		},
		1: function(clss) {
			$(clss).css({'border-top': '20px solid orange'})
		}
	}, b = -1;

	$(".rib_1").click(function(){
		clickOnExternalRib[++b % 2](".rib_1");
		clickOnExternalRib[b % 2](".rib_5");
	});

	$(".rib_5").click(function(){
		clickOnExternalRib[++b % 2](".rib_1");
		clickOnExternalRib[b % 2](".rib_5");
	}); // 1

	$(".rib_2").click(function(){
		clickOnExternalRib[++b % 2](".rib_2");
		clickOnExternalRib[b % 2](".rib_14");
	});

	$(".rib_14").click(function(){
		clickOnExternalRib[++b % 2](".rib_2");
		clickOnExternalRib[b % 2](".rib_14");
	}); // 2

	$(".rib_4").click(function(){
		clickOnExternalRib[++b % 2](".rib_4");
		clickOnExternalRib[b % 2](".rib_11");
	}); 

	$(".rib_11").click(function(){
		clickOnExternalRib[++b % 2](".rib_4");
		clickOnExternalRib[b % 2](".rib_11");
	}); // 3

	$(".rib_16").click(function(){
		clickOnExternalRib[++b % 2](".rib_16");
		clickOnExternalRib[b % 2](".rib_23");
	});

	$(".rib_23").click(function(){
		clickOnExternalRib[++b % 2](".rib_16");
		clickOnExternalRib[b % 2](".rib_23");
	}); // 4

	$(".rib_10").click(function(){
		clickOnExternalRib[++b % 2](".rib_10");
		clickOnExternalRib[b % 2](".rib_23");
	});  

	$(".rib_22").click(function(){
		clickOnExternalRib[++b % 2](".rib_10");
		clickOnExternalRib[b % 2](".rib_22");
	}); // 5

	$(".rib_3").click(function(){
		clickOnExternalRib[++b % 2](".rib_3");
		clickOnExternalRib[b % 2](".rib_21");
	});

	$(".rib_21").click(function(){
		clickOnExternalRib[++b % 2](".rib_3");
		clickOnExternalRib[b % 2](".rib_21");
	}); // 6

	$(".rib_20").click(function(){
		clickOnExternalRib[++b % 2](".rib_20");
		clickOnExternalRib[b % 2](".rib_24");
	});

	$(".rib_24").click(function(){
		clickOnExternalRib[++b % 2](".rib_20");
		clickOnExternalRib[b % 2](".rib_24");
	}); // 7

	$(".rib_6").click(function(){
		clickOnExternalRib[++b % 2](".rib_6");
		clickOnExternalRib[b % 2](".rib_17");
	});

	$(".rib_17").click(function(){
		clickOnExternalRib[++b % 2](".rib_6");
		clickOnExternalRib[b % 2](".rib_17");
	}); // 8

	$(".rib_8").click(function(){
		clickOnExternalRib[++b % 2](".rib_8");
		clickOnExternalRib[b % 2](".rib_9");
	});

	$(".rib_9").click(function(){
		clickOnExternalRib[++b % 2](".rib_8");
		clickOnExternalRib[b % 2](".rib_9");
 	}); // 9
 
	$(".rib_12").click(function(){
		clickOnExternalRib[++b % 2](".rib_12");
		clickOnExternalRib[b % 2](".rib_19");
	});

	$(".rib_19").click(function(){
		clickOnExternalRib[++b % 2](".rib_12");
		clickOnExternalRib[b % 2](".rib_19");
	}); // 10

	$(".rib_7").click(function(){
		clickOnExternalRib[++b % 2](".rib_7");
		clickOnExternalRib[b % 2](".rib_13");
	});

	$(".rib_13").click(function(){
		clickOnExternalRib[++b % 2](".rib_7");
		clickOnExternalRib[b % 2](".rib_13");
	}); // 11

	$(".rib_15").click(function(){
		clickOnExternalRib[++b % 2](".rib_15");
		clickOnExternalRib[b % 2](".rib_18");
	});

	$(".rib_18").click(function(){
		clickOnExternalRib[++b % 2](".rib_15");
		clickOnExternalRib[b % 2](".rib_18");
	}); // 12

	$(".rib_25").click(function(){
		clickOnInternalRib[++b % 2](".rib_25");
		clickOnInternalRib[b % 2](".rib_45");
	}); 

	$(".rib_45").click(function(){
		clickOnInternalRib[++b % 2](".rib_25");
		clickOnInternalRib[b % 2](".rib_45");
	}); // 13


	$(".rib_28").click(function(){
		clickOnInternalRib[++b % 2](".rib_28");
		clickOnInternalRib[b % 2](".rib_35");
	}); 

	$(".rib_35").click(function(){
		clickOnInternalRib[++b % 2](".rib_28");
		clickOnInternalRib[b % 2](".rib_35");
	}); // 14

	$(".rib_33").click(function(){
		clickOnInternalRib[++b % 2](".rib_33");
		clickOnInternalRib[b % 2](".rib_47");
	});

	$(".rib_47").click(function(){
		clickOnInternalRib[++b % 2](".rib_33");
		clickOnInternalRib[b % 2](".rib_47");
	}); // 15

	$(".rib_27").click(function(){
		clickOnInternalRib[++b % 2](".rib_27");
		clickOnInternalRib[b % 2](".rib_29");
	});

	$(".rib_29").click(function(){
		clickOnInternalRib[++b % 2](".rib_27");
		clickOnInternalRib[b % 2](".rib_29");
	}); // 16

	$(".rib_32").click(function(){
		clickOnInternalRib[++b % 2](".rib_32");
		clickOnInternalRib[b % 2](".rib_34");
	});

	$(".rib_34").click(function(){
		clickOnInternalRib[++b % 2](".rib_32");
		clickOnInternalRib[b % 2](".rib_34");
	}); // 17

	$(".rib_31").click(function(){
		clickOnInternalRib[++b % 2](".rib_31");
		clickOnInternalRib[b % 2](".rib_40");
	});

	$(".rib_40").click(function(){
		clickOnInternalRib[++b % 2](".rib_31");
		clickOnInternalRib[b % 2](".rib_40");
	}); // 18

	$(".rib_26").click(function(){
		clickOnInternalRib[++b % 2](".rib_26");
		clickOnInternalRib[b % 2](".rib_38");
	});

	$(".rib_38").click(function(){
		clickOnInternalRib[++b % 2](".rib_26");
		clickOnInternalRib[b % 2](".rib_38");
	}); // 19

	$(".rib_37").click(function(){
		clickOnInternalRib[++b % 2](".rib_37");
		clickOnInternalRib[b % 2](".rib_48");
	});

	$(".rib_48").click(function(){
		clickOnInternalRib[++b % 2](".rib_37");
		clickOnInternalRib[b % 2](".rib_48");
	}); // 20

	$(".rib_30").click(function(){
		clickOnInternalRib[++b % 2](".rib_30");
		clickOnInternalRib[b % 2](".rib_41");
	});

	$(".rib_41").click(function(){
		clickOnInternalRib[++b % 2](".rib_30");
		clickOnInternalRib[b % 2](".rib_41");
	}); // 21

	$(".rib_39").click(function(){
		clickOnInternalRib[++b % 2](".rib_39");
		clickOnInternalRib[b % 2](".rib_43");
	});

	$(".rib_43").click(function(){
		clickOnInternalRib[++b % 2](".rib_39");
		clickOnInternalRib[b % 2](".rib_43");
	}); // 22

	$(".rib_36").click(function(){
		clickOnInternalRib[++b % 2](".rib_36");
		clickOnInternalRib[b % 2](".rib_42");
	});

	$(".rib_42").click(function(){
		clickOnInternalRib[++b % 2](".rib_36");
		clickOnInternalRib[b % 2](".rib_42");
	}); // 23

	$(".rib_44").click(function(){
		clickOnInternalRib[++b % 2](".rib_44");
		clickOnInternalRib[b % 2](".rib_46");
	});

	$(".rib_46").click(function(){
		clickOnInternalRib[++b % 2](".rib_44");
		clickOnInternalRib[b % 2](".rib_46");
	}); // 24


	$(".av_rib1").click(function(){
		clickOnAverageRib[b % 2](".av_rib1");
		clickOnAverageRib[++b % 2](".av_rib2");
	});

	$(".av_rib2").click(function(){
		clickOnAverageRib[++b % 2](".av_rib1");
		clickOnAverageRib[b % 2](".av_rib2");
	}); // 25

	$(".av_rib3").click(function(){
		clickOnAverageRib[++b % 2](".rib_44");
		clickOnAverageRib[b % 2](".av_rib3");
	});

	$(".av_rib4").click(function(){
		clickOnAverageRib[++b % 2](".av_rib3");
		clickOnAverageRib[b % 2](".av_rib4");
	}); // 26

	$(".av_rib5").click(function(){
		clickOnAverageRib[++b % 2](".av_rib5");
		clickOnAverageRib[b % 2](".av_rib6");
	});

	$(".av_rib6").click(function(){
		clickOnAverageRib[++b % 2](".av_rib5");
		clickOnAverageRib[b % 2](".av_rib6");
	});  // 27

	$(".av_rib7").click(function(){
		clickOnAverageRib[++b % 2](".av_rib7");
		clickOnAverageRib[b % 2](".av_rib8");
	});

	$(".av_rib8").click(function(){
		clickOnAverageRib[++b % 2](".av_rib7");
		clickOnAverageRib[b % 2](".av_rib8");
	}); // 28


});

