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
		$(".answer").empty();
		canUseVertex = 1;
		canUseRib = 0;
		canUseFacet = 0;
		// $("#condition").empty().append("Ввести недостающие значения функции " + 
			// "рядом с каждой вершиной гиперкуба, например, если f(0;0;0;0)=1, то около начала координат нужно поставить 1.");
		$.getJSON(host + '/task/expressions', function(json, textStatus) {
			console.log(json);
			variant = json.variant;
			for (var i = 0; i < 16; ++i) {
				$(".vertex_" + (i + 1)).empty().append("f(" + assocify(i) + ") = " + json.truthTable.assoc[assocify(i)]);
				putVertex(i, ".vertex_");
			}
			$("#condition").empty().append(json.condition);
		});
		task = 1;
		console.log(canUseVertex + " v, " + canUseRib + " r, " + canUseFacet + " f");
	})

	$(".task_2").click(function(){
		canUseVertex = 0;
		canUseRib = 1;
		canUseFacet = 0;
		$(".title").empty().append("Фиктивные переменные");
		$(".answer").empty();
		$.getJSON(host + '/task/dummy_variables', function(json, textStatus) {
			console.log(json);
			variant = json.variant;
			for (var i = 0; i < 16; ++i) {
				$(".vertex_" + (i + 1)).empty().append("f(" + assocify(i) + ") = " + json.truthTable.assoc[assocify(i)]);
				putVertex(i, ".vertex_");
			}
			$("#condition").empty().append(json.condition);
			letter = json.letter;
		});
		task = 2;
		console.log(canUseVertex + " v, " + canUseRib + " r, " + canUseFacet + " f");
	})


	$(".task_3").click(function(){
		canUseVertex = 1;
		canUseFacet = 1;
		canUseRib = 1;
		$(".title").empty().append("Минимизация ДНФ");
		$(".answer").empty();
		$.getJSON(host + '/task/dnf', function(json, textStatus) {
			console.log(json);
			variant = json.variant;
			for (var i = 0; i < 16; ++i) {
				$(".vertex_" + (i + 1)).empty().append(convertToSymbols(assocify(i)) + " = " + json.truthTable.assoc[assocify(i)]);
				putVertex(i, ".vertex_");
			}
			$("#condition").empty().append(json.condition);
		});
		console.log(canUseVertex + " v, " + canUseRib + " r, " + canUseFacet + " f");
	})

	$(".task_4").click(function() {
		$(".title").empty().append("Монотонность. Диаграмма Хассе");
		$(".answer").empty();
		canUseFacet = 0;
		$.getJSON(host + '/task/monotonic', function(json, textStatus) {
			console.log(json);
			variant = json.variant;
			for (var i = 0; i < 16; ++i) {
				$(".vertex_" + (i + 1)).empty().append("f(" + assocify(i) + ") = " + json.truthTable.assoc[assocify(i)]);
				putVertex(i, ".vertex_");
			}
			$("#condition").empty().append(json.condition);
			letter = json.letter;
			if (letter == "b" || letter == "c") {
				canUseRib = 0;
				canUseVertex = 1;
			} else {
				canUseRib = 1;
				canUseVertex = 0;
			}
		});
		task = 4;
		console.log(canUseVertex + " v, " + canUseRib + " r, " + canUseFacet + " f");
	})

	$(".task_5").click(function(){
		canUseRib = 0;
		canUseFacet = 0;
		canUseVertex = 1;
		$(".title").empty().append("Самодвойственность");
		$(".answer").empty();
		$.getJSON(host + '/task/selfdual', function(json, textStatus) {
			$("#condition").empty().append(json.text);
			console.log(json);
			variant = json.variant;
			for (var i = 0; i < 16; ++i) {
				$(".vertex_" + (i + 1)).empty().append("f(" + assocify(i) + ") = " + json.truthTable.assoc[assocify(i)]);
				putVertex(i, ".vertex_");
			}
			$("#condition").empty().append(json.condition);
			letter = json.letter;
		})
		task = 5;
		console.log(canUseVertex + " v, " + canUseRib + " r, " + canUseFacet + " f");
	})

	$(".task_6").click(function(){
		canUseRib = 0;
		canUseVertex = 0;
		canUseFacet = 0;
		$(".title").empty().append("Многочлен Жегалкина");
		$(".answer").empty();
		$.getJSON(host + '/task/expressions', function(json, textStatus) {
			console.log(json);
			variant = json.variant;
			for (var i = 0; i < 16; ++i) {
				$(".vertex_" + (i + 1)).empty().append(convertIntoZhegalkin(i,  ".vertex_", assocify(i)) + " = " + json.truthTable.assoc[assocify(i)]);
			}
			$("#condition").empty().append(json.condition);
		});
		console.log(canUseVertex + " v, " + canUseRib + " r, " + canUseFacet + " f");
	})

	$(".task_7").click(function(){
		$(".title").empty().append("Классы замкнутости");
		$(".answer").empty();
		canUseVertex = 1;
		canUseRib = 0;
		canUseFacet = 0;
		$.getJSON(host + '/task/insularity', function(json, textStatus) {
			console.log(json);
			variant = json.variant;
			for (var i = 0; i < 16; ++i) {
				$(".vertex_" + (i + 1)).empty().append("f(" + assocify(i) + ") = " + json.truthTable.assoc[assocify(i)]);
				putVertex(i, ".vertex_");
			}
			$("#condition").empty().append(json.condition);
		});
		console.log(canUseVertex + " v, " + canUseRib + " r, " + canUseFacet + " f");
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
				answer.dummy_variables = vertexFromRib.answer;
				answer.letter = letter;
				break;
			}
			case 3: {
				answer.dir = "dnf";
				answer.facets = vertexFromFacet.answer;
				answer.ribs = vertexFromRib.answer;
				break;
			}
			case 4: {
				answer.dir = "monotonic";
				answer.ribs = vertexFromRib.answer;
				answer.letter = letter;
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
				answer.dir = "insularity";
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