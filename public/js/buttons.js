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

	$(".task_1").click(function(){
		$("#condition").empty().append("Ввести недостающие значения функции " + 
					"рядом с каждой вершиной гиперкуба, например, если f(0;0;0;0)=1, то около начала координат нужно поставить 1.");
	})

	$(".task_2").click(function(){
		$("#condition").empty().append("Дан гиперкуб, в вершинах стоят значения " + 
									   "0 или 1, задающие таким образом булеву функцию 4 переменных.")
	})


	$(".task_3").click(function(){
		$("#condition").empty().append("Дан гиперкуб, на нём отмечены вершины и каждой вершине сопоставлено её имя " + 
										" — элементарная конъюнкция");
	})

	$(".task_4").click(function(){
		$("#condition").empty().append("Заметим, что гиперкуб и является по сути основой для построения диаграммы Хассе." +
							"Дан гиперкуб, в вершинах стоят значения 0 или 1, задающие таким образом булеву функцию 4 переменных. ")
	})

	$(".task_5").click(function(){
		$("#condition").empty().append("Дан гиперкуб, в вершинах стоят значения 0 или 1, задающие таким образом булеву функцию 4 переменных.");
	})

	$(".task_6").click(function(){
		$("#condition").empty().append("Многочлен Жегалкина.")
	})

	$(".task_7").click(function(){
		$("#condition").empty().append("Классы замкнутости.")
	})	
});