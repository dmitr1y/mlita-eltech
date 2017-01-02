$(document).ready(function(){
	var variant = 0;
	var assocify = function(s, k = 4){
		let n = s.toString(2)
		zeros = ""
		for (i = 0; i < k; i++)
			zeros += "0"
		return zeros.substr(n.length) + n
	}

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
		$(".title").empty().append("Вычисление значений функции");
		$("#condition").empty().append("Ввести недостающие значения функции " + 
			"рядом с каждой вершиной гиперкуба, например, если f(0;0;0;0)=1, то около начала координат нужно поставить 1.");
		$.getJSON(host + '/task/expressions', function(json, textStatus) {
			console.log(json);
			variant = json.variant;
			for (var i = 0; i < 16; ++i) {
				$(".vertex_" + (i + 1)).empty().append(json.truthTable.assoc[assocify(i)]);
			}
		});
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

	$(".send").click(function(){
		var answer = {
			assoc: {}
		};
		for (var i = 0; i < 16; ++i) {
			answer.assoc[assocify(i)] = $(".vertex_" + (i + 1)).text();
		}
		answer.variant = variant;
		answer.dir = "expressions";
		$.ajax({
			url: host + '/task',
			type: 'POST',
			contentType: "application/json",
			dataType: 'json',
			data: JSON.stringify(answer)
		})
		.done(function() {
			console.log("success");
		})
		.fail(function() {
			console.log("error");
		})
		.always(function(data) {
			console.log(data);
			$(".answer").append(data.more);
		});
		console.log(JSON.stringify(answer));
	})
});