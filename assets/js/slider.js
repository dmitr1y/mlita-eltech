$(document).ready(function(){
	var xRange = document.getElementById("xRange"),
		yRange = document.getElementById("yRange"),
		zRange = document.getElementById("zRange"),
		cube = document.getElementById("hyphyp"),
		translate3d = "translate3d(0,-20px,100px)",
		perspective = "perspective(900px)",
		rotateX = 0,
		rotateY = 0,
		rotateZ = 0
		$("#coordX").empty().append(rotateX)
		$("#coordY").empty().append(rotateY)
		$("#coordZ").empty().append(rotateZ)


	xRange.addEventListener("input", function(){
		rotateX = xRange.value
		rotateY = yRange.value
		rotateZ = zRange.value
		cube.style.transform = perspective + " rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg) rotateZ(" + rotateZ + "deg)"
		$("#coordX").empty().append(rotateX)
	}, false)

	yRange.addEventListener("input", function(){
		rotateX = xRange.value
		rotateY = yRange.value
		rotateZ = zRange.value
		cube.style.transform = perspective + " rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg) rotateZ(" + rotateZ + "deg)"
		$("#coordY").empty().append(rotateY)
	}, false)

	zRange.addEventListener("input", function(){
		rotateX = xRange.value
		rotateY = yRange.value
		rotateZ = zRange.value
		cube.style.transform = perspective + " rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg) rotateZ(" + rotateZ + "deg)"
		$("#coordZ").empty().append(rotateZ)
	}, false)
});