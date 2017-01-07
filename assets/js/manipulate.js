$(document).ready(function(){
	var cube = document.getElementById('hyphyp');
	var translate3d = "translate3d(0,-20px,100px)";
	var rotateX = -15;
	var rotateY = -15;
	var rotateZ = 0;
	var perspective = "perspective(900px)";


	$(".a-top").click(function(){
		rotateX += 10;
		cube.style.transform = perspective + " rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg) rotateZ(" + rotateZ + "deg)";
		console.log(rotateX + ", " + rotateY);
	});

	$(".a-left").click(function(){
		rotateY += 10;
		cube.style.transform = perspective + " rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg) rotateZ(" + rotateZ + "deg)";
		console.log(rotateX + ", " + rotateY);
	});

	$(".a-right").click(function(){
		rotateY -= 10;
		cube.style.transform = perspective + " rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg) rotateZ(" + rotateZ + "deg)";
		console.log(rotateX + ", " + rotateY);
	});

	$(".a-bottom").click(function(){
		rotateX -= 10;
		cube.style.transform = perspective + " rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg) rotateZ(" + rotateZ + "deg)";
		console.log(rotateX + ", " + rotateY);
	});

});