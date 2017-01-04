$(document).ready(function(){
	var variant = 0;
	var task = 0;
	var letter = 0;

	$("#external_view").click(function(){
		$(".rib").fadeIn();
		$(".facet").fadeIn();
		$(".vertex").fadeIn();
	});

	$("#average_view").click(function(){
		$(".external_facet").fadeOut();
		$(".vertex").fadeIn();
		$(".average_rib").fadeIn();
		$(".average_facet").fadeIn();
		$(".external_rib").fadeOut();
	});

	$("#internal_view").click(function(){
		$(".average_rib").fadeOut();
		$(".external_facet").fadeOut();
		$(".average_facet").fadeOut();
		$(".external_vertex").fadeOut();
		$(".external_rib").fadeOut();
	});

	$("#return").click(function(){
		$(".cube").css({
			'-webkit-transform': 'perspective(900px) rotate3d(1, 1, 0, -15deg)',
			'-moz-transform': 'perspective(900px) rotate3d(1, 1, 0, -15deg)',
			'-o-transform': 'perspective(900px) rotate3d(1, 1, 0, -15deg)',
			'-ms-transform': 'perspective(900px) rotate3d(1, 1, 0, -15deg)',
			'transform': 'perspective(900px) rotate3d(1, 1, 0, -15deg)'
		})
	})

	$(".task_1").click(function(){
		$(".title").empty().append("Вычисление значений функции");
		$("#condition").empty().append("Ввести недостающие значения функции " + 
			"рядом с каждой вершиной гиперкуба, например, если f(0;0;0;0)=1, то около начала координат нужно поставить 1.");
		$.getJSON(host + '/task/expressions', function(json, textStatus) {
			console.log(json);
			variant = json.variant;
			for (var i = 0; i < 16; ++i) {
				$(".vertex_" + (i + 1)).empty().append("f(" + assocify(i) + ") = " + json.truthTable.assoc[assocify(i)]);
				putVertex(i, ".vertex_");
			}
			$("#expression").empty().append(json.expression);
		});
		task = 1;
	})

	$(".task_2").click(function(){
		$("#condition").empty().append("Дан гиперкуб, в вершинах стоят значения " + 
			"0 или 1, задающие таким образом булеву функцию 4 переменных.");
		$.getJSON(host + '/task/monotonic', function(json, textStatus) {
			console.log(json);
			variant = json.variant;
			for (var i = 0; i < 16; ++i) {
				$(".vertex_" + (i + 1)).empty().append("f(" + assocify(i) + ") = " + json.truthTable.assoc[assocify(i)]);
				putVertex(i, ".vertex_");
			}
			$("#expression").empty().append(json.expression);
		});
		task = 2;
	})


	$(".task_3").click(function(){
		$("#condition").empty().append("Дан гиперкуб, на нём отмечены вершины и каждой вершине сопоставлено её имя " + 
			" — элементарная конъюнкция");
	})

	$(".task_4").click(function(){
		$(".title").empty().append("Монотонность. Диаграмма Хассе");
		task = 4;
	})

	$(".task_5").click(function(){
		$.getJSON(host + '/task/selfdual', function(json, textStatus) {
			$("#condition").empty().append(json.text);
			console.log(json);
			variant = json.variant;
			for (var i = 0; i < 16; ++i) {
				$(".vertex_" + (i + 1)).empty().append("f(" + assocify(i) + ") = " + json.truthTable.assoc[assocify(i)]);
				putVertex(i, ".vertex_");
			}
			letter = json.letter;
		})
		task = 5;
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
			var l = $(".vertex_" + (i + 1)).text();
			answer.assoc[assocify(i)] = parseInt(l[l.length - 1]);
		}
		answer.variant = variant;
		switch(task) {
			case 1: {
				answer.dir = "expressions";
				break;
			}
			case 2: {
				answer.dir = "dummy_variables";
				answer.dummy_variables = dummy_variables.answer;
				break;
			}
			case 3: {
				answer.dir = "dnf";
				break;
			}
			case 4: {
				answer.dir = "monotonic";
				break;
			}
			case 5: {
				answer.dir = "selfdual";
				answer.letter = letter;
				answer.vertexes = [
				assocify(parseInt(/vertex_(\d+)/.exec(selfdualAnswer.firstClass)[1]) - 1),
				assocify(parseInt(/vertex_(\d+)/.exec(selfdualAnswer.secondClass)[1]) - 1)
				];
				break;
			}
			case 6: {
				answer.dir = "jegalkin";
				break;
			}
			case 7: {
				answer.dir = "post";
				break;
			}
		}
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
			$(".answer").empty().append(data.more);
		});
		console.log(JSON.stringify(answer));
	})
});