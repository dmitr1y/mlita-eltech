$(document).ready(function(){
	$("#external_view").click(function(){
		$(".rib").fadeIn();
		$(".facet").fadeIn();
		$(".vertex").fadeIn();
	});

	$("#average_view").click(function(){
		$(".external_facet").fadeOut();
		$(".vertex").fadeIn();
		$(".average_facet").fadeIn();
		$(".external_rib").fadeOut();
	});

	$("#internal_view").click(function(){
		$(".external_facet").fadeOut();
		$(".average_facet").fadeOut();
		$(".external_vertex").fadeOut();
		$(".external_rib").fadeOut();
	});
});