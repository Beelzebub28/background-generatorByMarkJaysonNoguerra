var css = document.querySelector('h3');
var color1 = document.querySelector('#colorr');
var color2 = document.querySelector('#coloo');
var body = document.querySelector('#gradient')


function colorPicker(){
	body.style.background = "linear-gradient(to right, " 
	+ color1.value + ', ' 
	+ color2.value + ')';

	css.textContent = body.style.background + ';';
}

color1.addEventListener('input', colorPicker)

color2.addEventListener('input', colorPicker)


var triple = function(x) {
	return x * 3
}
var waffle = triple
waffle(30)