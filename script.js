var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body =  document.getElementById("gradient");




var button = document.getElementById("random");

function randomColor() {
	var hex = Math.floor(Math.random() * 16777215).toString(16);
	return "#" + hex.padStart(6, "0");
}



function setGradient() {
	body.style.background =
	 "linear-gradient(to right,"
	  + color1.value 
	  +", "
	   + color2.value
	   + ")";

	   css.textContent = body.style.background + ","
}

button.addEventListener("click", setRandomColors);

function setRandomColors() {
	var colorA = randomColor();
	var colorB = randomColor();

	color1.value = colorA;
	color2.value = colorB;

	setGradient();
}



// color1.addEventListener("input",  setGradient);



// color2.addEventListener("input",  setGradient);